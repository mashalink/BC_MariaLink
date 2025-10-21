mysql -u root -p
SHOW DATABASES;
CREATE DATABASE ekadb; / CREATE DATABASE IF NOT EXISTS ekadb;
SHOW DATABASES;
USE ekadb
SHOW TABLES;
CREATE TABLE IF NOT EXISTS testi(
  id   INT NOT NULL PRIMARY KEY,
  nimi VARCHAR(30) NOT NULL
);
SHOW TABLES;
INSERT INTO testi (id, nimi) VALUES (1,'Leila');
SELECT * FROM testi;
INSERT INTO testi (id, nimi) VALUES (2,'Matti');
SELECT * FROM testi;
SELECT nimi,id FROM testi;
SELECT id,nimi FROM testi;
DESCRIBE testi;
SHOW CREATE TABLE testi;

CREATE USER 'secret'@'localhost' IDENTIFIED BY 'secret';
SELECT User, Host FROM mysql.user;
DROP USER 'secret'@'localhost';

CREATE USER IF NOT EXISTS 'admin1'@'localhost' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON *.* TO 'admin1'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
-- select user,host,password from mysql.user;
-- смотреть пароль в mysql.user не надо (эта колонка устарела).
-- лучше так:
SELECT User,Host,plugin FROM mysql.user WHERE User='admin1';
EXIT;

mysql -u admin1 -p -e "SHOW DATABASES;"
mysql -u admin1 -p -e "SELECT * FROM ekadb.testi;"

CREATE USER IF NOT EXISTS 'matti'@'localhost' IDENTIFIED BY 'salainen';
GRANT SELECT, INSERT ON ekadb.testi TO 'matti'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'matti'@'localhost';
EXIT;

mysql -u matti -p
SHOW DATABASES;  
USE ekadb;
SELECT * FROM testi;  
INSERT INTO testi(id,nimi) VALUES (3,'Pirkko');
SELECT * FROM testi;
INSERT INTO testi(id,nimi) VALUES (30,'Veera');
SELECT * FROM testi;
-- дальше ДОЛЖНО падать (нет прав):
-- DELETE FROM testi;
-- DROP DATABASE ekadb;
-- DROP TABLE testi;
EXIT;
