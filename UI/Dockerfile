# Build stage
FROM node:trixie as ui_build
WORKDIR /ui_install
COPY package.json package-lock.json* ./
RUN npm install
COPY . ./
RUN npm run build
RUN mv build /ui_install/build

FROM node:trixie-slim
WORKDIR /app
COPY --from=ui_build /ui_install /app
EXPOSE 5173
CMD ["npm", "run", "dev"]