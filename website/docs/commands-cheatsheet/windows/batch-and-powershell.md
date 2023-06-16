# Batch and Powershell

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