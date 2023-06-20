# Domain-Joined Host

Although not common, Linux computers can connect to Active Directory to provide centralized identity management and integrate with the organization's systems, giving users the ability to have a single identity to authenticate on Linux and Windows computers.

## Ticket Files (`ccache`)

They are saved as [`ccache` files](https://web.mit.edu/kerberos/krb5-1.12/doc/basic/ccache_def.html). You can find some using the `find` command:

```bash
find -iname '*ccache*' -readable 2> /dev/null
```

:::info

Note that we have passed the `readable` flag. If we want to impersonate a user, we need to be able to read the ticket file.

:::

## The `KRB5CCNAME` Environment Variable

By default, the location of the Kerberos ticket is stored in the environment variable `KRB5CCNAME`. This variable can identify if Kerberos tickets are being used or if the default location for storing Kerberos tickets is changed. These `ccache` files are protected by reading and write permissions, but a user with elevated privileges or root privileges could easily gain access to these tickets.

## Keytab Files

A [`keytab`](https://kb.iu.edu/d/aumh) is a file containing pairs of Kerberos principals and encrypted keys (which are derived from the Kerberos password). You can use a `keytab` file to authenticate to various remote systems using Kerberos **without entering a password**. However, when you change your password, you must recreate all your keytab files.

Keytab files commonly allow scripts to authenticate automatically using Kerberos without requiring human interaction or access to a password stored in a plain text file. For example, a script can use a keytab file to access files stored in the Windows share folder.

```bash
find -iname '*keytab*' -readable 2> /dev/null
```

### Extract Credentials from a Keytab File

You can install [KeyTabExtract](https://github.com/sosdave/KeyTabExtract). This tool can extract credentials from a keytab file.

```bash
python3 keytabextract.py /path/to/keytab/file
```

## Useful Commands

### List realm information

```bash
realm list
```

### Check if the host is joined to a domain

```bash
ps -ef | grep -i "winbind\|sssd"
```

### `klist`

```bash
klist
```