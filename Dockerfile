# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose only web port
EXPOSE 8081

# Set environment variables
ENV CI=1
ENV NODE_ENV=production
ENV PORT=8081

# Build the web bundle
RUN npx expo export --platform web

# Install serve to host the static files
RUN npm install -g serve

# Start the web server
CMD serve dist --listen tcp://0.0.0.0:8081 