echo "开始编译Go程序"
CGO_ENABLE=0 GOOS=linux GOARCH=amd64 go build -o ./build/blog-server -ldflags '-extldflags "-static"' .
echo "Go程序编译完成"

echo "开始构建Docker镜像"
docker build . -t sheason/blog-server
echo "Docker镜像已构建完成"