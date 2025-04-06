---
layout: post
title: "Basic Linux Commands for Hackers"
date: 2025-04-04 10:15:00 +0000
categories: [tutorials, linux]
tags: [command-line, linux, tools, beginners]
author: Admin
---

# Basic Linux Commands for Hackers

```bash
$ echo "Knowledge is power"
Knowledge is power
```

Linux is the operating system of choice for most hackers and cybersecurity professionals. Its flexibility, open-source nature, and powerful command-line interface make it ideal for security testing and penetration testing. This post covers essential Linux commands that every aspiring hacker should know.

## Navigation Commands

```bash
pwd         # Print working directory
ls -la      # List all files with details
cd /path    # Change directory
find / -name "*.txt" 2>/dev/null  # Find files and suppress errors
```

## File Operations

```bash
cat file.txt           # Display file contents
grep "password" file.txt  # Search for text in file
head -n 10 file.txt    # Show first 10 lines
tail -n 10 file.txt    # Show last 10 lines
touch newfile.txt      # Create empty file
nano file.txt          # Edit file with nano editor
vim file.txt           # Edit file with vim editor
```

## System Information

```bash
uname -a               # Show kernel information
ifconfig               # Display network interfaces
ip addr                # Modern alternative to ifconfig
netstat -tuln          # Show listening ports
ps aux                 # List running processes
top                    # Dynamic process viewer
```

## Network Commands

```bash
ping google.com        # Test connectivity
traceroute google.com  # Trace packet route
nslookup domain.com    # Query DNS
dig domain.com         # Advanced DNS lookup
whois domain.com       # Domain registration info
ssh user@host          # Secure shell connection
scp file.txt user@host:/path  # Secure copy
```

## File Permissions

```bash
chmod 755 file.txt     # Change file permissions
chown user:group file.txt  # Change file ownership
```

## Text Processing

```bash
grep -r "password" /path  # Recursive search
sed 's/old/new/g' file.txt  # Find and replace
awk '{print $1}' file.txt  # Print first column
sort file.txt           # Sort lines
uniq                    # Remove duplicates (after sort)
wc -l file.txt          # Count lines
```

## Compression

```bash
tar -czvf archive.tar.gz folder/  # Create archive
tar -xzvf archive.tar.gz          # Extract archive
zip -r archive.zip folder/        # Create zip
unzip archive.zip                 # Extract zip
```

## Advanced Commands

```bash
curl -s https://example.com       # Fetch web content
wget https://example.com/file     # Download file
nc -lvp 4444                      # Netcat listener
tcpdump -i eth0                   # Packet capture
```

## Scripting Basics

Shell scripting is a powerful skill for automating tasks:

```bash
#!/bin/bash
# Simple port scanner
if [ $# -ne 1 ]; then
    echo "Usage: $0 <host>"
    exit 1
fi

for port in {1..1000}; do
    (echo > /dev/tcp/$1/$port) > /dev/null 2>&1 && echo "Port $port is open"
done
```

## Conclusion

Mastering these Linux commands is essential for anyone interested in cybersecurity and ethical hacking. The command line provides powerful tools that can be combined in countless ways to accomplish complex tasks efficiently.

Remember that these commands should only be used on systems you own or have permission to test. Always practice ethical hacking and respect others' privacy and property.

```bash
# Keep learning, keep practicing
exit 0
```
