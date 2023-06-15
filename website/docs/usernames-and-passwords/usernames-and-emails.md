# Usernames and Emails

## Generate Usernames

If you are able to gather a list of users' names, you can use the [urbanadventurer/username-anarchy](https://github.com/urbanadventurer/username-anarchy) project to generate a list of possible usernames.

```bash title="Using username-anarchy"
git clone https://github.com/urbanadventurer/username-anarchy
cd username-anarchy
./username-anarchy -i <usersfile> | tee usernames.txt
```

## Gathering Emails

### Crawling

There are some tools that can be used to gather emails from a website:

- [digininja/CeWL](https://github.com/digininja/CeWL)
- [projectdiscovery/katana](https://github.com/projectdiscovery/katana)

```bash title="CeWL"
cewl --email --email_file emails.txt <url>
```

```bash title="katana"
katana -u <url> -f email -silent | tee emails.txt
```

### Google Dorks

You can also use Google Dorks to find emails:

```bash title="Google Dorks"
"@domain.com"
```

:::tip

Add `ext:pdf` to the query to find emails in PDF files.

:::