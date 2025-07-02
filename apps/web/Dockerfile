FROM node:20 AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build
FROM node:20
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g serve
EXPOSE 5173
CMD ["serve","-s","dist"]
