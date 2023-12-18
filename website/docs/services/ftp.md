# FTP

FTP, or File Transfer Protocol, is a standard network protocol that facilitates the transfer of files from one host to another over a TCP-based network like the internet. FTP operates in two modes - active and passive - to handle different connection scenarios. With capabilities for secure file transfers and compatibility with various network configurations, FTP is widely used for uploading and downloading files to and from servers.

## Footprinting

```bash title="Using nmap"
nmap -p 21 -sCV <ip>
```

## Passive Mode

Passive mode in FTP is a data transfer method where the client initiates both the control and data connections to the server, enhancing compatibility with routers and firewalls. After the client sends a PASV command, the server provides an IP address and non-default port number for the data connection. This mode, which bypasses the need for the server to connect back to the client as in active mode, simplifies network configuration and boosters security.

## Anonymous Login

Anonymous login is a method that allows users to access an FTP server without providing a specific username and password. This typically involves entering `anonymous` as the username and the user's email address as the password. It's often used to grant public access to files on an FTP server, enabling users to download data without needing to authenticate with personalized credentials.

```text
anonymous:anonymous
anonymous:
ftp:ftp
```

## Bounce Attacks

In this attack, an attacker uses the `PORT` command to trick the FTP server into sending information to a target machine. The attacker makes it appear as though the communication is initiated by an innocent FTP server, thereby bypassing security measures on the target system. It can be used to scan ports and gain illicit access to systems.

You can run a bounce attack using `nmap`.

```bash
nmap -Pn -v -n -p80 -b anonymous:password@10.10.110.213 172.17.0.2
```

Modern FTP servers include protections that, by default, prevent this type of attack, but if these features are misconfigured in modern-day FTP servers, the server can become vulnerable to an FTP Bounce attack.

## Resources

- [HackTricks Book](https://book.hacktricks.xyz/network-services-pentesting/pentesting-ftp)