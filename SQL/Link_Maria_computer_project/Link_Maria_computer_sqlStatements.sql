-- Link_Maria_computer_sqlStatements.sql
-- Full set of INSERT / SELECT / UPDATE / DELETE operations for the assignment.
-- Run AFTER executing Link_Maria_computer_createStatements.sql

USE computerdb;

-- INSERT: load the given 7 rows
INSERT INTO computer (id, name, type, processor, price) VALUES
  (4, 'GameDelux', 'embedded', 'Brain 456', 200),
  (1, 'MaxEffect 2000', 'pocket computer', 'Selenium II', 499),
  (3, 'Xunil 4.7', 'laptop', 'MotorOlè', 2000),
  (6, 'Cera 2400', 'tabletop', 'PiTron 3', 300),
  (5, 'BigFlop Mark II', 'server', 'BNE', 1500),
  (7, 'King 3000', 'supercomputer', 'X-Force', 700),
  (2, 'Beast II', 'gameover', 'MinPower', 100);

-- SELECT: all columns
SELECT * FROM computer;

-- SELECT: only processor, id, type
SELECT processor, id, type FROM computer;

-- SELECT by name/processor as requested
SELECT * FROM computer WHERE name = 'BigFlop Mark II';
SELECT * FROM computer WHERE processor = 'MotorOlè';
SELECT * FROM computer WHERE processor = 'PiTron 3';

-- UPDATE operations
UPDATE computer
SET type = 'laptop', processor = 'PiTron 3'
WHERE id = 1;

UPDATE computer
SET processor = 'Selenium II', type = 'embedded'
WHERE id = 5;

UPDATE computer
SET name = 'BigFlop Mark II', processor = 'MotorOlè', type = 'tabletop'
WHERE id = 1;

UPDATE computer
SET price = 200, processor = 'Selenium II', type = 'server'
WHERE id = 2;

-- DELETE operations
DELETE FROM computer WHERE id = 7;
DELETE FROM computer WHERE id = 5;
DELETE FROM computer WHERE processor = 'PiTron 3';
DELETE FROM computer WHERE name = 'BigFlop Mark II' AND processor = 'BNE';
DELETE FROM computer
WHERE processor = 'Selenium II' OR type = 'supercomputer' OR processor = 'MinPower';
