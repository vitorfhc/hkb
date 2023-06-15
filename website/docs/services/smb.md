# SMB

The Server Message Block (SMB) protocol is a network file sharing protocol primarily used by Microsoft Windows systems. It enables users to read, write, and request services from remote servers and facilitates the sharing of resources, such as files, printers, and serial ports among devices on a network.

## Footprinting

```bash title="Using nmap"
nmap -p 445 -sCV <ip>
```

```text title="SMB scripts for nmap"
smb-psexec
smb-vuln-ms07-029
smb-enum-processes
smb-enum-domains
smb-vuln-cve-2017-7494
smb-brute
smb-vuln-conficker
smb-enum-groups
smb2-capabilities
smb-ls
smb2-time
smb2-vuln-uptime
smb-vuln-ms06-025
smb-webexec-exploit
smb-vuln-ms08-067
smb-enum-sessions
smb-enum-services
smb-mbenum
smb-vuln-ms17-010
smb-enum-users
smb-security-mode
smb-vuln-webexec
smb-os-discovery
smb-protocols
smb-vuln-ms10-061
smb-vuln-regsvc-dos
smb-flood
smb-vuln-cve2009-3103
smb-print-text
smb-vuln-ms10-054
smb2-security-mode
smb-double-pulsar-backdoor
smb-server-stats
smb-system-info
smb-enum-shares
```

## Resources

### Internal

- [SMB Cheatsheet](/commands-cheatsheet/smb)

### External

- [HackTricks Book](https://book.hacktricks.xyz/network-services-pentesting/pentesting-smb)