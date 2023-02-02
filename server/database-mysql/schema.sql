-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mvp` ;

-- -----------------------------------------------------
-- Table `mvp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`user` (
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mvp`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `post` VARCHAR(50) NOT NULL,
  `profile_username` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_profile_idx` (`profile_username` ASC) VISIBLE,
  CONSTRAINT `fk_posts_profile`
    FOREIGN KEY (`profile_username`)
    REFERENCES `mvp`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mvp`.`userinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`userinfo` (
  `namee` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `number` INT NOT NULL,
  `note`VARCHAR(50) NOT NULL,
  
  `idinfo` INT NOT NULL,
  `profile_username` VARCHAR(50) NOT NULL,
  INDEX `fk_userinfo_profile1_idx` (`profile_username` ASC) VISIBLE,
  CONSTRAINT `fk_userinfo_profile1`
    FOREIGN KEY (`profile_username`)
    REFERENCES `mvp`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
