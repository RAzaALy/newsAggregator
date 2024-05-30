# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files to the working directory
COPY . .

# Build your Vite project
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "dev"]
