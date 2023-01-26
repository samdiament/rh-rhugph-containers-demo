# rh-rhugph-containers-demo

## Getting started

### Building and running the container
```
podman volume create lotto-numbers-logs
podman build -t lotto-numbers:0.0.1 .
podman pod create -p 8080:8080 lotto-numbers
podman run -d -v lotto-numbers-logs:/logs --pod lotto-numbers --name 'lotto-numbers-app' lotto-numbers:0.0.1
```

## Project structure
```
rh-rhugph-containers-demo/
├─ src/
│  ├─ app.js
│  ├─ Dockerfile
│  ├─ middleware/
│  │  ├─ logger.js
│  │  ├─ morganHttpsLogging.js
│  │  ├─ responseSchema.js
│  ├─ routes/
│  │  ├─ lottonumbers.js
│  ├─ package.json
│  ├─ package-lock.json
├─ LICENSE
├─ .gitignore
├─ CODE_OF_CONDUCT.md
├─ README.md
```


## Checking the logs
#### On the host machine
```
podman volume ls
podman inspect lotto-numbers-logs
ls [directory]
cat [directory]/[filename]
```

#### In the container
```
podman exec -it 9e0 bash
cd /logs
ls
cat [file_name]
```
