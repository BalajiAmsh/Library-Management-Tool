create table libmember(
    id int(11) NOT NULL AUTO_INCREMENT ,
    name varchar(30) default '',
    email varchar(50) default '',
    password varchar(75) default '',
    status enum('A','IA') default 'A',
    role enum('Admin','Student') default 'Student',
    add_by varchar(22) default 'Library Admin' ,
    add_date datetime default now(),
    update_by varchar(22) default '',
    updated_date timestamp default now(),
    PRIMARY KEY(id),
    UNIQUE (email)
);








-- create table libmember(
--     id int(11) NOT NULL AUTO_INCREMENT ,
--     name varchar(30) default '',
--     email varchar(50) default '',
--     number varchar(13) default '0',
--     gender enum('Male','Female') default 'Male',
--     field varchar(23) default '',
--     status enum('A','IA') default 'A',
--     add_by varchar(22) default 'Mr.B' ,
--     add_date datetime default now(),
--     update_by varchar(22) default '',
--     updated_date timestamp default now(),
--     PRIMARY KEY(id)
-- );
