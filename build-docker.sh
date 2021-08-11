#!/bin/bash

source ./deploy-variables

if [ -z "$DOCKER_AUTH" ]
then
    echo "Docker auth is required."
    exit 1
fi

mkdir -p $HOME/.docker || {
    echo "Error while creating docker credentials directory."
    exit 5
}

cat "$DOCKER_AUTH" > $HOME/.docker/config.json || {
    echo "Error while creating docker auth file."
    exit 6
}

docker build -f env-prod.Dockerfile -t $IMAGE_NAME . || {
    echo "Error while building image."
    exit 7
}

docker push $IMAGE_NAME || {
    echo "Error while pushing image to container registry."
    exit 8
}

docker image rm $IMAGE_NAME || {
    echo "Error while removing image."
    exit 9
}