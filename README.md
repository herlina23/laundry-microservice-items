# Microservice-Items
## Endpoints

### Items (/api/v1/items)

#### Get all items
```bash
GET / 
# authorization: admin and kasir
# Return
# {
#   "create_date": "2019-02-26T13:24:41.412Z",
#   "_id": "5c753ee22781a3001722b19e",
#   "item_name": "sabun",
#   "unit": "kg",
#   "stock": 5.5,
#   "__v": 0
# }
```

#### Get an Item
```bash
GET /:id
# authorization: admin and kasir
```

#### Create an Item
```bash
POST /
# authorization: admin and kasir
# Request Sample
# {
#   "item": {
#       "item_name": "sabun",
#       "unit": "kg",
#       "stock": 5.5
#   }
# }
```

#### Update an Item
```bash
PUT /:id
# authorization: admin and kasir
```

#### Delete an Item
```bash
DELETE /:id
# authorization: admin and kasir
```

### ItemIns (/api/v1/itemins)

#### Get all itemins
```bash
GET / 
# authorization: admin and kasir
# Return
# {
#   "create_date": "2019-02-26T13:24:41.407Z",
#   "_id": "5c7541912781a3001722b1a1",
#   "item_name": "sabun",
#   "qty": 5,
#   "price": 15000,
#   "__v": 0
# }
```

#### Get an Itemins
```bash
GET /:id
# authorization: admin and kasir
```

#### Create an Itemins
```bash
POST /
# authorization: admin and kasir
# Request Sample
# {
#   "itemin": {
#       "item_name": "sabun",
#       "qty": 5,
#       "price": 15000
#   }
# }
```

#### Update an Itemins
```bash
PUT /:id
# authorization: admin and kasir
```

#### Delete an Itemins
```bash
DELETE /:id
# authorization: admin and kasir
```

### Itemouts (/api/v1/itemouts)

#### Get all itemouts
```bash
GET / 
# authorization: admin and kasir
# Return
# {
#   "_id": "5c7542e02781a3001722b1a2",
#   "item_name": "sabun",
#   "qty": 5,
#   "create_date": "2019-02-26T13:45:04.442Z",
#   "__v": 0
# }
```

#### Get an Itemout
```bash
GET /:id
# authorization: admin and kasir
```

#### Create an Itemout
```bash
POST /
# authorization: admin and kasir
# Request Sample
# {
#   "itemout": {
#       "item_name": "sabun",
#       "qty": 5
#   }
# }
```

#### Update an Itemout
```bash
PUT /:id
# authorization: admin and kasir
```

#### Delete an Itemout
```bash
DELETE /:id
# authorization: admin and kasir
```

### Outcomes (/api/v1/outcomes)

#### Get all Outcomes
```bash
GET / 
# authorization: admin and kasir
# Return
# {
#       "date": "2019-02-26T13:51:45.352Z",
#       "_id": "5c75447a98702521a070784d",
#       "outcome_name": "listrik",
#       "total": 550000,
#       "user": {
#           "create_date": "2019-02-25T07:45:00.043Z",
#           "_id": "5c739d960f64700ff05ed8ac",
#           "username": "admin",
#           "password": "$2a$10$OGS4haHAOFKMPj/Pw0Stl.cEgYZlvxyvAXMWlEBeA4r2DPcJLjsDC",
#           "role": "admin",
#           "__v": 0
#       },
#       "__v": 0
# }
```

#### Get an Outcome
```bash
GET /:id
# authorization: admin and kasir
```

#### Create an Outcome
```bash
POST /
# authorization: admin and kasir
# Request Sample
# {
#   "outcome": {
#       "outcome_name": "listrik",
#       "total": 550000
#   }
# }
```

#### Update an Outcome
```bash
PUT /:id
# authorization: admin and kasir
```

#### Delete an Outcome
```bash
DELETE /:id
# authorization: admin and kasir
```