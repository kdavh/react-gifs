NAME := npm-gif-app

# rebuild in case Dockerfile changes
build:
	docker-compose --project-name ${NAME} build

run:
	docker-compose --project-name ${NAME} run -p 3020:3020 --rm server

test:
	docker-compose --project-name ${NAME} run -p 4020:3020 --rm server npm test

sh:
	docker-compose --project-name ${NAME} run -p 5020:3020 --rm server bash
