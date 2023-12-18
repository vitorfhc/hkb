# Situational Awareness

## Network

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-NetIPAddress | Get-NetIPAddress | Retrieves IP address configuration. | https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipaddress |
| Set-NetIPAddress | Set-NetIPAddress -InterfaceIndex 12 -IPAddress 192.168.0.2 | Modifies IP address settings on a network interface. | https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netipaddress |
| Test-NetConnection | Test-NetConnection www.google.com | Displays diagnostic information for a connection. | https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection |
| Get-NetAdapter | Get-NetAdapter | Gets a list of network adapters on a computer. | https://learn.microsoft.com/en-us/powershell/module/netadapter/get-netadapter |
| Batch |  |  |  |
| ipconfig | ipconfig /all | Displays all current TCP/IP network configuration values. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig |
| ping | ping www.google.com | Sends ICMP Echo Request messages to a specified host to test IP-level connectivity. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping |
| tracert | tracert www.google.com | Determines the path to a destination by sending ICMP Echo Request messages. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert |
| netstat | netstat -ano | Displays active TCP connections and ports on which the computer is listening. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat |
| pathping | pathping www.google.com | Provides information about network latency and network loss at intermediate hops between a source and destination. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/pathping |
| route | route print | Displays and modifies the IP routing table. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/route |
| arp | arp -a | Displays and modifies the IP-to-Physical address translation tables used by address resolution protocol (ARP). | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/arp |

## Windows Defender and AppLocker

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| Windows Defender |  |  |  |
| Get-MpPreference | Get-MpPreference | Retrieves preferences for Windows Defender scans and updates. | https://learn.microsoft.com/en-us/powershell/module/defender/get-mppreference |
| Set-MpPreference | Set-MpPreference -DisableRealtimeMonitoring $false | Modifies settings for Windows Defender. | https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference |
| Start-MpScan | Start-MpScan -ScanType QuickScan | Starts a Windows Defender scan on a machine. | https://learn.microsoft.com/en-us/powershell/module/defender/start-mpscan |
| Update-MpSignature | Update-MpSignature | Updates the Windows Defender malware definitions. | https://learn.microsoft.com/en-us/powershell/module/defender/update-mpsignature |
| AppLocker |  |  |  |
| Get-AppLockerPolicy | Get-AppLockerPolicy -Local | Retrieves the AppLocker policy for the local computer or a specified Group Policy Object (GPO). | https://learn.microsoft.com/en-us/powershell/module/applocker/get-applockerpolicy |
| Set-AppLockerPolicy | Set-AppLockerPolicy -XMLPolicy "C:\path\to\policy.xml" | Sets the AppLocker policy for the local computer or a specified GPO. | https://learn.microsoft.com/en-us/powershell/module/applocker/set-applockerpolicy |
| Test-AppLockerPolicy | Test-AppLockerPolicy -Path "C:\path\to\exe" -User Everyone | Determines whether any AppLocker rules in a policy would block a file from running. | https://learn.microsoft.com/en-us/powershell/module/applocker/test-applockerpolicy |

## Processes Management and Monitoring

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-Process | Get-Process -Name chrome | Retrieves information about the processes running on the local computer or a remote computer. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process |
| Start-Process | Start-Process notepad.exe | Starts one or more processes on the local computer. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process |
| Stop-Process | Stop-Process -Name notepad | Stops one or more running processes. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process |
| Batch |  |  |  |
| tasklist | tasklist | Displays a list of currently running processes on the local computer or on a remote computer. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tasklist |
| start | start notepad.exe | Starts a separate window to run a specified program or command. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/start |
| taskkill | taskkill /IM notepad.exe | Ends one or more tasks or processes. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/taskkill |

## Environment Variables

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-ChildItem Env: | Get-ChildItem Env: | Retrieves all environment variables. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem |
| $Env:VariableName | $Env:PATH | Retrieves the value of a specific environment variable. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables |
| Set-Item | Set-Item -Path Env:JAVA_HOME -Value "C:\Java\" | Sets the value of an environment variable for the current session. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-item |
| [System.Environment]::SetEnvironmentVariable | [System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Java\", [System.EnvironmentVariableTarget]::Machine) | Sets the value of an environment variable persistently (for current user or machine). | https://learn.microsoft.com/en-us/dotnet/api/system.environment.setenvironmentvariable |
| Batch |  |  |  |
| set | set PATH | Displays, sets, or removes environment variables. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/set_1 |
| echo %VariableName% | echo %PATH% | Displays the value of a specific environment variable. | https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-xp/bb490880(v=technet.10) |
| setx | setx JAVA_HOME "C:\Java\" | Creates or modifies environment variables in the user or system environment. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/setx |

## Patches

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-HotFix | Get-HotFix | Retrieves information about hotfixes and patches installed on the system. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-hotfix |
| Install-WindowsUpdate (PSWindowsUpdate Module) | Install-WindowsUpdate -AcceptAll -AutoReboot | Installs available Windows updates (requires the PSWindowsUpdate module). | https://www.powershellgallery.com/packages/PSWindowsUpdate |
| Get-WindowsUpdate (PSWindowsUpdate Module) | Get-WindowsUpdate | Displays available Windows updates (requires the PSWindowsUpdate module). | https://www.powershellgallery.com/packages/PSWindowsUpdate |
| Add-WUServiceManager (PSWindowsUpdate Module) | Add-WUServiceManager -ServiceID 7971f918-a847-4430-9279-4a52d1efe18d | Registers a Windows Update service manager (required for accessing updates through the PSWindowsUpdate module). | https://www.powershellgallery.com/packages/PSWindowsUpdate |
| Remove-WindowsUpdate (PSWindowsUpdate Module) | Remove-WindowsUpdate -KBArticleID KB1234567 | Uninstalls a specific Windows update (requires the PSWindowsUpdate module). | https://www.powershellgallery.com/packages/PSWindowsUpdate |
| Batch |  |  |  |
| systeminfo | systeminfo |  |  |
| wmic qfe | wmic qfe |  |  |

## Installed Programs

| Commands  | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-ItemProperty | Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Retrieves information about installed programs from the registry. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-itemproperty |
| Get-WmiObject | Get-WmiObject -Class Win32_Product | Retrieves detailed information about installed programs using Windows Management Instrumentation (WMI). | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-wmiobject |
| Batch |  |  |  |
| wmic product | wmic product get name,version | Lists installed programs with their names and versions using Windows Management Instrumentation Command-line (WMIC). | https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmic |

## Users and Groups

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-LocalUser | Get-LocalUser | Retrieves all local user accounts. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/get-localuser |
| New-LocalUser | New-LocalUser -Name "User1" | Creates a new local user account. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/new-localuser |
| Add-LocalGroupMember | Add-LocalGroupMember -Group "Administrators" -Member "User1" | Adds a user to a local group. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/add-localgroupmember |
| Get-LocalGroup | Get-LocalGroup | Retrieves all local groups. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/get-localgroup |
| Batch |  |  |  |
| net user | net user username | Displays or modifies user accounts on the computer. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/net-user |
| net localgroup | net localgroup "Administrators" | Adds, displays, or modifies local groups. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/net-localgroup |
| net accounts | net accounts | Displays or sets the password and logon requirements for users. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/net-accounts |
| whoami | whoami | Displays the user name and groups that you are currently working as. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/whoami |
| whoami /priv | whoami /priv | Displays the security privileges of the current user. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/whoami |
| whoami /groups |  |  |  |
| query | query user | Displays information about user sessions on a terminal server. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/query |

## Named Pipes

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| New-Object System.IO.Pipes.NamedPipeServerStream | $pipe = New-Object System.IO.Pipes.NamedPipeServerStream("MyPipe") | Creates a new instance of a named pipe server. | https://learn.microsoft.com/en-us/dotnet/api/system.io.pipes.namedpipeserverstream |
| New-Object System.IO.Pipes.NamedPipeClientStream | $pipe = New-Object System.IO.Pipes.NamedPipeClientStream("MyPipe") | Creates a new instance of a named pipe client. | https://learn.microsoft.com/en-us/dotnet/api/system.io.pipes.namedpipeclientstream |
| Get-ChildItem \\.\pipe\ | Get-ChildItem \\.\pipe\ | Lists all named pipes on the local machine. | https://docs.microsoft.com/en-us/powershell/ (specific documentation for this usage is not available, but it is a common PowerShell technique) |
| Batch |  |  |  |
| \\.\pipe\ | dir \\.\pipe\ | Accesses the named pipe file system, typically used for listing available pipes. | No direct documentation, but referenced in https://support.microsoft.com/topic/named-pipe-client-and-server-use-in-a-windows-environment-7e7e2b9d-2b1e-8bf1-52dc-7b8d99f7a2cc |
| pipelist | pipelist | Displays a list of all named pipes on the local machine. | https://learn.microsoft.com/en-us/sysinternals/downloads/pipelist |

## Security Permissions

| Commands | Example | Description | Links |
| --- | --- | --- | --- |
| PowerShell |  |  |  |
| Get-Acl | Get-Acl C:\path\to\file.txt | Gets the access control list (ACL) for a file or directory. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-acl |
| Set-Acl | Set-Acl -Path C:\path\to\file.txt -AclObject $acl | Sets the ACL for a file or directory. | https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-acl |
| Batch |  |  |  |
| cacls | cacls C:\path\to\file.txt | Displays or modifies access control lists (ACLs) of files. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cacls |
| icacls | icacls C:\path\to\file.txt | Displays or modifies discretionary access control lists (DACLs) on specified files. | https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls |
| accesschk | accesschk -uwcqv User * | Displays the accesses that a user or group has to resources. | https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk |