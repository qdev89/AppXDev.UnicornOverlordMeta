$categories = @('Equipment', 'Weapons', 'Accessories', 'Shields', 'Items', 'Skills', 'Classes', 'Characters')
foreach ($cat in $categories) {
    $url = "https://unicornoverlord.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:$cat&cmlimit=250&format=json"
    try {
        $res = Invoke-RestMethod -Uri $url
        $count = $res.query.categorymembers.Count
        Write-Host "=== Category: $cat | Count: $count"
    } catch {
        Write-Host "=== Category: $cat | Failed"
    }
}
