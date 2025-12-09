FROM public.ecr.aws/docker/library/node:22-alpine AS base

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@10.25.0 --activate

WORKDIR /app

RUN apk update && apk add --no-cache bash

FROM base AS ci

# Copy workspace files
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# Copy server package.json
COPY server/package.json ./server/

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile --prefer-offline

# Copy server source code
COPY server ./server

FROM ci AS builder
ENV NODE_ENV=production

WORKDIR /app/server

# Build the server
RUN pnpm build

FROM base AS release

WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY server/package.json ./server/

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prefer-offline --prod

# Copy built application
COPY --from=builder /app/server/dist ./server/dist

FROM gcr.io/distroless/nodejs22-debian13 AS production

WORKDIR /app

COPY --from=release /app ./

# Configure container network
EXPOSE 3000
CMD [ "server/dist/main.js" ]
