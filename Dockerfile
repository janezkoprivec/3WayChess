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

# Expose ports
EXPOSE 19006 19000 19001 8081

# Set environment variables
ENV CI=1
ENV REACT_NATIVE_PACKAGER_HOSTNAME=0.0.0.0
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0

# Start the application in web mode
CMD ["sh", "-c", "npx expo start --web --lan"] 