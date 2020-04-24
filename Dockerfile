FROM node
WORKDIR /src
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn start
