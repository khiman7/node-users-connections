# Node.js User connections REST API
Node.js Backend application with followers/following relation model

## Run the app using Docker

    docker-compose up --build

## Run the app
You will need a Node.js and MongoDB installed.

### Install dependecies
Install the dependencies in the local node_modules folder.

    npm install

    npm run seed

    npm start

## Data Seeding script
Generates the number of users and connections between them specified in the config file.

    npm run seed

# REST API
Implemented endpoints

## Get all Users

### Request
`GET /api/users`

### Response
```
[
  {
    "_id": "6154ed733bff591e9ed07e7f",
    "userId": 1,
    "name": "Eugenia",
    "surname": "Prause",
    "registered": "2014-11-13T19:54:11.170Z",
    "age": 31,
    "followed": [
      47,
      31
    ],
    "followers": [
      29,
      3,
      98,
      88,
      7,
      75
    ],
    "__v": 0
    },
  ...
]
```


## Get one User

### Request
`GET /api/users/:id`

### Response
```
{
  "_id": "6154ed733bff591e9ed07e8b",
  "userId": 7,
  "name": "Timeo",
  "surname": "Robin",
  "registered": "2018-01-16T14:31:38.723Z",
  "age": 44,
  "followed": [
    90,
    1,
    22
  ],
  "followers": [
    67,
    71,
    54
  ],
  "__v": 0
}
```

## Get User's friends count

### Request
`GET /api/friendscount/:id`

### Response
```
{
  "userId": 37,
  "friendsCount": 1
}
```

## Get the top Users with most followers

### Request
`GET /api/popular`

### Response
```
[
  {
    "_id": "6154ed733bff591e9ed07f33",
    "userId": 91,
    "name": "Valtteri",
    "surname": "Keranen",
    "registered": "2009-02-02T20:13:31.139Z",
    "age": 33,
    "followed": [
      37
    ],
    "followers": [
      34,
      13,
      45,
      73,
      56,
      41,
      37,
      8
    ],
    "__v": 0
  },
  {
    "_id": "6154ed733bff591e9ed07e85",
    "userId": 4,
    "name": "Célian",
    "surname": "Martin",
    "registered": "2003-05-21T20:11:27.899Z",
    "age": 53,
    "followed": [
      38,
      85,
      39,
      32
    ],
    "followers": [
      86,
      40,
      41,
      24,
      48,
      33,
      61
    ],
    "__v": 0
  },
  {
    "_id": "6154ed733bff591e9ed07f2f",
    "userId": 89,
    "name": "Helmi",
    "surname": "Rautio",
    "registered": "2014-04-13T03:04:07.520Z",
    "age": 32,
    "followed": [],
    "followers": [
      85,
      77,
      62,
      58,
      51,
      53,
      9
    ],
    "__v": 0
  }
]
```
