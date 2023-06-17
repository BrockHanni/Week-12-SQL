DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    DepartmentID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DepartmentName VARCHAR(30) NOT NULL
);
