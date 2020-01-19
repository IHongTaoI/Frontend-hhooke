@echo off
::后续命令使用的是：UTF-8编码
chcp 65001
cd ./page

git init
git add -A
git commit -m 'deploy'

git push -f https://e.coding.net/wxfly/hhooke.git master:master