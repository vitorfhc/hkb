# Password Mutations

Password mutations in security refer to systematic alterations of a base password to form related, but new, passwords.

```text title="Mutation Example"
Password: password
Mutations:
  p@ssw0rd
  password!
  Password123
```

## Hashcat

Hashcat has a built-in password mutation engine that can be used to generate mutations of a base password.

```bash title="Hashcat"
hashcat --stdout <base_password> -r <rulesfile> | tee passwords.txt
```

You can find the rules using the command below:

```bash title="Find Hashcat Rules"
find / -name '*.rule' 2> /dev/null | grep hashcat
```

The `best64.rule` rule is a good starting point.