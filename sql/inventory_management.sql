USE vuetest;

DROP TABLE IF EXISTS `store_user`;
CREATE TABLE `store_user` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`username` varchar(255) DEFAULT NULL COMMENT '登录用户名',
	`password` varchar(255) DEFAULT NULL COMMENT '密码',
	`logintime` int(10) unsigned DEFAULT NULL COMMENT '上次登录时间',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

DROP TABLE IF EXISTS `store_list`;
CREATE TABLE `store_list` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int(11) DEFAULT NULL COMMENT '用户id',
	`content` varchar(255) DEFAULT NULL COMMENT '任务内容',
	`status` tinyint(1) unsigned DEFAULT NULL COMMENT '任务状态',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';