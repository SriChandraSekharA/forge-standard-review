FROM node:20-alpine

WORKDIR /app

# stdio-only MCP server; no TCP port
# Build: docker build -f mcp/Dockerfile -t forge-standard-review-mcp .
#   or:  docker build -t forge-standard-review-mcp ./mcp
# Run:   docker run --rm -i forge-standard-review-mcp
#   with workspace mount: docker run --rm -i -v "$PWD:/workspace" forge-standard-review-mcp

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev

COPY tsconfig.json ./
COPY src ./src
COPY mcp.json ./mcp.json
COPY README.md ./README.md

RUN npm run build

ENTRYPOINT ["node", "dist/server.js"]
