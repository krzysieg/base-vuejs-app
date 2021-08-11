FROM node:14-buster-slim AS builder
WORKDIR /app
COPY . .
RUN apt-get update; \
    apt-get install -y jq moreutils; \
    apt-get clean; \
    apt-get -y autoremove; \
    rm -rf /var/lib/apt/lists/*; \
    npm install --no-package-lock; \
    npm run build

FROM nginx:1.18.0
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ .