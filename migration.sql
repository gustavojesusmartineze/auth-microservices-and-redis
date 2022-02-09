DROP DATABASE socialapp;

CREATE DATABASE socialapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE socialapp;

create table user
(
	id varchar(32) NOT NULL UNIQUE,
	username varchar(64) NOT NULL UNIQUE,
	name varchar(64) null,
	constraint user_pk
		primary key (id)
);

INSERT INTO user (id, username, `name`) values ('DJG4dwfCmrDTQf5TYwQBk', 'tnevin0', 'Tris Nevin');
INSERT INTO user (id, username, `name`) values ('Qs4nCiiaQ_mvKWPISQz98', 'kmacuchadair1', 'Kylen MacUchadair');
INSERT INTO user (id, username, `name`) values ('2AgFbUWT5k2pgTjne0Iyd', 'sbarenski2', 'Slade Barenski');
INSERT INTO user (id, username, `name`) values ('ZOf8dfgdal9Q7vCNphMjQ', 'echin3', 'Edwin Chin');
INSERT INTO user (id, username, `name`) values ('NMIt2U-unj1l73cSjD8ZO', 'mspellsworth4', 'Melisandra Spellsworth');
INSERT INTO user (id, username, `name`) values ('bXJUqit6hIj53wRn7DCNR', 'hclewett5', 'Hastie Clewett');
INSERT INTO user (id, username, `name`) values ('YQsqn1o71kVjysfSeAVfL', 'mbysaker6', 'Marvin Bysaker');
INSERT INTO user (id, username, `name`) values ('f6EDf1h6xMrwzydS4BVRt', 'kschimpke7', 'Kaleena Schimpke');
INSERT INTO user (id, username, `name`) values ('t8IOMNTczGgp2LKbN_XVF', 'mgryglewski8', 'Morlee Gryglewski');
INSERT INTO user (id, username, `name`) values ('mrSwarUt2pzVLbh2vTyZZ', 'elambersen9', 'Ethelin Lambersen');
INSERT INTO user (id, username, `name`) values ('EFHKLotMLHRktgqIdrUBg', 'kmingeta', 'Kenneth Minget');
INSERT INTO user (id, username, `name`) values ('3TxeCMDxYvjGdg0F1zfn8', 'scranfieldb', 'Samson Cranfield');

create table auth
(
	id varchar(32) NOT NULL UNIQUE,
	username varchar(64) NOT NULL UNIQUE,
	password varchar(64) null,
	constraint auth_pk
		primary key (id)
);


INSERT INTO auth (id, username, `password`) values ('DJG4dwfCmrDTQf5TYwQBk', 'tnevin0', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('Qs4nCiiaQ_mvKWPISQz98', 'kmacuchadair1', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('2AgFbUWT5k2pgTjne0Iyd', 'sbarenski2', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('ZOf8dfgdal9Q7vCNphMjQ', 'echin3', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('NMIt2U-unj1l73cSjD8ZO', 'mspellsworth4', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('bXJUqit6hIj53wRn7DCNR', 'hclewett5', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('YQsqn1o71kVjysfSeAVfL', 'mbysaker6', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('f6EDf1h6xMrwzydS4BVRt', 'kschimpke7', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('t8IOMNTczGgp2LKbN_XVF', 'mgryglewski8', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('mrSwarUt2pzVLbh2vTyZZ', 'elambersen9', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('EFHKLotMLHRktgqIdrUBg', 'kmingeta', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');
INSERT INTO auth (id, username, `password`) values ('3TxeCMDxYvjGdg0F1zfn8', 'scranfieldb', '$2b$05$pH/S9rh.nqE1AYuIjXS4kukmfRc6A5Nhj.5nRUKNlESm1PuFLUdsu');


create table post
(
	id varchar(32) not null,
	title varchar(64) not null,
	text text null,
	author varchar(32) not null,
	constraint post_pk
		primary key (id)
);

INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000092', 'Vibrator', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'f6EDf1h6xMrwzydS4BVRt');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000093', 'Strongest Man in the World, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 'f6EDf1h6xMrwzydS4BVRt');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000094', 'Advise and Consent', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'f6EDf1h6xMrwzydS4BVRt');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000095', 'Slight Case of Murder, A', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'YQsqn1o71kVjysfSeAVfL');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000096', 'Beautiful Girls', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'bXJUqit6hIj53wRn7DCNR');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000097', 'Léon Morin, Priest (Léon Morin, prêtre)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'bXJUqit6hIj53wRn7DCNR');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000098', 'My Week with Marilyn', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'bXJUqit6hIj53wRn7DCNR');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae2715000099', 'Sitter, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'bXJUqit6hIj53wRn7DCNR');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009a', 'Renegades', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'NMIt2U-unj1l73cSjD8ZO');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009b', 'Bandit, The (Eskiya)', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'ZOf8dfgdal9Q7vCNphMjQ');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009c', 'One Week', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'ZOf8dfgdal9Q7vCNphMjQ');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009d', 'Kronos', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2AgFbUWT5k2pgTjne0Iyd');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009e', 'Journey to Italy (Viaggio in Italia', 'Is in faucibus orci luctus et ultrices posuere cubilia Curae', '2AgFbUWT5k2pgTjne0Iyd');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae271500009f', 'Silent Witness (Do Not Disturb)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2AgFbUWT5k2pgTjne0Iyd');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a0', 'May', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Qs4nCiiaQ_mvKWPISQz98');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a1', 'Sun, The (Solntse)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Qs4nCiiaQ_mvKWPISQz98');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a2', 'Me Too (Yo, también)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo.', 'Qs4nCiiaQ_mvKWPISQz98');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a3', 'Promised Life, The (Vie promise, La)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'DJG4dwfCmrDTQf5TYwQBk');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a4', 'Open Season 2', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'DJG4dwfCmrDTQf5TYwQBk');
INSERT INTO post (id, title, `text`, author) values ('63604535fc13ae27150000a5', 'Tapeheads', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliques, Mauris lacinia sapien quis libero.', 'DJG4dwfCmrDTQf5TYwQBk');

create table user_follow
(
	user_from varchar(32) not null,
	user_to varchar(32) not null
);


create unique index user_follow_user_from_user_to_uindex
	on user_follow (user_from, user_to);

