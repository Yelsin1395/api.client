CREATE DATABASE client

CREATE TABLE dboClients (
  id TEXT PRIMARY KEY,
  image_url TEXT NULL,
  name VARCHAR(40) NOT NULL,
  surname VARCHAR(40) NOT NULL,
  age INTEGER NOT NULL,
  date_of_birth DATE NOT NULL
);

INSERT INTO dboClients (image_url, name, surname, date_of_birth) VALUES
  ('https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?cs=srgb&dl=pexels-george-dolgikh-giftpunditscom-1310522.jpg&fm=jpg', 'Luda', 'Mesoria Martinez', 30, '1999/01/08');