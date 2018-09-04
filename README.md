# wayo
Train in the wayo of Leo

Wayo is a reference to an African Safari Training and Field guide company

http://wayoafrica.com/


TODO: if they have node/npm installed they can use npm run start and it will do the docker commands

$ docker build . -t leo-training --no-cache

$ docker run -it -v $HOME/.aws:/root/.aws -v $HOME/<git-clone-location>:/root/app leo-training