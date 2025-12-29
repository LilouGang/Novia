# ON CHANGE ICI : Utiliser Node 20 (ou 22) au lieu de 18
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]