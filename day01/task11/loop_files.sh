#!/bin/bash
for file in *.md; do
    echo "This is a new line." >> "$file"
done
