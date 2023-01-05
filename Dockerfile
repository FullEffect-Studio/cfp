FROM NODE:18.9.0-alpine
WORKDIR /react
COPY . .
RUN npm run build
