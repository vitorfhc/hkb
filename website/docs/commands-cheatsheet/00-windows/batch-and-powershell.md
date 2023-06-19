# Batch and Powershell

## Active Directory

### Load the built-in Active Directory PowerShell module

Use one of the following commands to install the Active Directory module ([source](https://stackoverflow.com/questions/19182497/import-module-the-specified-module-activedirectory-was-not-loaded-because-no)):

```powershell
Add-WindowsFeature RSAT-AD-PowerShell
```

```powershell
Enable-WindowsOptionalFeature -FeatureName ActiveDirectory-Powershell -Online -All
```

Then, load the module:

```powershell title="PowerShell"
Import-Module ActiveDirectory
```

### List domain users using Get-ADUser and filter by the username

```powershell title="PowerShell"
Get-ADUser -Filter * | select Name
```

### Check the description field of domain users for sensitive data such as passwords

```powershell title="PowerShell"
Get-DomainUser * | Select-Object samaccountname,description
```

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