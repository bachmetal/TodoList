# CREATE DATABASE IF NOT EXISTS todolist;

CREATE TABLE IF NOT EXISTS `todos`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `item`      varchar(1024) DEFAULT NULL,
    `completed` boolean DEFAULT FALSE,
    PRIMARY KEY (`id`)
);