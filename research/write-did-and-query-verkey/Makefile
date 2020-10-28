pull:
	@echo --- pulling docker container ---
	sudo docker-compose pull

build:
	@echo --- building container ---
	sudo docker-compose build

push:
	@echo --- pushing container to dockerhub ---
	sudo docker-compose push

start:
	@echo --- starting container ---
	sudo docker-compose up -d

stop:
	@echo --- stopping container ---
	sudo docker-compose down

ps:
	@echo --- showing docker processes ---
	sudo docker-compose ps

logs:
	@echo --- showing docker logs ---
	sudo docker-compose logs

ssh:
	@echo --- ssh inside node container ---
	sudo docker exec -it write-did-and-query-verkey_node_1 bash

run:
	@echo --- run the application ---
	npm run start
