
CREATE DATABASE feeling_db;
USE feeling_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    journal varchar(500) NULL,
	PRIMARY KEY (id)
);