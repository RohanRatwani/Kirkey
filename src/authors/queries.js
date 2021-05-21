const getauthors = "with q1 as (select id,name from authors), q2 as (select books.id as id,author_id from books,q1 where q1.id = author_id) select q1.name,sum(item_price*quantity) as Sale_total from sale_items,q2,q1 where sale_items.book_id = q2.id and q1.id = q2.id group by q1.name order by Sale_total DESC limit 10 ";
const getauthorbyname = "select * from authors where name = $1";

module.exports = {
    getauthors,
    getauthorbyname
};