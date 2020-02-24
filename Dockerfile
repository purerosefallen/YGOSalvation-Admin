FROM strapi/base
RUN apt update && apt -y install python3 build-essential && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /usr/src/app/src
COPY ./package*.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm ci
COPY ./src/package*.json /usr/src/app/src/
WORKDIR /usr/src/app/src
RUN npm ci 
COPY . /usr/src/app
EXPOSE 1337
CMD ["npm", "run", "start"]
