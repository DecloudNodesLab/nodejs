FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
FROM node:24-alpine
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
