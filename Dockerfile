# Use the official Node.js 22.2.0 image as the base image
FROM node:22.2.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install
