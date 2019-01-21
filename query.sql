insert into services (name) values ('Halls');
insert into services (name) values ('Food');
insert into services (name) values ('Dresses');

insert into users (name,password,email,facebook,phone_number,extra_information) values ('Ali','123','ali@gmail.com','Ali Ali','123456789','Hello');
insert into users (name,password,email,facebook,phone_number,extra_information) values ('Samer','123','samer@gmail.com','Samer Samer','123456789','Hi');
insert into users (name,password,email,facebook,phone_number,extra_information) values ('Sami','123','Sami@gmail.com','Sami SSS','123456789','Hello');

insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Remas','Hebron','size 500 No','1500$','600,400','1','http://ktccs.com/banquet/img/arena.png',1);
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Farah','Hebron','size 500 No','1500$','600,400','1','http://www.solis-newlanka.com/images/2017/princess-banquet.jpg',1);
insert into service_details(name,location,description,price,map_loc,"serviceId",image_url,"userId") values ('Gloria','Hebron','size 500 No','1500$','600,400','1','http://www.srilankanexpeditions.com/accomadation_img/149613065839.jpg',1);

insert into media (name,image_url,"serviceDetailId") values ('Gloria1','http://ktccs.com/banquet/img/arena.png','3');
insert into media (name,image_url,"serviceDetailId") values ('Gloria2','http://www.solis-newlanka.com/images/2017/princess-banquet.jpg','3');
insert into media (name,image_url,"serviceDetailId") values ('Gloria3','http://www.srilankanexpeditions.com/accomadation_img/149613065839.jpg','2');
