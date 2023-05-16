-- Active: 1683951615256@@127.0.0.1@3306@shopper
select SUM(p.sales_price * qty) from products as p
inner join packs as pa
on pa.product_id = p.code
where pa.pack_id = 1010;

SELECT * from products;

select * from packs;

select * from products
inner join packs
on products.code = packs.product_id;

SELECT user FROM mysql.user;