SELECT city.city_id, city, customer.first_name, customer.last_name, email, address
FROM customer
JOIN address ON address.address_id = customer.address_id
JOIN city ON city.city_id = address.city_id
WHERE city.city_id = 312;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film_category
JOIN film ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "Comedy";

Select actor.actor_id, actor.first_name, actor.last_name, film.film_id, film.title, film.description, film.release_year
FROM film_actor
JOIN actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film_actor.actor_id = 5;

SELECT store.store_id, address.city_id, first_name, last_name, email, address
FROM customer
JOIN store ON customer.store_id = store.store_id
JOIN address ON customer.address_id = address.address_id
WHERE store.store_id = 1 AND (address.city_id = 1 OR address.city_id = 42 OR address.city_id = 312 OR address.city_id = 459);

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film_actor
JOIN film ON film_actor.film_id = film.film_id
WHERE film_actor.actor_id = 15 AND film.special_features LIKE "%Behind the Scenes" AND film.rating = "G";

SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name, actor.last_update
FROM film_actor
JOIN film ON film_actor.film_id = film.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, film.rental_rate, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99 AND category.name = "Drama"
ORDER BY film_id ASC;

SELECT film_actor.actor_id, actor.first_name, actor.last_name, film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film_actor
JOIN actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film_actor.actor_id = 23 AND category.name = "Action";

