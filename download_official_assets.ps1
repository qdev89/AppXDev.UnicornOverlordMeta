$chars = @(
    @{ id="alain-high-lord"; file="File:Alain.png" },
    @{ id="yunifi-snow-ranger"; file="File:Yunifi.png" },
    @{ id="rosalinde-elven-prophet"; file="File:Rosalinde.png" },
    @{ id="eltolinde-elven-sibyl"; file="File:Eltolinde.png" },
    @{ id="berengaria-renegade"; file="File:Berengaria.png" },
    @{ id="selvie-druid"; file="File:Selvie.png" },
    @{ id="raenys-featherbow"; file="File:Raenys.png" },
    @{ id="gilbert-prince"; file="File:Gilbert.png" },
    @{ id="scarlett-high-priestess"; file="File:Scarlett.png" },
    @{ id="great-knight"; file="File:Clive.png" },
    @{ id="sainted-knight"; file="File:Josef.png" },
    @{ id="wyvern-master"; file="File:Hilda.png" },
    @{ id="hoplite"; file="File:Hodrick.png" },
    @{ id="swordmaster"; file="File:Melisandre.png" },
    @{ id="rogue"; file="File:Travis.png" },
    @{ id="cleric"; file="File:Sharon.png" },
    @{ id="sorceress"; file="File:Yahna.png" }
)

$items = @(
    @{ id="cat-ear-hood"; file="File:White_Cat-Ear_Hood.png" },
    @{ id="dragoons-war-spear"; file="File:Dragoon%27s_Glave.png" },
    @{ id="millennium-scepter"; file="File:Millennium_Scepter.png" },
    @{ id="snipers-amber-lens"; file="File:Sniper%27s_Amber_Lens.png" },
    @{ id="ring-of-the-unicorn"; file="File:Ring_of_the_Unicorn.png" },
    @{ id="ring-of-the-maiden"; file="File:Ring_of_the_Maiden.png" },
    @{ id="lapis-pendant"; file="File:Lapis_Pendant.png" },
    @{ id="carnelian-pendant"; file="File:Carnelian_Pendant.png" },
    @{ id="sandstorm-staff"; file="File:Sandstorm_Staff.png" },
    @{ id="banishment-ring"; file="File:Banishment_Ring.png" }
)

New-Item -ItemType Directory -Force public/images/characters | Out-Null
New-Item -ItemType Directory -Force public/images/items | Out-Null

$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

Write-Host "--- Querying Fandom API & Downloading Character Portraits ---"
foreach ($c in $chars) {
    try {
        $apiUrl = "https://unicornoverlord.fandom.com/api.php?action=query&titles=$($c.file)&prop=imageinfo&iiprop=url&format=json"
        $res = Invoke-RestMethod -UserAgent $ua -Uri $apiUrl
        $pages = $res.query.pages
        $pageKey = ($pages.psobject.properties.name)[0]
        $imgUrl = $pages.$pageKey.imageinfo[0].url

        if ($imgUrl) {
            $dest = "public/images/characters/$($c.id).png"
            Invoke-WebRequest -UserAgent $ua -Uri $imgUrl -OutFile $dest
            $size = (Get-Item $dest).Length
            Write-Host "[CHAR SUCCESS] $($c.id) -> $dest ($size bytes)"
        } else {
            Write-Host "[CHAR MISSING] $($c.id): No image info URL"
        }
    } catch {
        Write-Host "[CHAR ERROR] $($c.id): $_"
    }
}

Write-Host "--- Querying Fandom API & Downloading Item Icons ---"
foreach ($i in $items) {
    try {
        $apiUrl = "https://unicornoverlord.fandom.com/api.php?action=query&titles=$($i.file)&prop=imageinfo&iiprop=url&format=json"
        $res = Invoke-RestMethod -UserAgent $ua -Uri $apiUrl
        $pages = $res.query.pages
        $pageKey = ($pages.psobject.properties.name)[0]
        $imgUrl = $pages.$pageKey.imageinfo[0].url

        if ($imgUrl) {
            $dest = "public/images/items/$($i.id).png"
            Invoke-WebRequest -UserAgent $ua -Uri $imgUrl -OutFile $dest
            $size = (Get-Item $dest).Length
            Write-Host "[ITEM SUCCESS] $($i.id) -> $dest ($size bytes)"
        } else {
            Write-Host "[ITEM MISSING] $($i.id): No image info URL"
        }
    } catch {
        Write-Host "[ITEM ERROR] $($i.id): $_"
    }
}
