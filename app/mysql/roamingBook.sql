create table roamingBook(
    memberId INT(11) NOT NULL AUTO_INCREMENT ,
    memberEmail VARCHAR(50) DEFAULT '',
    memberName VARCHAR(50) DEFAULT '',
    bookId INT(11)  NOT NULL DEFAULT '0',
    bookName VARCHAR(250) DEFAULT '',
    returnStatus ENUM('pending','notpending') DEFAULT 'notpending',
    takenDate DATETIME,
    returnDate DATETIME ,
    status ENUM('A','IA') DEFAULT 'A',
    add_by VARCHAR(22) DEFAULT 'Library Admin' ,
    add_date DATETIME DEFAULT NOW(),
    update_by VARCHAR(22) DEFAULT '',
    updated_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(memberId),
    UNIQUE (memberEmail)
);