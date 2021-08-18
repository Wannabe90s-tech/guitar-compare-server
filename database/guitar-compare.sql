/*
 Navicat Premium Data Transfer

 Source Server         : guitar-compare
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : guitar-compare

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 18/08/2021 19:36:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for peoples
-- ----------------------------
DROP TABLE IF EXISTS `peoples`;
CREATE TABLE `peoples`  (
  `peopleId` int NOT NULL AUTO_INCREMENT,
  `peopleCode` varchar(14) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `peopleFirstName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `peopleLastName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`peopleId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of peoples
-- ----------------------------
INSERT INTO `peoples` VALUES (1, 'G1', 'supachai', 'misa', 'supachai@gmail.com', 'supachai.mi', '044963225a');
INSERT INTO `peoples` VALUES (2, 'G2', 'ketsirin', 'ketchansiri', 'ketchansiri@gmail.com', 'ketsirin.mi', '044963225');
INSERT INTO `peoples` VALUES (3, 'G3', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (4, 'G4', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (5, 'G5', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (6, 'G6', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (7, 'G7', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (8, 'G8', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (9, 'G9', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (10, 'G10', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (11, 'G10', 'ketsirin2', 'ketchansiri2', 'ketchansiri2@gmail.com', 'ketsirin.mi2', '044963225');
INSERT INTO `peoples` VALUES (13, 'G11', 'supachai', 'misa', 'supachai.mi@gmail.com', 'supachai.mi', '044963225aws');
INSERT INTO `peoples` VALUES (14, 'G12', 'supachai', 'misa', 'supachai.mi@gmail.com', 'supachai.mi', '044963225aws');
INSERT INTO `peoples` VALUES (15, 'G13', 'supachai', 'misa', 'supachai.mi@gmail.com', 'supachai.mi', '044963225aws');
INSERT INTO `peoples` VALUES (16, 'G14', 'supachais', 'misa', 'supachai.mi@gmail.com', 'supachai.mi', '044963225aws');
INSERT INTO `peoples` VALUES (17, 'G15', 'supachai', 'misa', 'supachai.mi@gmail.com', 'supachai.mi12', '$2b$10$7AwSc9h/wWe/1YzYjYqHkug3jLcTKSDDx2JQY8NC9noKkpfNxjsZ.');

SET FOREIGN_KEY_CHECKS = 1;
