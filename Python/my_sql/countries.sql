
SELECT name, language, percentage
FROM countries
JOIN languages
ON countries.code = languages.country_code
WHERE language = "Slovene"
ORDER BY percentage DESC;

SELECT countries.name AS name, COUNT(cities.name) AS cities
FROM countries
JOIN cities
ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY cities DESC;

SELECT name, population
FROM cities
WHERE country_code = "MEX"
ORDER BY population DESC;

SELECT name, language, percentage
FROM countries
JOIN languages
ON countries.code = languages.country_code
WHERE percentage > 89
ORDER BY percentage DESC;

SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital > 200 AND life_expectancy > 75;

SELECT countries.name, cities.name AS city, cities.district, cities.population
FROM countries
JOIN cities
WHERE countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population > 50000;

SELECT region, count(countries.region) AS countries
FROM countries
GROUP BY region
ORDER BY countries DESC;
