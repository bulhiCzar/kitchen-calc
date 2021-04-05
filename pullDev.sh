#!/bin/bash

git checkout dev
git pull origin dev
#rm -R build/*
#shopt -s build/*
#rm !(dontdelete)

npm run build