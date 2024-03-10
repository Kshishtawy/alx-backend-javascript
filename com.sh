#!/bin/bash

if [ -z "$1" ]; then
    arg1="Fixing bugs"
else
    arg1="$1"
fi

echo -e "\nCommitting message: \"$arg1\"\n"

git add .
git commit -m "$arg1"
git push

echo -e "\nChanges pushed to remote repository..."
