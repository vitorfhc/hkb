# Impacket

## SMB

### Launch an SMB server

```bash
impacket-smbserver -smb2support <share name> <share path>
```

:::tip Moving files to the target machine

You can use the `cmd.exe` to move files to the target machine.

```batch
move <file> \\<ip>\<share>
```

:::
