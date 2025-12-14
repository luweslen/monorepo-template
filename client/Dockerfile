FROM public.ecr.aws/docker/library/node:22-alpine AS base

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@9.15.2 --activate

WORKDIR /app

RUN apk update && apk add --no-cache bash

FROM base AS development

# Copy workspace files
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# Copy client package.json
COPY client/package.json ./client/

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile --prefer-offline

# Copy client source code
COPY client ./client

WORKDIR /app/client

# Expose Vite dev server port
EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"]
