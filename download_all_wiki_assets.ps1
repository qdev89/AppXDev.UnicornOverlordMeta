$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

New-Item -ItemType Directory -Force public/images/characters | Out-Null
New-Item -ItemType Directory -Force public/images/items | Out-Null

$imageMap = @{}
$gaicontinue = ""

Write-Host "Fetching full image directory from Fandom API..."
do {
    $apiUrl = "https://unicornoverlord.fandom.com/api.php?action=query&generator=allimages&gailimit=500&prop=imageinfo&iiprop=url&format=json"
    if ($gaicontinue) {
        $apiUrl += "&gaicontinue=$gaicontinue"
    }
    
    $res = Invoke-RestMethod -UserAgent $ua -Uri $apiUrl
    foreach ($prop in $res.query.pages.psobject.properties) {
        $title = $prop.value.title
        $url = $prop.value.imageinfo[0].url
        if ($title -and $url) {
            $cleanTitle = $title -replace "^File:", ""
            $imageMap[$cleanTitle.ToLower()] = $url
        }
    }
    
    if ($res.continue -and $res.continue.gaicontinue) {
        $gaicontinue = [System.Web.HttpUtility]::UrlEncode($res.continue.gaicontinue)
    } else {
        $gaicontinue = $null
    }
} while ($gaicontinue)

Write-Host "Total images mapped across all pages: $($imageMap.Count)"

# Dump mapped keys to a file for inspection
$imageMap.Keys | Sort-Object | Out-File -FilePath "mapped_wiki_files.txt"

$charTargets = @(
    @{ id="alain-high-lord"; search="alain" },
    @{ id="yunifi-snow-ranger"; search="yunifi" },
    @{ id="rosalinde-elven-prophet"; search="rosalinde" },
    @{ id="eltolinde-elven-sibyl"; search="eltolinde" },
    @{ id="berengaria-renegade"; search="berengaria" },
    @{ id="selvie-druid"; search="selvie" },
    @{ id="raenys-featherbow"; search="raenys" },
    @{ id="gilbert-prince"; search="gilbert" },
    @{ id="scarlett-high-priestess"; search="scarlett" },
    @{ id="great-knight"; search="clive" },
    @{ id="sainted-knight"; search="josef" },
    @{ id="wyvern-master"; search="hilda" },
    @{ id="hoplite"; search="hodrick" },
    @{ id="swordmaster"; search="melisandre" },
    @{ id="rogue"; search="travis" },
    @{ id="cleric"; search="sharon" },
    @{ id="sorceress"; search="yahna" }
)

$itemTargets = @(
    @{ id="cat-ear-hood"; search="cat" },
    @{ id="dragoons-war-spear"; search="dragoon" },
    @{ id="millennium-scepter"; search="millennium" },
    @{ id="snipers-amber-lens"; search="sniper" },
    @{ id="ring-of-the-unicorn"; search="unicorn" },
    @{ id="ring-of-the-maiden"; search="maiden" },
    @{ id="lapis-pendant"; search="lapis" },
    @{ id="carnelian-pendant"; search="carnelian" },
    @{ id="sandstorm-staff"; search="sandstorm" },
    @{ id="banishment-ring"; search="banishment" }
)

Write-Host "--- Downloading Character Portraits ---"
foreach ($c in $charTargets) {
    $foundUrl = $null
    $searchKey = $c.search.ToLower()

    # Prioritize character portraits / trans / close / png
    $matches = $imageMap.Keys | Where-Object { $_ -like "*$searchKey*" }
    $bestMatch = $matches | Where-Object { $_ -like "*.png" -or $_ -like "*.webp" -or $_ -like "*.jpg" } | Select-Object -First 1

    if ($bestMatch) {
        $foundUrl = $imageMap[$bestMatch]
        $dest = "public/images/characters/$($c.id).png"
        try {
            Invoke-WebRequest -UserAgent $ua -Uri $foundUrl -OutFile $dest
            $size = (Get-Item $dest).Length
            Write-Host "[CHAR SUCCESS] $($c.id) ($bestMatch) -> $size bytes"
        } catch {
            Write-Host "[CHAR FAIL] $($c.id): $_"
        }
    } else {
        Write-Host "[CHAR MISSING] $($c.id)"
    }
}

Write-Host "--- Downloading Item Icons ---"
foreach ($i in $itemTargets) {
    $foundUrl = $null
    $searchKey = $i.search.ToLower()

    $matches = $imageMap.Keys | Where-Object { $_ -like "*$searchKey*" }
    $bestMatch = $matches | Where-Object { $_ -like "*.png" -or $_ -like "*.webp" } | Select-Object -First 1

    if ($bestMatch) {
        $foundUrl = $imageMap[$bestMatch]
        $dest = "public/images/items/$($i.id).png"
        try {
            Invoke-WebRequest -UserAgent $ua -Uri $foundUrl -OutFile $dest
            $size = (Get-Item $dest).Length
            Write-Host "[ITEM SUCCESS] $($i.id) ($bestMatch) -> $size bytes"
        } catch {
            Write-Host "[ITEM FAIL] $($i.id): $_"
        }
    } else {
        Write-Host "[ITEM MISSING] $($i.id)"
    }
}
