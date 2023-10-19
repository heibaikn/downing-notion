# 0905 wsl nginx 使用

## install

```jsx
sudo apt install nginx
```

## use

```jsx
sudo service nginx start|stop|reload

nginx -h

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/share/nginx/)
  -c filename   : set configuration file (default: /etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file

```

## config

rewrite 重写url,回再产生一次访问

```jsx
server {
  location / {
    root /home/downing/www/gaming-service/www/dist/main;
    index index.html;
  }
  location ^~ /child/ {
    root /home/downing/www/gaming-service/www/dist/;
    index index.html;
  }

  location ^~ /docs/ {
    root /home/downing/www/gaming-service/www/dist/;
    index index.html index.htm;
  }

}
```