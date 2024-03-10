#!/bin/bash

if [ -z "$1" ]; then
	arg1="Fixing bugs"
else
	arg1=$1
fi

git add .
git commit -m $1
git push
