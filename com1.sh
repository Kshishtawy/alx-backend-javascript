#!/bin/bash

echo "Starting script..."

if [ -z "$1" ]; then
    arg1="Fixing bugs"
else
    arg1="$1"
fi

echo "Commit message: $arg1"

git add .
echo "Files added to staging area..."

git commit -m "$arg1"
echo "Commit created..."

git push
echo "Changes pushed to remote repository..."

echo "Script completed."

