DROP DATABASE IF EXISTS fashova;

CREATE DATABASE fashova;

USE fashova;

CREATE TABLE womens_jeans(
  uuid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  url VARCHAR(255),
  price VARCHAR(255),
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
  images__001 TEXT,
  images__002 TEXT,
  images__003 TEXT,
  images__004 TEXT,
  images__005 TEXT,
  images__006 TEXT,
  images__007 TEXT,
  images__008 TEXT,
  item_category VARCHAR(255),
  size_convention VARCHAR(255)
)

