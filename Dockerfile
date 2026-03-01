# Use a lightweight Node.js image
FROM node:18-alpine
WORKDIR /app

# FIX
RUN apk add --no-cache git

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]