# Multi-stage Dockerfile for Teamio Web Application

# ----------------------------------------------------
# Stage 1: Build Stage
# ----------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source code and build production bundle
COPY . .
RUN npm run build

# ----------------------------------------------------
# Stage 2: Production Nginx Server Stage
# ----------------------------------------------------
FROM nginx:alpine AS runner

# Copy custom Nginx configuration for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production bundle from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
