$TargetFile = "$env:SystemRoot\System32\notepad.exe"
$ShortcutFile = "$env:Public\Desktop\Notepad.lnk"
$WScriptShell = New-Object -ComObject WScript.Shell
$Shortcut = $WScriptShell.CreateShortcut($ShortcutFile)
$Shortcut.TargetPath = $TargetFile
$Shortcut.Save()


Dim obj,nLink,ProgramFiles,PublicFold
Set obj = CreateObject("WScript.Shell")
ProgramFiles=obj.ExpandEnvironmentStrings("%userprofile%")
Set nLink  = obj.CreateShortcut(ProgramFiles & "\Desktop\angular_work\Praesto.lnk")
nLink.TargetPath = "C:\Program Files (x86)\Google\Chrome\Application\chrome_proxy.exe"
nLink.Arguments = "--profile-directory=Default --app-id=iiilfijakbafamgflkdlgbkcfcddbcno"
' nLink.WindowStyle = "7"
nLink.IconLocation = ProgramFiles & "\Desktop\angular_work\chromic\favicon.ico"
nLink.Save
obj.Run ProgramFiles & "\Desktop\angular_work\Praesto.lnk", 7, true
