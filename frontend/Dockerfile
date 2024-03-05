# #carga la imagen
FROM node:18-alpine

# #crear el directorio en el container
WORKDIR /app

# # hace una copia del .json
COPY package.json .

# # instala los modulos
RUN npm i

COPY . .

# # expone el puerto
EXPOSE 3000

# #ejecuta la aplicacion
CMD [ "npm", "run", "dev" ]