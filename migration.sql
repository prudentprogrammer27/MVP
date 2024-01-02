DROP TABLE IF EXISTS stocks CASCADE;
DROP TABLE IF EXISTS prices CASCADE;




CREATE TABLE stocks (
    stock_id SERIAL PRIMARY KEY,
    stock_symbol VARCHAR, 
    company_name VARCHAR
);

CREATE TABLE prices (
    price_id SERIAL PRIMARY KEY,
    stock_id INT REFERENCES stocks(stock_id),
    date DATE,
    closing_price DECIMAL
);