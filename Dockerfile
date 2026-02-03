FROM node:alpine
WORKDIR /Desktop/react-app
COPY package*.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm","start"]
