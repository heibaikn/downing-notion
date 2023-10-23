@echo off

setlocal enabledelayedexpansion



REM 顺便开启ssh

wsl -d Ubuntu-22.04 -u root service ssh start



:: set wsl2 ip

wsl -d Ubuntu-22.04  -u root ip addr | findstr "172.25.118.4" > nul

if !errorlevel! equ 0 (

    echo wsl ip has set

) else (

    wsl -d Ubuntu-22.04 -u root ip addr add 172.25.118.4 broadcast 172.25.127.255 dev eth0 label eth0:1

    echo set wsl ip success: 172.25.118.4

)



:: set windows ip

ipconfig | findstr "172.17.156.1" > nul

if !errorlevel! equ 0 (

    echo windows ip has set

) else (

    netsh interface ip add address "vEthernet (WSL)" 172.17.156.1 255.255.255.240

    echo set windows ip success: 172.17.156.1

)



pause
