/*
SQLyog Community Edition- MySQL GUI v8.05 
MySQL - 5.5.27 : Database - encuestas
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`encuestas` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `encuestas`;

/*Table structure for table `sc_sv_attributes` */

DROP TABLE IF EXISTS `sc_sv_attributes`;

CREATE TABLE `sc_sv_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdDate` datetime DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `createdUser` int(11) DEFAULT NULL,
  `modifiedUser` int(11) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `value` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sc_sv_attributes` */

/*Table structure for table `sc_sv_fields` */

DROP TABLE IF EXISTS `sc_sv_fields`;

CREATE TABLE `sc_sv_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdDate` datetime DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `createdUser` int(11) DEFAULT NULL,
  `modifiedUser` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `helptext` varchar(512) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sc_sv_fields` */

/*Table structure for table `sc_sv_surveys` */

DROP TABLE IF EXISTS `sc_sv_surveys`;

CREATE TABLE `sc_sv_surveys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `description` text,
  `active` int(11) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `createdUser` int(11) DEFAULT NULL,
  `modifiedUser` int(11) DEFAULT NULL,
  `instructions` text,
  `comments` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sc_sv_surveys` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
