create table book_data(
    id int(11) NOT NULL AUTO_INCREMENT ,
    name varchar(250) default '',
    book_no varchar(75) default '',
    category varchar(75) default '',
    Author_name varchar(75) default '',
    book_price int(12) default '0',
    image_name varchar(250) default '',
    book_image_path varchar(250) default '',
    imageURL varchar(250) default '',
    status enum('A','IA') default 'A',
    add_by varchar(22) default 'Library Admin' ,
    add_date datetime default now(),
    update_by varchar(22) default '',
    updated_date timestamp default now(),
    PRIMARY KEY(id)
);



-- updated_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP