-- Link_Maria_book_createStatements.sql
-- Creates database, user, table, and inserts 2 test rows for bookdb
-- Built to match the assignment spec (types, PK, NOT NULL).

-- 0) Safety first
DROP DATABASE IF EXISTS bookdb;
CREATE DATABASE IF NOT EXISTS bookdb
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;
USE bookdb;

-- 1) Table
CREATE TABLE IF NOT EXISTS book (
  bookID INT NOT NULL,
  name VARCHAR(70) NOT NULL,
  author VARCHAR(22) NOT NULL,
  pages INT NOT NULL,
  topic VARCHAR(10) NOT NULL,
  CONSTRAINT pk_book PRIMARY KEY (bookID)
);

-- NOTE about 'topic' length:
-- The spec fixes topic to VARCHAR(10). Some provided values like 'inventions' have length 11.
-- To stay compliant with the schema AND the given data, we insert LEFT(value, 10).
-- In strict modes this avoids errors and makes the truncation explicit.

-- 2) Two test inserts (as requested)
INSERT INTO book (bookID, name, author, pages, topic)
VALUES
  (10, 'Test Driven Databases', 'Ada Byron', 123, LEFT('inventions', 10)),
  (11, 'Relational Joy', 'Ed Codd', 256, 'databases');

-- 3) App user and privileges (MySQL 8+ syntax)
DROP USER IF EXISTS 'muhammad'@'localhost';
CREATE USER 'muhammad'@'localhost' IDENTIFIED BY 'HytqigjX';
GRANT ALL PRIVILEGES ON bookdb.* TO 'muhammad'@'localhost';
FLUSH PRIVILEGES;
