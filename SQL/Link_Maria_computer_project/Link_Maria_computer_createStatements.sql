-- Link_Maria_computer_createStatements.sql
-- Creates database, user, table, and inserts 2 test rows for computerdb

-- 0) Safety first
DROP DATABASE IF EXISTS computerdb;
CREATE DATABASE IF NOT EXISTS computerdb
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;
USE computerdb;

-- 1) Table
CREATE TABLE IF NOT EXISTS computer (
  id INT NOT NULL,
  name VARCHAR(17) NOT NULL,
  type VARCHAR(17) NOT NULL,
  processor VARCHAR(18) NOT NULL,
  price INT NOT NULL,
  CONSTRAINT pk_computer PRIMARY KEY (id)
);

-- 2) Two test inserts
INSERT INTO computer (id, name, type, processor, price) VALUES
  (10, 'TinyBox', 'embedded', 'PiTron 3', 50),
  (11, 'DeskPro', 'tabletop', 'Selenium II', 1200);

-- 3) App user and privileges
DROP USER IF EXISTS 'emil'@'localhost';
CREATE USER 'emil'@'localhost' IDENTIFIED BY '5CgXWndj';
GRANT ALL PRIVILEGES ON computerdb.* TO 'emil'@'localhost';
FLUSH PRIVILEGES;
