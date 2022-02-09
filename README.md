# Backend project with node
Advanced backend with NodeJS course project.

## Build the images
```
docker compose build
```

## Run the containers
```
docker compose up -d
```

## Check status of the containers
```
docker compose ps
```

## Check logs for errors
```
docker compose logs
```


## Run migration script your mysql console
Use `migration.sql` file.


# Endpoints 

### Login
```
POST http://localhost/api/auth/login

JSON DATA {
	"username": "sbarenski2",
	"password": "notasafepassword"
}
```

### Users
**List:**
```
GET http://localhost/api/user
```
**Show:**
```
GET http://localhost/api/user/{id}
```
**Update:**
```
PUT http://localhost/api/user/{id}

JSON DATA
{
	"id": "2AgFbUWT5k2pgTjne0Iyd",
	"name": "Gustavo Martinez New",
	"username": "gustavomartinezenew",
	"password": "notasafepassword"
}
```
**Create:**
```
POST http://localhost/api/user/

JSON DATA
{
	"name": "Gustavo Martinez",
	"username": "gustavomartinez",
	"password": "notasafepassword"
}
```
