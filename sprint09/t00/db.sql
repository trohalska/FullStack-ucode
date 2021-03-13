USE ucode_web;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
     id INT(11) AUTO_INCREMENT,
     login VARCHAR(31) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     full_name VARCHAR(63) NOT NULL,
     email VARCHAR(63) NOT NULL UNIQUE,
     user_role VARCHAR(11),
     PRIMARY KEY (id)
);