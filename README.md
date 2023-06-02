## Personal Portfolio

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)

#

### Prerequisites

- <img src="./logos/nodejs.png" width="25" style="top: 8px" /> Node JS @16.X and up
- <img src="./logos/npm.png" width="25" style="top: 8px" /> npm @8 and up


#

### Tech Stack

- <img src="./logos/npm.png" width="25" style="top: 8px" /> body-parser @ 1.20.0 - Node.js body parsing middleware
- <img src="./logos/dotenv.png" width="25" style="top: 8px" /> dotenv @ 16.0.3 - zero-dependency module that loads environment variables from a .env file
- <img src="./logos/express.png" width="25" style="top: 8px" /> express @ 4.18.2 - web framework for node
- <img src="./logos/mongoDB.png" width="25" style="top: 8px" /> mongodb @ 4.13.0 - document database
- <img src="./logos/mongoose.png" width="25" style="top: 8px" /> mongoose @ 6.9.1 - MongoDB object modeling tool
- <img src="./logos/Swagger-logo.png" width="25" style="top: 8px" /> swagger @ 4.6.0 - module provides tools for designing and building Swagger-compliant APIs entirely in Node.js

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/Tusho7/personal-portfolio-api
```

2. Next step requires install all the dependencies.

```
npm install
```

3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```

4. To create your own database, need to create new local connection, host would be localhost.
   also you need to replace variables values in .env file, or you can generate mongo atlas url with user and password

#

### Project Structure

```
|--- src
|   |--- config # configuration files
|   |---|--- mongo.js # perform mongoDb connection
|   |---|--- swagger.yaml # swagger configuration file
|   |--- controllers # functions for routes
|   |--- middlewares # extra helper middleware functions
|   |---|--- swagger-middleware.js # function to build and serve swagger
|   |--- models # mongoose models for mongoDb
|   |--- routes # project routes
|   |--- server.js # main file
- package.json # dependency manager configurations
```