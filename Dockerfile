# Usar uma imagem base do Node
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY package.json package-lock.json ./
COPY ./ ./

# Instalar dependências
RUN npm install

# Construir o projeto
RUN npm run build

# Expor a porta que o Vite usará
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
