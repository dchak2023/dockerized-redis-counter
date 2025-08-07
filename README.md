# Redis Counter Node.js App 🐳

This project demonstrates a simple Node.js web app that tracks the number of times a route has been hit using Redis, all running in Docker.

## 🚀 Steps to Run

### 1️⃣ Build the App Image

```
docker build -t redis-node-app .
```

### 2️⃣ Create Docker Network
```
docker network create mynet
```

### 3️⃣ Start Redis Container
```
docker run -d --name redis --network mynet redis
```

### 4️⃣ Start App Container
```
docker run -d --name myapp --network mynet -p 3000:3000 redis-node-app
```

### 5️⃣ Test the App
```
curl http://localhost:3000/hit
```

### 6️⃣ Cleanup
```
docker rm -f myapp redis
docker network rm mynet
```

### 🔧 Tech Stack
* Node.js

* Express

* Redis

* Docker

### 📚 Learn More
* [Redis Docker Image](https://hub.docker.com/_/redis)

* [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/README.md)