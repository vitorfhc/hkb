# Linux to PowerShell

| Linux | PowerShell | Alias | Example |
| --- | --- | --- | --- |
| ls | Get-ChildItem | gci | gci . |
| cd | Set-Location | sl | sl C:\ |
| pwd | Get-Location | gl | gl |
| cp | Copy-Item | copy | copy file1 file2 |
| mv | Move-Item | move | move file1 newlocation |
| rm | Remove-Item | del, rmdir, rm | del file1 |
| mkdir | New-Item -ItemType Directory | md, mkdir | md newfolder |
| rmdir | Remove-Item -Recurse | rm, rmdir | rm -r foldername |
| touch | New-Item | ni | ni file.txt |
| cat | Get-Content | gc | gc file.txt |
| echo | Write-Output | echo | echo "Hello World" |
| find | Select-String | sls | sls "pattern" file.txt |
| grep | Select-String | sls | sls "pattern" file.txt |
| head | Get-Content -Head | gc | gc -Head 10 file.txt |
| tail | Get-Content -Tail | gc | gc -Tail 10 file.txt |
| wc | Measure-Object | measure | gc file.txt |
| sort | Sort-Object | sort | gci |
| uniq | Select-Object -Unique | select | gc file.txt |
| diff | Compare-Object | compare | compare (gc file1) (gc file2) |
| chmod | Set-Acl |  | Set-Acl file.txt -AclObject aclObject |
| chown | Set-Acl |  | Set-Acl file.txt -AclObject aclObject |
| ps | Get-Process | gps | gps |
| kill | Stop-Process | kill, spps | kill -Name notepad |
| man | Get-Help | help | help Get-Content |
| history | Get-History | h | h |
| clear | Clear-Host | cls, clear | cls |