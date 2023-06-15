# Linux

There are three important files in Linux that contain credentials:

- `/etc/passwd`
- `/etc/shadow`
- `/etc/security/opasswd`

## File Formats

### `/etc/passwd`

```
Login name : Password info : UID : GUID : Full name/comments : Home directory : Shell
```

```text title="/etc/passwd"
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
...
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
```

:::tip

If you have write access to `/etc/passwd`, you can remove the `x` from the password field and login without a password.

```bash
sed -i 's/root:x:0:0:root/root::0:0:root/' /etc/passwd
su # becomes root
```

:::

### `/etc/shadow`

```
Username : Encrypted password : Last PW change : Min. PW age : Max. PW age : Warning period : Inactivity period : Expiration date : Unused
```

```text title="/etc/shadow"
// highlight-next-line
root:$y$j9T$R0RrN9Av7269LVnz./0VY/$711vg7gW3vAuwTZaLPFhBajKipxhMZxEVuedKNRHGOC:19477:0:99999:7:::
daemon:*:19477:0:99999:7:::
...
sys:*:19477:0:99999:7:::
// highlight-next-line
test:$y$j9T$I880BuoLkcgdFY7yI6D6Q1$ryys0QSUpnpypR7iRt1XEIAPkCamtf3yO2c34g5DA77:19523:0:99999:7:::
```

### `/etc/security/opasswd`

> The PAM library (pam_unix.so) can prevent reusing old passwords. The file where old passwords are stored is the /etc/security/opasswd. Administrator/root permissions are also required to read the file if the permissions for this file have not been changed manually.
>
> Source: HackTheBox Academy

```text title="/etc/security/opasswd"
cry0l1t3:1000:2:$1$HjFAfYTG$qNDkF0zJ3v8ylCOrKB0kt0,$1$kcUjWZJX$E9uMSmiQeRh4pAAgzuvkq1
```

The old passwords are separated by a comma:

```
$1$HjFAfYTG$qNDkF0zJ3v8ylCOrKB0kt0
$1$kcUjWZJX$E9uMSmiQeRh4pAAgzuvkq1
```

### Unshadow

The `unshadow` tool combines `/etc/passwd` and `/etc/shadow` into a single file.

```bash
unshadow /etc/passwd /etc/shadow > unshadowed.txt
```

Then, you can use `hashcat` to crack the passwords:

```bash
hashcat -m 1800 unshadowed.txt /usr/share/wordlists/rockyou.txt
```