-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema salestrackerdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema salestrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `salestrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `salestrackerdb` ;

-- -----------------------------------------------------
-- Table `salestrackerdb`.`companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`companies` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `companyid` INT NOT NULL,
  `friendlyname` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC),
  UNIQUE INDEX `companyid_UNIQUE` (`companyid` ASC),
  UNIQUE INDEX `friendlyname_UNIQUE` (`friendlyname` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `salestrackerdb`.`companyLocations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`companyLocations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyid` INT NOT NULL,
  `locationid` INT NOT NULL,
  `friendlyname` VARCHAR(255) NOT NULL,
  `locationcity` VARCHAR(255) NOT NULL,
  `locationstate` VARCHAR(45) NOT NULL,
  `ownerid` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `companyid_UNIQUE` (`companyid` ASC),
  UNIQUE INDEX `locationid_UNIQUE` (`locationid` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `salestrackerdb`.`userData`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`userData` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyid` INT NOT NULL,
  `locationid` INT NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `userid` INT NOT NULL,
  `friendlyname` VARCHAR(100) NOT NULL,
  `userlevel` VARCHAR(45) NOT NULL,
  `defaultscreen` VARCHAR(45) NULL,
  `colormode` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `salestrackerdb`.`salesParams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`salesParams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyid` INT NOT NULL,
  `locationid` INT NOT NULL,
  `param1` VARCHAR(45) NOT NULL,
  `param2` VARCHAR(45) NULL,
  `param3` VARCHAR(45) NULL,
  `param4` VARCHAR(45) NULL,
  `param5` VARCHAR(45) NULL,
  `param6` VARCHAR(45) NULL,
  `param7` VARCHAR(45) NULL,
  `param8` VARCHAR(45) NULL,
  `param9` VARCHAR(45) NULL,
  `param10` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `salestrackerdb`.`salesData`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`salesData` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyid` INT NOT NULL,
  `locationid` INT NOT NULL,
  `userid` INT NOT NULL,
  `param1` VARCHAR(45) NOT NULL,
  `param2` VARCHAR(45) NULL,
  `param3` VARCHAR(45) NULL,
  `param4` VARCHAR(45) NULL,
  `param5` VARCHAR(45) NULL,
  `param6` VARCHAR(45) NULL,
  `param7` VARCHAR(45) NULL,
  `param8` VARCHAR(45) NULL,
  `param9` VARCHAR(45) NULL,
  `param10` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `salestrackerdb`.`salesCommission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `salestrackerdb`.`salesCommission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyid` INT NOT NULL,
  `userid` INT NOT NULL,
  `commissiontype` VARCHAR(45) NOT NULL,
  `productid` INT NOT NULL,
  `productname` VARCHAR(45) NOT NULL,
  `commissionvalue` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
