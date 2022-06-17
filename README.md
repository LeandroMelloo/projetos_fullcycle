# Projetos Fullcycle
Projetos Fullcycle

# Passo a Passo para construção no Github
https://github.com/codeedu/wsl2-docker-quickstart

# Comando para executar uma imagem
docker run hello-world
docker run nginx:1.19.10-alpine

# Comando para executar uma imagem desataxada
docker run -d nginx:1.19.10-alpine

# Comando para executar uma imagem desataxada e aplicando a porta
docker run -d nginx:1.19.10-alpine

# Comando para adcionar a porta do container para rodar a aplicação desataxada
docker run -d -p 8000:80 nginx:1.19.10-alpine

# Comando para adcionar a porta do container para rodar a aplicação desataxada e apontar para um arquivo html
docker run -d -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx:1.19.10-alpine

# Comando para parar uma imagem
docker stop id do container

# Comando para listar as imagens
docker image ls

# Comando para listar apenas uma imagem especifica
docker image ls | grep nginx

# Comando para listar todos os containers
docker ps -a

# Dockerhub
repositorio de imagens

# Container
Container é baseado em uma imagem
Container é a imagem sendo executada no seu sistema operacional
Container executa processos na máquina, com base na imagem
Podemos ter N container com N imagem

# Nginx
Nginx é um servidor leve de HTTP, proxy reverso, proxy de e-mail IMAP/POP3, feito por Igor Sysoev em 2005, sob licença BSD-like 2-clause. O Nginx consome menos memória que o Apache, pois lida com requisições Web do tipo “event-based web server”; e o Apache é baseado no “process-based server”, podendo trabalhar juntos.

