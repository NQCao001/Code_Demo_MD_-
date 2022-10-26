create database demo_database;
use demo_database;
create table product(
                        id int not null primary key auto_increment,
                        names varchar(100),
                        price int not null,
                        description varchar(200)
);
use demo_database;
insert into product(id, names, price, description) values ()
select * from product;
use demo_database;
insert into product(names, price, description) values('cao',123,'dep zai');