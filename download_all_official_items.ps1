$itemTitles = @(
    @{ id="cat-ear-hood"; title="File:BlackCat-EarHood.png" },
    @{ id="dragoons-war-spear"; title="File:Dragoon'sWarSpear.png" },
    @{ id="millennium-scepter"; title="File:MilleniumScepter.png" },
    @{ id="snipers-amber-lens"; title="File:Sniper'sAmberLens.png" },
    @{ id="ring-of-the-unicorn"; title="File:HolyUnicornSignet.png" },
    @{ id="ring-of-the-maiden"; title="File:RingOfTheMaiden.png" },
    @{ id="lapis-pendant"; title="File:LapisPendant.png" },
    @{ id="carnelian-pendant"; title="File:CarnelianPendant.png" },
    @{ id="sandstorm-staff"; title="File:DustboundStaff.png" },
    @{ id="banishment-ring"; title="File:AuroraRing.png" }
)

New-Item -ItemType Directory -Force public/images/items | Out-Null
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

foreach ($i in $itemTitles) {
    try {
        $uri = "https://unicornoverlord.fandom.com/api.php?action=query&titles=$($i.title)&prop=imageinfo&iiprop=url&format=json"
        $res = Invoke-RestMethod -UserAgent $ua -Uri $uri
        $page = ($res.query.pages.psobject.properties | Select-Object -First 1).value

        if ($page.imageinfo -and $page.imageinfo[0].url) {
            $url = $page.imageinfo[0].url
            $dest = "public/images/items/$($i.id).png"
            curl.exe -s -L --compressed "$url" -o "$dest"
            $size = (Get-Item $dest).Length
            Write-Host "[ITEM SUCCESS] $($i.id) -> $size bytes"
        } else {
            Write-Host "[ITEM NOT FOUND] $($i.id)"
        }
    } catch {
        Write-Host "[ITEM ERROR] $($i.id): $_"
    }
}
