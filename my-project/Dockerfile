# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the project dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy the rest of the project files to the container
COPY . .

# Build the project for production
RUN yarn build

# Set the command to start the production server
CMD ["yarn", "start"]
