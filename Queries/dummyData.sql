insert into users
values (1001,'xyz apt','abc@gmail.com','Sam John','Male',8976543221,'abcd1234','sam');

insert into users
values (1002,'abc street','xyz@gmail.com','Aravind S','Male',8976543221,'abcd1234','aravind');

insert into users
values (1003,'abc,xyz lane','aravinds@gmail.com','Harold S','Male',8876443221,'abcd1234','harry');

insert into users
values (1004,'103,tyu nagar','lukak@gmail.com','lukaku','Male',8999543220,'abcd1234','lukak');

insert into users
values (1005,'abc lane,ghj nagar','scarlet@gmail.com','Scarlet J','Female',8176534202,'abcd1234','scarjo');

insert into users
values (1006,'fgh apt,cgf nagar','Katy@gmail.com','Katy P','Female',8176534202,'abcd1234','kate');

/*orders*/
/*

insert into orders 
values ('2024-01-26',1,2345.5,1001,'Shipped');

insert into orders 
values ('2024-01-26',2,3001,1002,'Delivered');

insert into orders 
values ('2024-02-16',3,1004,1003,'Out for delivery');

insert into orders 
values ('2024-03-16',4,5432.5,1004,'Placed');

insert into orders 
values ('2024-01-22',5,987,1005,'Shipped');

insert into orders 
values ('2024-01-01',6,4592.5,1006,'Shipped');
*/

/*categories*/
insert into categories 
values (001,'SALE!!','Explore our men’s category for the latest in fashion, accessories, and footwear. Quality and style for every occasion.','https://cdn.shopify.com/s/files/1/0071/7406/2170/files/menswearblog_1024x1024.jpg?v=1585560223','Men');

insert into categories 
values (002,'TRENDING!','Dive into our women’s category for the newest in fashion, accessories, and footwear. Elegance and quality for every moment.','https://img.freepik.com/free-photo/inspired-young-lady-summer-accessories-enjoying-photoshoot_197531-7455.jpg?w=360','Women');

insert into categories 
values (003,'NEW','Browse our unisex category for fashion, accessories, and footwear designed for everyone. Versatility and quality for all. Fashion has no boundaries in our store!','https://i.shgcdn.com/0b2fa41f-8c2e-4157-8b29-6822fbbf28b5/-/format/auto/-/preview/3000x3000/-/quality/lighter/','Unisex');


-- new products
-- MENS

insert into products values (10, 001, 999, 4001,'https://cdn.thewirecutter.com/wp-content/media/2022/01/buttonupshirts-2048px-DSCF0679-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5', 'Timeless and versatile, this crisp white button-up shirt is perfect for both formal and casual occasions.', 'White Button-Up Shirt');

insert into products values (75, 001, 1499, 4002,'https://media.gettyimages.com/id/173239968/photo/skinny-tight-blue-jeans-on-white-background.webp?s=1024x1024&w=gi&k=20&c=zuvymKMD0lR4G5FsfVaMO6EAM2Wm85TR0vQdqnSD7Sc=', 'These slim fit blue jeans feature a modern silhouette that''s flattering and comfortable. Crafted from premium denim with a hint of stretch for ease of movement.', 'Blue Jeans');

insert into products values (100,001, 799, 4003,'https://media.gettyimages.com/id/1175109854/photo/smiling-man-using-tablet-in-a-factory.webp?s=1024x1024&w=gi&k=20&c=yiYv8VMTmrlLHNqG-AQoLakCNvwYnJfwiANjOQSY2oA=', 'Elevate your casual wardrobe with our classic polo t-shirt. it''s made from soft cotton fabric for all-day comfort.', 'Polo T-Shirt');

insert into products values (30, 001, 2999, 4004,'https://media.gettyimages.com/id/1425640652/photo/fashion-model-portrait-sexy-young-man-with-hands-in-pocket-and-studio-on-grey-background.webp?s=612x612&w=gi&k=20&c=kV71iJUBaZzePAHUWFbTHhCkFjf-LZX6gkfaryFqMzQ=', 'Look sharp and sophisticated in our tailored suit jacket. Expertly crafted with fine details and a slim fit silhouette , it''s perfect for formal events or professional settings.', 'Tailored Suit Jacket');

insert into products values (80, 001, 599, 4005,'https://media.gettyimages.com/id/1032967372/photo/rolled-up-brown-belt.webp?s=1024x1024&w=gi&k=20&c=UcEQ1k2rZ1YJGh8_SxKxJUO47yKb1iiRUvbC1lP2150=', 'Complete your look with our genuine leather belt featuring a stylish buckle. Classic and durable, it''s a versatile accessory that adds a touch of refinement to any outfit.', 'Leather Belt');

insert into products values (60, 001, 1299, 4006,'https://media.gettyimages.com/id/1364854370/photo/street-style-day-2-milan-mens-fashion-week-fall-winter-2022-2023.webp?s=1024x1024&w=gi&k=20&c=oXVY6PWx1ACiSiu8kMQaSRunK66VSt4QtfBZLwvM0aI=', 'Stay cozy and stylish in our classic crew neck sweater. Made from soft knit fabric, it''s perfect for layering or wearing on its own during cooler days.', 'Crew Neck Sweater');

insert into products values (40, 001, 1999, 4007,'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/1/9/l/xxl-no-pkr22-darkgrey-pkr-sports-original-imaghv9ujn7vqfx7.jpeg?q=70&crop=false', ' Hit the gym or the streets in style with our sleek sports jacket. Lightweight and breathable, it features moisture-wicking technology to keep you dry and comfortable during workouts.', 'Sports Jacket');

insert into products values (90, 001, 899, 4008,'https://contents.mediadecathlon.com/p2137351/348eebdd745c6f2531cf465fe8dd91a1/p2137351.jpg?format=auto&quality=70&f=650x0', 'Stay cool and comfortable in our cargo shorts. With plenty of pockets for storage and a relaxed fit design, they''re perfect for outdoor adventures or casual weekends.', 'Cargo Shorts');

insert into products values (120, 001, 699, 4009,'https://media.gettyimages.com/id/1502145096/photo/street-style-paris-fashion-week-menswear-spring-summer-2024-day-six.webp?s=1024x1024&w=gi&k=20&c=E6INNnfYMVoIDh6NSaRuhFx5QVO5U6NlpmDlQp_47hM=', 'Make a statement with our graphic print t-shirt. Featuring bold designs and vibrant colors, it''s made from soft cotton fabric for a comfortable fit.', 'Graphic Print T-Shirt');

insert into products values (55, 001, 2499, 4010,'https://media.gettyimages.com/id/1156256597/photo/a-mixed-race-millennial-male-dances-with-his-headphones-on-in-front-of-a-new-york-city.webp?s=1024x1024&w=gi&k=20&c=eXilj6mzAqpID8btUQz1FKd15CcxB4N1PAqVQEHjykg=', ' Add a touch of rugged style to your wardrobe with our classic denim jacket. Timeless and versatile, it''s perfect for layering over your favorite t-shirts or hoodies.', 'Denim Jacket');


-- women

insert into products values (65, 002, 1999, 5001,'https://www.voyclothing.com/cdn/shop/products/voy-dress-black.jpg_2.jpg?v=1600095302','Every woman needs a little black dress in her wardrobe. Timeless and elegant.',  'Little Black Dress');

insert into products values (80, 002, 1599, 5002,'https://media.gettyimages.com/id/1205159414/photo/celebrity-sightings-in-los-angeles-march-04-2020.webp?s=1024x1024&w=gi&k=20&c=Ait7zYJb8XpHFVWl9UpDU5cSF3NuCY8RSK-Uu__PsO8=', 'Flaunt your curves in our high-waisted skinny jeans. Designed to hug your figure in all the right places.' , 'High-Waisted Skinny Jeans');

insert into products values (90, 002, 899, 5003,'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67077927_05.jpg?imwidth=480&imdensity=1&ts=1712826270733', 'Add a pop of color to your wardrobe with our floral print blouse. Made from lightweight fabric with a relaxed fit.', 'Floral Print Blouse');

insert into products values (50, 002, 1299, 5004,'https://media.gettyimages.com/id/1365030696/photo/street-style-day-3-milan-mens-fashion-week-fall-winter-2022-2023.webp?s=1024x1024&w=gi&k=20&c=OFQgASOWp84dkdxllLVJhBwdQnupcbTEB47ZCRVWeig=', 'Channel retro vibes with our A-line skirt. Flattering and versatile.', 'A-Line Skirt');

insert into products values (70, 002, 2199, 5005,'https://media.gettyimages.com/id/1399310599/photo/street-style-dusseldorf-may-2022.webp?s=1024x1024&w=gi&k=20&c=nNle7eVueAKSOWNJauLiAhA1IbKGSSP2DcmESeYYR6o=', 'Embrace effortless elegance with our maxi dress. Featuring a flowy silhouette and feminine details.', 'Maxi Dress');

insert into products values (85, 002, 799, 5006,'https://teev.in/cdn/shop/files/62F373D8-550F-41F1-ABF0-0AF46C526EE9_b0869750-db2b-4868-ad74-1a480fded5d5.jpg?v=1709660028', 'Elevate your everyday look with our wrap top. Made from soft and stretchy fabric.', 'Wrap Top' );

insert into products values (100, 002, 599, 5007,'https://media.gettyimages.com/id/1207679592/photo/february-20th-milan-fashion-week-fall-winter-2020-2021.webp?s=1024x1024&w=gi&k=20&c=qkIsaFzJj8PTnBSINlt5u3_xuzYaoaH-gxjHXx6Nv7Y=', 'Stay comfortable and stylish with our leggings', 'Leggings');

insert into products values (60, 002, 899, 5008,'https://www.heuritech.com/wp-content/uploads/2021/11/Hope-Macaulay-1277x1536.jpg', 'Layer up in style with our cozy cardigan sweater. Perfect for chilly days.', 'Cardigan Sweater' );

insert into products values (45, 002, 1499, 5009,'https://media.gettyimages.com/id/1253229625/photo/street-style-berlin-june-27-2020.webp?s=1024x1024&w=gi&k=20&c=qb-mI2YiJ8-dnLjsVgA9Ir8wQeEV7iH_cCfRhEmFRbM=', 'Transition seamlessly from day to night with our midi skirt. Versatile and chic.', 'Midi Skirt');

insert into products values (55, '002', 999, 5010,'https://street9.com/cdn/shop/products/TOP00003451_1.jpg?v=1667648699', 'Add a touch of femininity to your wardrobe with our peplum top. Featuring a flared silhouette.', 'Peplum Top');


-- Unisex

insert into products values (70, 003, 1299, 6001,'https://images.bestsellerclothing.in/data/only/26-sep-2023/283106504_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto', 'Stay cozy and comfortable in our hooded sweatshirt. Made from soft fleece fabric.', 'Hooded Sweatshirt');

insert into products values (100, 003, 499, 6002,'https://www.hollywoodreporter.com/wp-content/uploads/2022/09/best-womens-tees-fall-2022.jpg?w=1296&h=730&crop=1&resize=681%2C383', 'Stock up on essentials with our basic t-shirt. Available in neutral colors.', 'Basic T-Shirt');

insert into products values (120, 003, 1599, 6003,'https://media.gettyimages.com/id/1239483394/photo/celebrity-sightings-in-los-angeles-march-24-2022.webp?s=1024x1024&w=gi&k=20&c=XMBhpsATxxw9VBw_NE5XTz7Q-icTjEyjo5XaCLjthAw=', 'Keep it classic with our denim jeans. Designed for both style and comfort.', 'Denim Jeans');

insert into products values (50, 003, 2499, 6004,'https://media.gettyimages.com/id/1485754375/photo/street-style-in-paris-april-26th-2023.webp?s=1024x1024&w=gi&k=20&c=QcaUi5I5QsFO4RNKk-j0u9hjG8noNb05AyExnI4o4D4=', 'Add a touch of edge to your look with our bomber jacket. Featuring a sleek design.', 'Bomber Jacket');

insert into products values (85, 003, 899, 6005,'https://media.gettyimages.com/id/1432499399/photo/george-clooney-at-event.webp?s=1024x1024&w=gi&k=20&c=P5qeNF2aw_L4uGq08ZEy3n5ab_5BxVeSDqbrnAMsZtk=', 'Stay cozy and stylish in our flannel shirt. Made from soft cotton fabric with a classic plaid pattern.', 'Flannel Shirt');

insert into products values (110, 003, 1199, 6006,'https://media.gettyimages.com/id/1448587740/photo/le-raphia-jacquemus-show-photocall-at-le-bourget.webp?s=1024x1024&w=gi&k=20&c=yLUiGR-_QNXSafaD-0i0OocsgHtWTpag7rbrM-N_nqY=', 'Stay comfortable and on-trend with our jogger pants. Featuring a relaxed fit and elasticized cuffs.', 'Jogger Pants');

insert into products values (40, 003, 1799, 6007, 'https://media.gettyimages.com/id/1326396248/photo/street-style-jacquemus-la-montagne-show.webp?s=1024x1024&w=gi&k=20&c=SvA8FC9lg4ttTK45MB5ybx1b4PC5NnM2ZQjkatrdIqk=', 'Brave the elements in our windbreaker jacket. Lightweight and water-resistant.', 'Windbreaker Jacket');

insert into products values (75, 003, 1399, 6008, 'https://i.etsystatic.com/30590553/r/il/95b95e/3618442315/il_794xN.3618442315_gfqv.jpg', 'Make a statement with our graphic hoodie. Featuring bold designs and cozy fleece fabric.', 'Graphic Hoodie');

insert into products values (60, 003, 1499, 6009, 'https://media.glamour.com/photos/5dc31e50be7efa0009f70078/master/w_1280,c_limit/GettyImages-1178276445.jpg', 'Stay cozy and chic in our oversized sweater. Made from soft knit fabric with a relaxed fit.', 'Oversized Sweater');

insert into products values (90, 003, 499, 6010, 'https://static01.nyt.com/images/2015/04/05/magazine/05onclothing_ss-slide-VSJX/05onclothing_ss-slide-VSJX-jumbo-v2.jpg?quality=75&auto=webp', 'Top off your casual look with our baseball cap. Made from durable cotton twill with an adjustable strap.', 'Baseball Cap');












-- /*products*/
-- insert into products
-- values (100,001,450,4001,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','gg','M-Pants');

-- insert into products
-- values (250,001,245,4002,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','M-Shirts');

-- insert into products
-- values (50,002,600,4003,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','gg','F-Shirts');

-- insert into products
-- values (42,002,654,4004,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','F-Pants');

-- insert into products
-- values (160,001,460.5,4005,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','M-Shorts');

-- insert into products
-- values (36,002,650.5,4006,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','F-Shorts');

-- insert into products
-- values (100,003,1200,4007,'https://i5.walmartimages.com/asr/74b3ea98-ed21-445d-970a-e4f960e95533.634c25c0bf9f108869945b1fb86ddb7e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF','Winter-Wear');

/*order_details*/
/*
insert into order_details
values (1,1,4004,3);

insert into order_details
values (2,1,4003,1);

insert into order_details
values (3,1,4001,2);

insert into order_details
values (4,2,4002,1);

insert into order_details
values (5,3,4001,5);

insert into order_details
values (6,4,4002,3);

insert into order_details
values (7,5,4004,6);

insert into order_details
values (8,5,4003,2);

insert into order_details
values (9,6,4002,1);

insert into order_details
values (10,6,4004,8);
*/


/*cart*/

-- insert into cart
-- values(1,4001,1,1001);

-- insert into cart
-- values(2,4002,2,1001);

-- insert into cart
-- values(3,4003,2,1001);

-- insert into cart
-- values(4,4007,3,1001);



-- insert into cart
-- values(3,4004,4,1002);

-- insert into cart
-- values(2,4002,2,1001);



-- insert into cart
-- values(3,4003,2,1001);

-- insert into cart
-- values(1,4004,4,1001);

-- insert into cart
-- values(2,4002,2,1001);

-- insert into cart
-- values(3,4003,2,1001);






