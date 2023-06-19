# Pass the Key / Overpass the Hash

> The traditional Pass the Hash technique involves reusing an NTLM password hash that doesn't touch Kerberos. The Pass the Key or Overpass the Hash approach converts a hash/key for a domain-joined user into a full Ticket-Granting-Ticket (TGT).
>
> Source: [HackTheBox Academy](https://academy.hackthebox.com/module/147/section/1639)

> This attack aims to use the user NTLM hash or AES keys to request Kerberos tickets, as an alternative to the common Pass The Hash over NTLM protocol. Therefore, this could be especially useful in networks where NTLM protocol is disabled and only Kerberos is allowed as authentication protocol.
>
> In order to perform this attack, the NTLM hash (or password) of the target user account is needed. Thus, once a user hash is obtained, a TGT can be requested for that account. Finally, it is possible to access any service or machine where the user account has permissions.
>
> Source: [HackTricks](https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/over-pass-the-hash-pass-the-key)

## Examples

### Mimikatz and Rubeus

You must first harvest the Kerberos encryption keys from the target machine. This can be done with Mimikatz or Rubeus.

```batch
mimikatz.exe "sekurlsa::ekeys" "exit"
```

Then, you can use Rubeus to request a TGT for the target user.

```batch
Rubeus.exe asktgt /user:<user> /rc4:<hash> /domain:<domain>
```

:::tip

Add the `/ptt` flag to Rubeus command to inject the ticket into the current session.

Now, you are also performing a [Pass the Ticket (PtT) attack](/lateral-movement/windows/pass-the-ticket).

:::


## External Resources

- [How to Attack Kerberos by Tarlogic](https://www.tarlogic.com/blog/how-to-attack-kerberos/#Overpass_The_HashPass_The_Key_PTK)
- [HackTricks](https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/over-pass-the-hash-pass-the-key)
- [Rubeus docs on the difference between PtH and PtK](https://github.com/GhostPack/Rubeus#example-over-pass-the-hash)