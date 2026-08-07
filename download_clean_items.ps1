$items = @(
    @{ id="cat-ear-hood"; url="https://static.wikia.nocookie.net/unicornoverlord/images/6/68/BlackCat-EarHood.png/revision/latest" },
    @{ id="dragoons-war-spear"; url="https://static.wikia.nocookie.net/unicornoverlord/images/c/cd/Dragoon%27sWarSpear.png/revision/latest" },
    @{ id="millennium-scepter"; url="https://static.wikia.nocookie.net/unicornoverlord/images/9/90/MilleniumScepter.png/revision/latest" },
    @{ id="snipers-amber-lens"; url="https://static.wikia.nocookie.net/unicornoverlord/images/b/b3/Sniper%27sAmberLens.png/revision/latest" },
    @{ id="ring-of-the-unicorn"; url="https://static.wikia.nocookie.net/unicornoverlord/images/d/df/HolyUnicornSignet.png/revision/latest" },
    @{ id="ring-of-the-maiden"; url="https://static.wikia.nocookie.net/unicornoverlord/images/8/8c/RingOfTheMaiden.png/revision/latest" },
    @{ id="lapis-pendant"; url="https://static.wikia.nocookie.net/unicornoverlord/images/f/f4/LapisPendant.png/revision/latest" },
    @{ id="carnelian-pendant"; url="https://static.wikia.nocookie.net/unicornoverlord/images/4/44/CarnelianPendant.png/revision/latest" },
    @{ id="sandstorm-staff"; url="https://static.wikia.nocookie.net/unicornoverlord/images/1/1a/DustboundStaff.png/revision/latest" },
    @{ id="banishment-ring"; url="https://static.wikia.nocookie.net/unicornoverlord/images/0/05/AuroraRing.png/revision/latest" }
)

New-Item -ItemType Directory -Force public/images/items | Out-Null

foreach ($i in $items) {
    $dest = "public/images/items/$($i.id).png"
    curl.exe -s -L --compressed "$($i.url)" -o "$dest"
    $size = (Get-Item $dest).Length
    Write-Host "[ITEM] $($i.id) -> $size bytes"
}
