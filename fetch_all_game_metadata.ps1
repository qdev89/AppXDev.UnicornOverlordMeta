# Fetch full game metadata from Fandom MediaWiki API for Unicorn Overlord

$classesUrl = "https://unicornoverlord.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Classes&cmlimit=200&format=json"
$classesRes = Invoke-RestMethod -Uri $classesUrl
$classList = $classesRes.query.categorymembers

Write-Host "Found $($classList.Count) total classes."

$weaponsUrl = "https://unicornoverlord.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Weapons&cmlimit=200&format=json"
$weaponsRes = Invoke-RestMethod -Uri $weaponsUrl
$weaponList = $weaponsRes.query.categorymembers

$accUrl = "https://unicornoverlord.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Accessories&cmlimit=200&format=json"
$accRes = Invoke-RestMethod -Uri $accUrl
$accList = $accRes.query.categorymembers

$shieldsUrl = "https://unicornoverlord.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Shields&cmlimit=200&format=json"
$shieldsRes = Invoke-RestMethod -Uri $shieldsUrl
$shieldList = $shieldsRes.query.categorymembers

Write-Host "Weapons: $($weaponList.Count), Accessories: $($accList.Count), Shields: $($shieldList.Count)"

# Output json summary
$metaObj = @{
    classes = $classList | Select-Object pageid, title
    weapons = $weaponList | Select-Object pageid, title
    accessories = $accList | Select-Object pageid, title
    shields = $shieldList | Select-Object pageid, title
}

$metaObj | ConvertTo-Json -Depth 5 | Out-File -FilePath "game_metadata_raw.json" -Encoding utf8
Write-Host "Exported game_metadata_raw.json successfully."
