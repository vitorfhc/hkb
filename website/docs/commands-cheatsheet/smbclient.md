# SMBClient

## Commands

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