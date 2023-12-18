# Bash

## Processes

### List processes

```bash title="List all processes"
ps aux
```

```bash title="List all processes running as root"
ps aux | grep ^root
```

```bash title="List the processes tree"
ps auxf
```

:::info Command explanation

- `a` lists processes from all users
- `u` displays the process's user/owner
- `x` lists processes without a controlling terminal
- `f` displays a tree of processes

:::

### Trace processes system calls

```bash title="Run and trace a process"
strace <command>
```

```bash title="Trace a process"
strace -p <pid>
```

```bash title="Trace a process and its children"
strace -p <pid> -f
```

:::caution strace

You'll need to install `strace` on the target machine to use it. Also, you'll need to be root to trace processes you don't own.

:::

:::caution Containers

If you're tracing a process inside a container, you'll need `SYS_PTRACE` capabilities.

:::

## File System

### Find files by name

```bash title="Simple find"
# Find flag.txt recursively from root
find / -name flag.txt 2>/dev/null
```

:::tip

You can change `-name` to `-iname` to make the search case-insensitive.

:::

```bash title="Find every executable file with SUID permissions"
find / -perm -u=s -type f 2>/dev/null
```

```bash title="Find every executable file with SUID permissions owned by root"
find / -uid 0 -perm -u=s -type f 2>/dev/null
```

:::info Command explanation

- `-uid 0` specifies the user ID to search for (in this case, root)
- `-perm -u=s` specifies the permissions to search for (in this case, SUID)
- `-type f` specifies the file type to search for (in this case, a file)
- `2> /dev/null` redirects errors to `/dev/null`

:::

### Find files by content

```bash title="Find every file which contains the word 'password'"
grep -irn / -e password 2>/dev/null
```

:::info Command explanation

- `-i` makes the search case-insensitive
- `-r` makes the search recursive
- `-n` prints the line number of the match
- `-e` specifies the regex pattern to search for
- `2> /dev/null` redirects errors to `/dev/null`

:::

### Create a `.tar` archive

```bash title="Create a .tar archive"
tar -czvf archive.tar <file>
```

:::info Command explanation

- `-c` creates a new archive
- `-z` compresses the archive with gzip
- `-v` prints the files being archived
- `-f` specifies the archive file

:::

### Extract a `.tar` archive

```bash title="Extract a .tar archive"
tar -xzvf archive.tar
```

:::tip Extract to another directory

You can use the command `tar -xf archite.tar -C target/` to extract all files to the `target/` directory.

:::

:::info Command explanation

- `-x` extracts the archive
- `-z` specifies the archive is compressed with gzip
- `-v` prints the files being extracted
- `-f` specifies the archive file

:::
