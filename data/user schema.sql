
CREATE DATABASE feelings_db;
USE feelings_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    journal varchar(500) NULL,
	PRIMARY KEY (id)
);