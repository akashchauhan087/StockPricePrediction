# Multi Stage
# stage 1
FROM python:3.11 AS build
WORKDIR /install
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt
# stage 2
FROM python:3.11-slim
WORKDIR /app
COPY --from=build /install /usr/local
COPY . .
EXPOSE 5000
CMD ["python", "manage.py", "runserver"]







# Single Stage

# FROM python:3.11
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# COPY . .
# EXPOSE 5000
# CMD ["python", "manage.py", "runserver"]



