# 部署
可以用服务器部署，服务器部署参见hexo官方文档。也可以用docker部署。
## docker

```bash
docker build -t 镜像名:latest .;
docker run -itd --name 容器名 --dns=8.8.8.8 --net 本地自建网络名 -p 8022:22  -p 4000:4000  镜像名:latest
```

可以进入容器中启动。
```bash
docker exec -it 容器名 sh
hexo server
```
后续也可以考虑部署配置。
```bash
hexo deploy
```
