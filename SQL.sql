DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int NOT NULL,
  `category_label` varchar(100) NOT NULL,
  PRIMARY KEY (`category_id`)
);

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `article_id` int(3) NOT NULL,
  `article_category` int(3) NOT NULL,
  `article_label` varchar(25) NOT NULL,
  `article_price` decimal(10,0) NOT NULL,
  `article_discount` int(100) NOT NULL,
  `article_sales` int(11) NOT NULL,
  PRIMARY KEY (`article_id`)
);

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int NOT NULL,
  `customer_name` varchar(25) NOT NULL,
  `customer_email` varchar(25) NOT NULL,
  `customer_password` varchar(25) NOT NULL,
  `customer_token` varchar(25) NOT NULL,
  PRIMARY KEY (`customer_id`)
);

DROP TABLE IF EXISTS `customers_cart`;
CREATE TABLE IF NOT EXISTS `customers_cart` (
  `customer_id` int NOT NULL,
  `product_id` varchar(25) NOT NULL,
  PRIMARY KEY (`customer_id`)
);

INSERT INTO `categories`(`category_id`, `category_label`) VALUES (0, "Livres");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (1, "Musique, DVD et Blu-Ray");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (2, "Jeux vidéo et Consoles");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (3, "High-Tech");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (4, "Informatique et bureau");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (5, "Jouets, Enfants et Bébés");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (6, "Cuisine & Maison");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (7, "Bricolage, Jardin & Animalerie");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (8, "Beauté, Santé et Bien-être");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (9, "Épicerie, Boissons et Entretien");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (10, "Vêtements, Chaussures, Bijoux");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (11, "Vêtements, Chaussures, Bijoux");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (12, "Sports et Loisirs");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (13, "Automobile et Industrie");
INSERT INTO `categories`(`category_id`, `category_label`) VALUES (14, "Handmade");

INSERT INTO `articles`(`article_id`, `article_category`, `article_label`, `article_price`, `article_discount`, `article_sales`) VALUES (0,4,"Ordinateur DELL",599.99,0,300);
INSERT INTO `articles`(`article_id`, `article_category`, `article_label`, `article_price`, `article_discount`, `article_sales`) VALUES (1,4,"Ordinateur HP",699.99,15,200);
INSERT INTO `articles`(`article_id`, `article_category`, `article_label`, `article_price`, `article_discount`, `article_sales`) VALUES (2,4,"Écran DELL",199.99,0,100);
INSERT INTO `articles`(`article_id`, `article_category`, `article_label`, `article_price`, `article_discount`, `article_sales`) VALUES (3,10,"Sweat TeddyBear",40.0,0,10);
INSERT INTO `articles`(`article_id`, `article_category`, `article_label`, `article_price`, `article_discount`, `article_sales`) VALUES (4,10,"Nike Airforce 2",59.99,0,140);