# Alvestrasza Corporation Static Website

Static under-construction website for `alvestrasza.com` and `www.alvestrasza.com`.

## Contents

```text
index.html
style.css
assets/alvestrasza-logo.png
```

## Deployment

Upload all files to the web root of the Linux web server, for example:

```bash
sudo mkdir -p /var/www/alvestrasza.com
sudo rsync -av ./ /var/www/alvestrasza.com/
sudo chown -R www-data:www-data /var/www/alvestrasza.com
sudo find /var/www/alvestrasza.com -type d -exec chmod 755 {} \;
sudo find /var/www/alvestrasza.com -type f -exec chmod 644 {} \;
```

For nginx, point the site root to:

```text
/var/www/alvestrasza.com
```
