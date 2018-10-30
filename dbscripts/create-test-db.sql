/*
hay que crear la tabla a mano la primera vez para que este codigo no tire error 
*/
DROP DATABASE IF EXISTS ecommerce_test;

CREATE DATABASE ecommerce_test;

USE ecommerce_test;

CREATE TABLE IF NOT EXISTS `users` (
`id` int NOT NULL AUTO_INCREMENT,
`username` varchar(30) NOT NULL,
`password` varchar(40) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS `products` (
`id` int(10) NOT NULL AUTO_INCREMENT,
`name` varchar(30) NOT NULL,
`price` float(7, 2) NOT NULL,
`last_price` float(7, 2) DEFAULT NULL,
`stock` int(10) NOT NULL,
`category` varchar(40) DEFAULT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `purchases` (
`id` int(10) NOT NULL AUTO_INCREMENT,
`user` int(10) DEFAULT NULL,
`product` int(10) DEFAULT NULL,
`date` date DEFAULT NULL,
`total` float(20, 2) DEFAULT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `wishlists` (
`id_user` int NOT NULL,
`id_product` int(10) NOT NULL,

PRIMARY KEY(`id_user`, `id_product`)
);

CREATE TABLE IF NOT EXISTS `categories` (
`id` int(10) NOT NULL,
`type_category` varchar(30) DEFAULT NULL,

PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `categories_for_products` (
`id_category` int(10) NOT NULL,
`id_product` int(10) NOT NULL,

PRIMARY KEY(`id_category`, `id_product`)
);

CREATE TABLE IF NOT EXISTS `products_for_purchases` (
`id_product` int(10) NOT NULL,
`id_purchases` int(10) NOT NULL,
`qty` int(10) DEFAULT NULL,

PRIMARY KEY(`id_product`, `id_purchases`)
);
-- Los nombre de las restricciones son unicos para toda la Base de Datos
ALTER TABLE `products_for_purchases`
ADD CONSTRAINT FK_idPurchases_productsForPurchases_R_id_purchases FOREIGN KEY (`id_purchases`) REFERENCES `purchases`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT FK_idProduct_productsForPurchases_R_id_products  FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `categories_for_products`
ADD CONSTRAINT FK_idCategory_categoriesForProducts_R_id_category FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT FK_idProduct_categoriesForProducts_R_id_products FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `wishlists`
ADD CONSTRAINT FK_idUser_wishlists_R_id_users FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT FK_idProduct_wishlists_R_id_products FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
