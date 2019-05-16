DROP DATABASE IF EXISTS foshova;

CREATE DATABASE foshova;

USE foshova;

CREATE TABLE womens_jeans(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uuid int NOT NULL,
  product_name varchar(100),
  image_url varchar(255),
)

