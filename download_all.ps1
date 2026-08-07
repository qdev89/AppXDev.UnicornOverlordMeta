$chars = @(
    @{ id="alain-high-lord"; url="https://static.wikia.nocookie.net/unicornoverlord/images/b/b9/Alain.png" },
    @{ id="yunifi-snow-ranger"; url="https://static.wikia.nocookie.net/unicornoverlord/images/6/6f/Yunifi.png" },
    @{ id="rosalinde-elven-prophet"; url="https://static.wikia.nocookie.net/unicornoverlord/images/0/07/Rosalinde.png" },
    @{ id="eltolinde-elven-sibyl"; url="https://static.wikia.nocookie.net/unicornoverlord/images/2/29/Eltolinde.png" },
    @{ id="berengaria-renegade"; url="https://static.wikia.nocookie.net/unicornoverlord/images/4/4e/Berengaria.png" },
    @{ id="selvie-druid"; url="https://static.wikia.nocookie.net/unicornoverlord/images/9/91/Selvie.png" },
    @{ id="raenys-featherbow"; url="https://static.wikia.nocookie.net/unicornoverlord/images/e/e0/Raenys.png" },
    @{ id="gilbert-prince"; url="https://static.wikia.nocookie.net/unicornoverlord/images/5/53/Gilbert.png" },
    @{ id="scarlett-high-priestess"; url="https://static.wikia.nocookie.net/unicornoverlord/images/a/a2/Scarlett.png" },
    @{ id="great-knight"; url="https://static.wikia.nocookie.net/unicornoverlord/images/2/20/Clive.png" },
    @{ id="sainted-knight"; url="https://static.wikia.nocookie.net/unicornoverlord/images/b/b6/Josef.png" },
    @{ id="wyvern-master"; url="https://static.wikia.nocookie.net/unicornoverlord/images/8/87/Hilda.png" },
    @{ id="hoplite"; url="https://static.wikia.nocookie.net/unicornoverlord/images/4/41/Hodrick.png" },
    @{ id="swordmaster"; url="https://static.wikia.nocookie.net/unicornoverlord/images/c/c2/Melisandre.png" },
    @{ id="rogue"; url="https://static.wikia.nocookie.net/unicornoverlord/images/0/0a/Travis.png" },
    @{ id="cleric"; url="https://static.wikia.nocookie.net/unicornoverlord/images/9/98/Sharon.png" },
    @{ id="sorceress"; url="https://static.wikia.nocookie.net/unicornoverlord/images/8/8c/Yahna.png" }
)

$items = @(
    @{ id="cat-ear-hood"; url="https://static.wikia.nocookie.net/unicornoverlord/images/0/02/Cat-Ear_Hood.png" },
    @{ id="dragoons-war-spear"; url="https://static.wikia.nocookie.net/unicornoverlord/images/1/1d/Dragoon%27s_Glave.png" },
    @{ id="millennium-scepter"; url="https://static.wikia.nocookie.net/unicornoverlord/images/4/49/Millennium_Scepter.png" },
    @{ id="snipers-amber-lens"; url="https://static.wikia.nocookie.net/unicornoverlord/images/7/7b/Sniper%27s_Amber_Lens.png" },
    @{ id="ring-of-the-unicorn"; url="https://static.wikia.nocookie.net/unicornoverlord/images/5/52/Ring_of_the_Unicorn.png" },
    @{ id="ring-of-the-maiden"; url="https://static.wikia.nocookie.net/unicornoverlord/images/9/90/Ring_of_the_Maiden.png" },
    @{ id="lapis-pendant"; url="https://static.wikia.nocookie.net/unicornoverlord/images/d/d4/Lapis_Pendant.png" },
    @{ id="carnelian-pendant"; url="https://static.wikia.nocookie.net/unicornoverlord/images/1/10/Carnelian_Pendant.png" },
    @{ id="sandstorm-staff"; url="https://static.wikia.nocookie.net/unicornoverlord/images/3/36/Sandstorm_Staff.png" },
    @{ id="banishment-ring"; url="https://static.wikia.nocookie.net/unicornoverlord/images/a/a8/Banishment_Ring.png" }
)

New-Item -ItemType Directory -Force public/images/characters | Out-Null
New-Item -ItemType Directory -Force public/images/items | Out-Null

$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

Write-Host "--- Downloading Character Portraits ---"
foreach ($c in $chars) {
    $dest = "public/images/characters/$($c.id).png"
    try {
        Invoke-WebRequest -UserAgent $ua -Uri "$($c.url)/revision/latest" -OutFile $dest
        $size = (Get-Item $dest).Length
        Write-Host "[CHAR SUCCESS] $($c.id) ($size bytes)"
    } catch {
        Write-Host "[CHAR FAIL] $($c.id): $_"
    }
}

Write-Host "--- Downloading Item Icons ---"
foreach ($i in $items) {
    $dest = "public/images/items/$($i.id).png"
    try {
        Invoke-WebRequest -UserAgent $ua -Uri "$($i.url)/revision/latest" -OutFile $dest
        $size = (Get-Item $dest).Length
        Write-Host "[ITEM SUCCESS] $($i.id) ($size bytes)"
    } catch {
        Write-Host "[ITEM FAIL] $($i.id): $_"
    }
}
