sudo mysql -u root
SHOW DATABASES;
CREATE DATABASE ekadb;
SHOW DATABASES;
USE ekadb
SHOW TABLES;
create table testi( 
    -> id integer not null primary key,
    -> nimi VARCHAR(30) not null
    -> );
SHOW TABLES;
insert into testi (id, nimi) values(1, 'Leila');
select * from testi;
insert into testi (id, nimi) values(2, 'Matti');
select nimi from testi;
select nimi, id from testi;
describe testi;
show create table testi;
CREATE USER 'secret'@'localhost' IDENTIFIED BY 'secret';
SELECT User, Host FROM mysql.user;
DROP USER 'secret'@'localhost';
create user 'admin1'@'localhost' identified by '12345';
grant all privileges on *.* to 'admin1'@'localhost' with grant option;
SELECT User, Host, password FROM mysql.user where user='admin1';
mysql -u admin1 -p
show databases;
use ekadb;
select * from testi;
drop database ekadb;


create user 'matti'@'localhost' identified by 'salainen';
grant select, insert on ekadb.testi to 'matti'@'localhost';
exit;
mysql -u matti -p
show databases;
use ekadb;
select * from testi;
insert into testi (id, nimi) values(30, 'Verra');
elete from testi;
ERROR 1142 (42000): DELETE command denied to user 'matti'@'localhost' for table `ekadb`.`testi`
MariaDB [ekadb]> drop databases ekadb;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'databases ekadb' at line 1
exit;

mysql -u admin1 -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 10
Server version: 12.0.2-MariaDB Homebrew

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| ekadb              |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.002 sec)

MariaDB [(none)]> create databases ekadb;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'databases ekadb' at line 1
MariaDB [(none)]> 