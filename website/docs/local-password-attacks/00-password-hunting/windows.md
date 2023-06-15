# Windows

## Targets to keep in mind

Here are some places we should keep in mind when credential hunting:

- Passwords in Group Policy in the SYSVOL share
- Passwords in scripts in the SYSVOL share
- Password in scripts on IT shares
- Passwords in web.config files on dev machines and IT shares
- `unattend.xml`
- Passwords in the AD user or computer description fields
- KeePass databases --> pull hash, crack and get loads of access.
- Found on user systems and shares
- Files such as `pass.txt`, `passwords.docx`, `passwords.xlsx` found on user systems, shares, Sharepoint

## Password Hunting

### Manual

You should check the [Commands Cheatsheet for Windows File System](/commands-cheatsheet/windows#file-system).

### LaZagne

[LaZagne](https://github.com/AlessandroZ/LaZagne) is a tool that can be used to dump passwords from a local system.

```batch
lazagne.exe all
```

:::tip LaZagne as Administrator

You can run it as a normal user, but you'll get more results if you run it as Administrator.

:::