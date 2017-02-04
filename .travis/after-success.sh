#!/bin/bash

set -e # Abort script at first error
# set -u # Disallow unset variables
set -v

# Only run when not part of a pull request and on the master branch
if [[ $TRAVIS_PULL_REQUEST != "false" ]] || [[ $TRAVIS_BRANCH != "master" ]]
then
    echo "Skipping deployment on branch=$TRAVIS_BRANCH, PR=$TRAVIS_PULL_REQUEST"
    exit 0;
fi

echo "Now would be a good time to deploy"

IMAGE_VERSION=${TRAVIS_BUILD_NUMBER:-dev}

IMAGE_NAME="graphql-example-api:$IMAGE_VERSION"

BUILD_FOLDER=dist/

rm -rf $BUILD_FOLDER
mkdir -p $BUILD_FOLDER

yarn run build

rm -rf $BUILD_FOLDER/build/babel.js

# copy all those files into BUILD_FOLDER
cp -RL \
Dockerfile \
package.json \
yarn.lock \
$BUILD_FOLDER

# enter BUILD_FOLDER
cd $BUILD_FOLDER

# install production dependencies
yarn install --prod --pure-lockfile --no-progress

docker build . -t $IMAGE_NAME

docker login -u="$DOCKER_USERNAME" -p="$HEROKU_API_KEY" registry.heroku.com

docker tag $IMAGE_NAME registry.heroku.com/graphql-example-api/web
docker push registry.heroku.com/graphql-example-api/web
wait
echo "All finished"
