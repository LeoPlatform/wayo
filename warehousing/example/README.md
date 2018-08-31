# Warehouse Example

TODO: if they have node/npm installed they can use npm run start and it will do the docker commands

$ docker build . -t train-warehouse --no-cache

$ docker run -it -v $HOME/.aws:/root/.aws -v $HOME/<git-clone-location>/warehousing/example:/root/app train-warehouse
