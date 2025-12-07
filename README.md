# Monorepo Template

A modern monorepo template using pnpm workspaces, NestJS, and Docker.

## Prerequisites

- Node.js >= 22.15.0
- pnpm >= 9.15.2
- Docker & Docker Compose

## Getting Started

### Install Dependencies

```bash
# Install dependencies for all workspaces
pnpm install

# Or install dependencies using Docker
docker compose run server pnpm install
```

### Running the Server

```bash
# Run server with Docker Compose
docker compose up server
```

### Available Scripts

#### Server

```bash
# Development
pnpm run start:dev

# Production build
pnpm run build
pnpm run start:prod

# Testing
pnpm run test          # Run all tests
pnpm run test:unit     # Run unit tests
pnpm run test:e2e      # Run E2E tests
pnpm run test:cov      # Run tests with coverage
pnpm run test:ui       # Run tests with UI

# Linting
pnpm run lint
```

## Project Structure

```
.
├── server/           # NestJS backend application
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── docker-compose.yaml
```

## API Documentation

When the server is running, you can access:

- Swagger UI: http://localhost:3000/swagger
- Scalar API Docs: http://localhost:3000/docs

## License

MIT
