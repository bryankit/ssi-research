pull:
	@echo --- pulling docker container ---
	sudo docker-compose pull

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

run:
	@echo --- remove indy client settings ---
	rm -fvr ~/.indy_client
	@echo --- run the application ---
	npm run start
