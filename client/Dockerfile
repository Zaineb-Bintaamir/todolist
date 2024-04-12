# Use a Node.js image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Build the frontend
RUN npm run build

# Expose port 3000
EXPOSE 3000

#Set the command to run the application
CMD ["npm", "start"]
