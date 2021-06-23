FROM node:16.2.0-alpine3.13

RUN apk add --no-cache libc6-compat

# RUN npm i -g npm && npm -v

# Set enviornment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the listening port
EXPOSE 3000

# Set working directory
WORKDIR /home/nextjs/app
# WORKDIR /usr/app

# Install PM2 globally
# RUN npm install --global pm2

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json .
COPY package-lock.json .

RUN chown -R nextjs:nodejs /home/nextjs

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
# USER node
USER nextjs

# Install dependencies
RUN npm install --no-optional
RUN npx next telemetry disable

# Copy all files
COPY . .

# Build app
RUN npm run build

# Launch app
CMD [ "npm", "start" ]
# Launch app with PM2
# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]