FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
