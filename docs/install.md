cd /opt/sites/alvestrasza

sudo systemctl stop alvestrasza-website.service

git pull
sudo rm -rf .next

npm ci
npm run typecheck
npm run lint
npm run build

sudo chown -R administrator:www-data /opt/sites/alvestrasza
sudo find /opt/sites/alvestrasza -type d -exec chmod 2750 {} \;
sudo find /opt/sites/alvestrasza -type f -exec chmod 0640 {} \;
sudo chmod -R g+rX /opt/sites/alvestrasza

sudo mkdir -p /opt/sites/alvestrasza/.next/cache
sudo chown -R www-data:www-data /opt/sites/alvestrasza/.next/cache
sudo chmod -R 0750 /opt/sites/alvestrasza/.next/cache

sudo systemctl start alvestrasza-website.service