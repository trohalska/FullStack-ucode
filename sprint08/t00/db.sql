CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER IF NOT EXISTS 'trohalska'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL ON ucode_web.* TO 'trohalska'@'localhost';