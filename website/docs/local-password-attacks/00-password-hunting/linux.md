# Linux

## Targets to keep in mind

Here are some places we should keep in mind when credential hunting:

- Configuration files (`.cfg`, `.conf`, `.config`, `.cnf`)
- Scripts (`.sh`, `.py`, `pyc`, `.pl`, `.rb`, `.php`, `.go`, `.js`, `.java`, `.ps1`, `.vbs`, `.bat`, `.cmd`)
- Database files (`.db*`, `.sql*`)
- Cronjobs (`crontab`, `/etc/cron*`)
- SSH keys (`id_rsa`, `id_dsa`, `id_ed25519`)
- History files (`.bash_history`, `.zsh_history`, `.mysql_history`, `.psql_history`, `.sqlite_history`)
- Logs (`*.log`, `/var/log/*`)

## Password Hunting

### Manual File System

```bash title="Example: search for 'password' using grep"
grep -irn / -e password 2>/dev/null
```

### Automated

There are a few tools to help you automate the process of password hunting:

- [PEASS-ng](https://github.com/carlospolop/PEASS-ng)
- [LaZagne](https://github.com/AlessandroZ/LaZagne)
- [MimiPenguin](https://github.com/huntergregal/mimipenguin)
- [Firefox Decrypt](https://github.com/unode/firefox_decrypt)

:::tip

The best part of automated tools is that they can also find passwords in memory. Make sure to run it as soon as you get a shell, and then again after you escalate privileges.

:::

:::caution

Most of these tools work best when run as root. MimiPenguin requires root to run.

:::

#### Firefox Decrypt

If you have access to the `.mozilla` directory it could be worth running [Firefox Decrypt](https://github.com/unode/firefox_decrypt).

```bash title="Decrypt Firefox passwords"
firefox_decrypt.py ~/.mozilla/firefox/
```