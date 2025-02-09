# Sử dụng image node phiên bản LTS (Long Term Support)
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Expose port 3000 (port mặc định của Next.js)
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]