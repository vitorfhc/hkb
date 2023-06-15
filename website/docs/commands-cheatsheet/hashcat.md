# Hashcat

## Cracking hashes

### OneRuleToRuleThemAll

Download the raw file from [here](https://raw.githubusercontent.com/stealthsploit/Optimised-hashcat-Rule/master/OneRuleToRuleThemAll.rule).

```bash title="Crack a hash with OneRuleToRuleThemAll"
hashcat -m <hash-type> <hash-file> <wordlist> -r OneRuleToRuleThemAll.rule
```

```bash title="Create a mutated password list"
hashcat --stdout -r OneRuleToRuleThemAll.rule <wordlist> > mutated-wordlist.txt
```

:::caution

This will generate a **huge** wordlist. Make sure you have enough computational power to crack it.

:::

### Unshadow

You can see how to get the `unshadow` tool output on [this page](/local-password-attacks/linux#unshadow).

```bash
hashcat -m 1800 unshadow.txt /usr/share/wordlists/rockyou.txt
```