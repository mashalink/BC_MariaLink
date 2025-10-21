-- Link_Maria_book_sqlStatements.sql
-- Full set of INSERT / SELECT / UPDATE / DELETE operations for the assignment.
-- Run AFTER executing Link_Maria_book_createStatements.sql

USE bookdb;

-- INSERT: load the given 7 rows
INSERT INTO book (bookID, name, author, pages, topic) VALUES
  (5, 'Databases - The rise and fall', 'Layla Jones', 150, 'History'),
  (6, 'NoSql - New Hope', 'Felix Harris', 350, LEFT('inventions', 10)),
  (3, 'The adventures of Mike the Millipede', 'Matt Wilson', 100, 'Computers'),
  (2, 'SQL-mysteries', 'Jesse River', 3420, 'mystery'),
  (7, 'Hacking databases', 'Antony Lee', 250, 'databases'),
  (1, 'Rebellion of Sophie Q. Lister', 'Isla Shore', 30, 'Gaming'),
  (4, 'Maria and My', 'Emily White', 500, 'Future SQL');

-- SELECT: all columns
SELECT * FROM book;

-- SELECT: only name, author, bookID
SELECT name, author, bookID FROM book;

-- SELECT by author/topic as requested
SELECT * FROM book WHERE author = 'Emily White';
SELECT * FROM book WHERE topic = 'Gaming';
SELECT * FROM book WHERE author = 'Layla Jones';

-- UPDATE operations
UPDATE book
SET pages = 250, topic = LEFT('inventions', 10)
WHERE bookID = 1;

UPDATE book
SET pages = 30, topic = 'History'
WHERE bookID = 4;

UPDATE book
SET topic = LEFT('inventions', 10),
    name = 'Rebellion of Sophie Q. Lister',
    author = 'Antony Lee'
WHERE bookID = 2;

UPDATE book
SET topic = 'History',
    author = 'Isla Shore',
    pages = 3420
WHERE bookID = 6;

-- DELETE operations
DELETE FROM book WHERE bookID = 7;
DELETE FROM book WHERE bookID = 3;
DELETE FROM book WHERE topic = 'History';
DELETE FROM book
WHERE name = 'Databases - The rise and fall'
   OR topic = 'mystery';

DELETE FROM book
WHERE name = 'Databases - The rise and fall'
  AND pages = 350
  AND author = 'Isla Shore';
