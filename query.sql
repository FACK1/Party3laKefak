insert into services (name) values ('Halls');
insert into services (name) values ('Food');
insert into services (name) values ('Dresses');

insert into users (name,password,email,facebook,phone_number,extra_information) values ('Ali','123','ali@gmail.com','Ali Ali','123456789','Hello');
insert into users (name,password,email,facebook,phone_number,extra_information) values ('Samer','123','samer@gmail.com','Samer Samer','123456789','Hi');
insert into users (name,password,email,facebook,phone_number,extra_information) values ('Sami','123','Sami@gmail.com','Sami SSS','123456789','Hello');

-- //insert service for hall
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Remas','Hebron','size 500 No','1500$','600,400','1','http://ktccs.com/banquet/img/arena.png',1);
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Farah','Hebron','size 500 No','1500$','600,400','1','http://www.solis-newlanka.com/images/2017/princess-banquet.jpg',1);
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Gloria','Hebron','size 500 No','1500$','600,400','1','http://www.srilankanexpeditions.com/accomadation_img/149613065839.jpg',1);

-- // insert service for dressess
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Ameera','Hebron','size S , M , L','1500$','600,400','3','https://179709-552377-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/oreasposa_2019ii.jpg',1);
-- //insert service to shose
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Gloria','Hebron','size 500 No','1500$','600,400','4','https://cdn-2.jjshouse.com/upimg/s237/b4/f6/dd8d9c98b7b5d00877c26481fea1b4f6.jpg',1);

-- // insert to food
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Gloria','Hebron','size 500 No','1500$','600,400','5','https://www.bbcgoodfood.com/sites/default/files/frances.jpg',1);

insert into media (name,image_url,"serviceDetailId") values ('Gloria1','http://ktccs.com/banquet/img/arena.png','3');
insert into media (name,image_url,"serviceDetailId") values ('Gloria2','http://www.solis-newlanka.com/images/2017/princess-banquet.jpg','3');
insert into media (name,image_url,"serviceDetailId") values ('Gloria3','http://www.srilankanexpeditions.com/accomadation_img/149613065839.jpg','2');
