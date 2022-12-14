FROM node:16.16

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4201

CMD ["npm", "run", "start-docker"]
