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

## Null Sessions

The SMB null session is a type of anonymous, non-authenticated connection that can be established with a server. It provides an avenue to query system details such as shared resources, user accounts, and system configurations without the need for credentials. It can be exploited by malicious actors who can gather sensitive information about the system, potentially facilitating unauthorized access, data breaches, or other cyberattacks.

You can use CrackMapExec to try for this type of connection.

```bash
crackmapexec smb <ip> -u '' -p '' --shares
```

:::caution

There's a difference between using `-u ''` and `-u ' '`. It seems related to guest sessions.

**Make sure to test both.**

:::

## RCE

You can achieve RCE using several tools and methods:

- Impacket PsExec - Python PsExec like functionality example using RemComSvc.
- Impacket SMBExec - A similar approach to PsExec without using RemComSvc. The technique is described here. This implementation goes one step further, instantiating a local SMB server to receive the output of the commands. This is useful when the target machine does NOT have a writeable share available.
- Impacket atexec - This example executes a command on the target machine through the Task Scheduler service and returns the output of the executed command.
- CrackMapExec - includes an implementation of smbexec and atexec.
- Metasploit PsExec - Ruby PsExec implementation.
- SMBClient

:::tip

You may want to try several tools if one doesn't work. Also, make sure to change the `--exec-method` for CrackMapExec.

:::

## Resources

- [HackTricks Book](https://book.hacktricks.xyz/network-services-pentesting/pentesting-smb)