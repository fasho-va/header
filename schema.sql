DROP DATABASE IF EXISTS fashova;

CREATE DATABASE fashova;

USE fashova;

CREATE TABLE womens_jeans(
  uuid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  url VARCHAR(255),
  price int,
  details__001 VARCHAR(255),
  details__002 VARCHAR(255),
  details__003 VARCHAR(255),
  details__004 VARCHAR(255),
  details__005 VARCHAR(255),
  details__006 VARCHAR(255),
  details__007 VARCHAR(255),
  details__008 VARCHAR(255),
  details__009 VARCHAR(255),
  details__0010 VARCHAR(255),
  images__001 VARCHAR(255),
  images__002 VARCHAR(255),
  images__003 VARCHAR(255),
  images__004 VARCHAR(255),
  images__005 VARCHAR(255),
  images__006 VARCHAR(255),
  images__007 VARCHAR(255),
  images__008 VARCHAR(255),
  item_category VARCHAR(255),
  size_convention VARCHAR(255)
)

