## Setup
- In root of the project, add polygon api key at line 18 and 24 in [docker-compose.yml](https://github.com/intelligentCoding/phaze/blob/main/docker-compose.yml).
- run **docker-compose up** in the root of project. (This is assuming you have docker installed in your mechine).

## APIs
There are two apis that can be accessed with a jwt token. If calling from **Postman**, in **headers** tab add **authorization** key and it's value should be the token provided. 
- http://localhost:3999/crypto/sma
- http://localhost:3999/stocks/vwap
