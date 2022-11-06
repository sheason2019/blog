# 创建博客根目录
sudo mkdir /var/blog
# 修改目录权限
sudo chmod -R 777 /var/blog
# 将Nginx配置文件放到指定的位置
cd ./nginx
sh ./cp-to-volumn.sh
cd ../
# 再次修改目录下所有文件的权限
sudo chmod -R 777 /var/blog
# 构建服务端镜像
cd ./server
sh ./build.sh
cd ../
# 构建Web网站
cd ./web
sudo npm run build --emptyOutDir
cd ../
# 使用docker-compose构建
docker-compose up -d

