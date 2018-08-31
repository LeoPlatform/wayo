# Warehouse Example

TODO: if they have node/npm installed they can use npm run start and it will do the docker commands

$ docker build . -t train-warehouse --no-cache

$ docker run -it -v /Users/joseph/.aws:/root/.aws -v /Users/joseph/GitHub/wayo/warehousing/example/:/root/app train-warehouse
