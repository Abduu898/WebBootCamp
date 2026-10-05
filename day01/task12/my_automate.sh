#!/bin/bash
for i in $(seq -w 1 "$1"); do
    mkdir -p "day$(printf '%02d' $2)/task$i"
done
