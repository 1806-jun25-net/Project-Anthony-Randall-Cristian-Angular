# base image
FROM node:carbon as build

# # install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

WORKDIR /app 


# set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

#COPY package.json package-lock.json ./
RUN npm install


# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . ./
RUN npm run build
# install and cache app dependencies

# COPY package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install -g @angular/cli@1.7.1 --unsafe

from nginx:1.14 as deploy 

# add app
run rm -rf /usr/share/nginx/html/*

# start app
# CMD ng serve --host 0.0.0.0

COPY --from=build /app/dist/project2-angular /usr/share/nginx/html