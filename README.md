
# Welcome to CastleBnb

CastleBnb is a website that provides luxury house for users to book and review. The user can also create a spot, manage spots, reviews and share their thoughts.  
Spot and review managements are full CRUD. And the discussion feathure is written by Websocket tech.

## Live Link

🏰 [CastleBnb](https://castlebnb-websocket-project.onrender.com/)

## Tech Stack
**Frameworks and Libraries:**     
[![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)](https://nodejs.org/en)
[![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/-Redux-black?style=for-the-badge&logo=redux)](https://redux.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Html5](https://img.shields.io/badge/-Html5-black?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/-CSS3-black?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)        
[![Websocket](https://img.shields.io/badge/Socket.io-4.1.3-010101??style=flat-square&logo=Socket.io&logoColor=white)](https://www.npmjs.com/package/ws#sending-and-receiving-text-data)


## Vue-Example Code Link        

![vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)          

🏰 [vue-code-example](https://github.com/miaohua897/CastleBnB_Websocket_project/tree/vue-frontend) 
    
🏰 [vue-live-link] (https://castlebnb-vue.onrender.com)     


## Angular-Example Code Link        

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)          

🏰 [Angular-code-example](https://github.com/miaohua897/CastleBnB_Websocket_project/tree/angular-frontend)   
    
🏰 [Angular-live-link] (https://castlebnb-angular.onrender.com/)    

<!-- **Database:**     
[![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white)](https://sequelize.org/)

**Hosting:**    
[![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)


## Index
[Database-Scheme](https://github.com/miaohua897/CastleBnb/wiki/Database-Schema#schema) |
[Feature List](https://github.com/miaohua897/CastleBnb/wiki/Features) |
[User Stores](https://github.com/miaohua897/CastleBnb/wiki/User-Stories) | -->

## Landing Page  

<img width="1339" height="684" alt="Screenshot 2025-07-26 at 6 01 09 PM" src="https://github.com/user-attachments/assets/853a5175-401d-47b9-a0a0-ce3b1bcd58e9" />  

## Discussion 

<img width="1340" alt="Screenshot 2025-03-19 at 3 35 11 PM" src="https://github.com/user-attachments/assets/882fb2d4-5715-401f-b211-1f2bca181c11" />   

## Spot Detail

<img width="1315" height="716" alt="Screenshot 2025-07-26 at 6 03 56 PM" src="https://github.com/user-attachments/assets/9e582201-162f-4e18-888d-e53899a824a3" />   

## Spot Management   

<img width="1350" height="524" alt="Screenshot 2025-07-26 at 6 05 27 PM" src="https://github.com/user-attachments/assets/5ece6b80-34a7-495e-98b9-de9395689164" />   

## Reviews Management

<img width="1372" alt="Screenshot 2025-03-19 at 3 44 20 PM" src="https://github.com/user-attachments/assets/15fd33cc-964b-49a6-9f94-42c53970ecd7" />    




------------------------------------------------------------------------------------------------------------


## API Documentation

API Documentation

USER AUTHENTICATION/AUTHORIZATION

All endpoints that require authentication

All endpoints that require a current user to be logged in.

Request: endpoints that require authentication
Error Response: Require authentication
Status Code: 401

Headers:

Content-Type: application/json
Body:
```json
{ 
  "message": "Authentication required" 
}

```
All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the correct role(s) or permission(s).

Request: endpoints that require proper authorization
Error Response: Require proper authorization
Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Forbidden"
}
```
Get the Current User

Returns the information about the current user that is logged in.

Require Authentication: false

Request

Method: GET
Route path: /api/session
Body: none
Successful Response when there is a logged in user

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@gmail.com",
    "username": "JohnSmith"
  }
}
```
Successful Response when there is no logged in user

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "user": null
}
```
Log In a User

Logs in a current user with valid credentials and returns the current user's information.

Require Authentication: false

Request

Method: POST

Route path: /api/session

Headers:

Content-Type: application/json
Body:
```json
{
  "credential": "john.smith@gmail.com",
  "password": "secret password"
}
```
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@gmail.com",
    "username": "JohnSmith"
  }
}
```
Error Response: Invalid credentials

Status Code: 401

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Invalid credentials"
}
```
Error response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "credential": "Email or username is required",
    "password": "Password is required"
  }
}
```
Sign Up a User

Creates a new user, logs them in as the current user, and returns the current user's information.

Require Authentication: false

Request

Method: POST

Route path: /api/users

Headers:

Content-Type: application/json
Body:
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "username": "JohnSmith",
  "password": "secret password"
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@gmail.com",
    "username": "JohnSmith"
  }
}
```
Error response: User already exists with the specified email or username

Status Code: 500

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "User already exists",
  "errors": {
    "email": "User with that email already exists",
    "username": "User with that username already exists"
  }
}
```
Error response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "email": "Invalid email",
    "username": "Username is required",
    "firstName": "First Name is required",
    "lastName": "Last Name is required"
  }
}
```

SPOTS

Get all Spots

Returns all the spots.

Require Authentication: false

Request

Method: GET
Route path: /api/spots
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Spots": [
    {
      "id": 1,
      "ownerId": 1,
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "avgRating": 4.5,
      "previewImage": "image url"
    }
  ]
}
```
Get all Spots owned by the Current User

Returns all the spots owned (created) by the current user.

Require Authentication: true

Request

Method: GET
Route path: /api/spots/current
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Spots": [
    {
      "id": 1,
      "ownerId": 1,
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "avgRating": 4.5,
      "previewImage": "image url"
    }
  ]
}
```
Get details of a Spot from an id

Returns the details of a spot specified by its id.

Require Authentication: false

Request

Method: GET
Route path: /api/spots/:spotId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36" ,
  "numReviews": 5,
  "avgStarRating": 4.5,
  "SpotImages": [
    {
      "id": 1,
      "url": "image url",
      "preview": true
    },
    {
      "id": 2,
      "url": "image url",
      "preview": false
    }
  ],
  "Owner": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith"
  }
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Create a Spot

Creates and returns a new spot.

Require Authentication: true

Request

Method: POST

Route path: /api/spots

Headers:

Content-Type: application/json
Body:
```json
{
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```
Error Response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "address": "Street address is required",
    "city": "City is required",
    "state": "State is required",
    "country": "Country is required",
    "lat": "Latitude must be within -90 and 90",
    "lng": "Longitude must be within -180 and 180",
    "name": "Name must be less than 50 characters",
    "description": "Description is required",
    "price": "Price per day must be a positive number"
  }
}
```
Add an Image to a Spot based on the Spot's id

Create and return a new image for a spot specified by id.

Require Authentication: true

Require proper authorization: Spot must belong to the current user

Request

Method: POST

Route path: /api/spots/:spotId/images

Headers:

Content-Type: application/json
Body:
```json
{
  "url": "image url",
  "preview": true
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "url": "image url",
  "preview": true
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Edit a Spot

Updates and returns an existing spot.

Require Authentication: true

Require proper authorization: Spot must belong to the current user

Request

Method: PUT

Route path: /api/spots/:spotId

Headers:

Content-Type: application/json
Body:
```json
{
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123
}
```
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```
Error Response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "address": "Street address is required",
    "city": "City is required",
    "state": "State is required",
    "country": "Country is required",
    "lat": "Latitude must be within -90 and 90",
    "lng": "Longitude must be within -180 and 180",
    "name": "Name must be less than 50 characters",
    "description": "Description is required",
    "price": "Price per day must be a positive number"
  }
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Delete a Spot

Deletes an existing spot.

Require Authentication: true

Require proper authorization: Spot must belong to the current user

Request

Method: DELETE
Route path: /api/spots/:spotId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Successfully deleted"
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
REVIEWS

Get all Reviews of the Current User

Returns all the reviews written by the current user.

Require Authentication: true

Request

Method: GET
Route path: /api/reviews/current
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
``` json
{
  "Reviews": [
    {
      "id": 1,
      "userId": 1,
      "spotId": 1,
      "review": "This was an awesome spot!",
      "stars": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "User": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith"
      },
      "Spot": {
        "id": 1,
        "ownerId": 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "price": 123,
        "previewImage": "image url"
      },
      "ReviewImages": [
        {
          "id": 1,
          "url": "image url"
        }
      ]
    }
  ]
}
```

Get all Reviews by a Spot's id

Returns all the reviews that belong to a spot specified by id.

Require Authentication: false

Request

Method: GET
Route path: /api/spots/:spotId/reviews
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Reviews": [
    {
      "id": 1,
      "userId": 1,
      "spotId": 1,
      "review": "This was an awesome spot!",
      "stars": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "User": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith"
      },
      "ReviewImages": [
        {
          "id": 1,
          "url": "image url"
        }
      ],
    }
  ]
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Create a Review for a Spot based on the Spot's id

Create and return a new review for a spot specified by id.

Require Authentication: true

Request

Method: POST

Route path: /api/spots/:spotId/reviews

Headers:

Content-Type: application/json
Body:
```json
{
  "review": "This was an awesome spot!",
  "stars": 5,
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "userId": 1,
  "spotId": 1,
  "review": "This was an awesome spot!",
  "stars": 5,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```
Error Response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "review": "Review text is required",
    "stars": "Stars must be an integer from 1 to 5",
  }
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Error response: Review from the current user already exists for the Spot

Status Code: 500

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "User already has a review for this spot"
}
```
Add an Image to a Review based on the Review's id

Create and return a new image for a review specified by id.

Require Authentication: true

Require proper authorization: Review must belong to the current user

Request

Method: POST

Route path: /api/reviews/:reviewId/images

Headers:

Content-Type: application/json
Body:
```json
{
  "url": "image url"
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "url": "image url"
}
```
Error response: Couldn't find a Review with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Review couldn't be found"
}
```
Error response: Cannot add any more images because there is a maximum of 10 images per resource

Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Maximum number of images for this resource was reached"
}
```
Edit a Review

Update and return an existing review.

Require Authentication: true

Require proper authorization: Review must belong to the current user

Request

Method: PUT

Route path: /api/reviews/:reviewId

Headers:

Content-Type: application/json
Body:
```json
{
  "review": "This was an awesome spot!",
  "stars": 5,
}
```
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "userId": 1,
  "spotId": 1,
  "review": "This was an awesome spot!",
  "stars": 5,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```
Error Response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "review": "Review text is required",
    "stars": "Stars must be an integer from 1 to 5",
  }
}
```
Error response: Couldn't find a Review with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Review couldn't be found"
}
```
Delete a Review

Delete an existing review.

Require Authentication: true

Require proper authorization: Review must belong to the current user

Request

Method: DELETE
Route path: /api/reviews/:reviewId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
``` json
{
  "message": "Successfully deleted"
}
```
Error response: Couldn't find a Review with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
``` json
{
  "message": "Review couldn't be found"
}
```
BOOKINGS

Get all of the Current User's Bookings

Return all the bookings that the current user has made.

Require Authentication: true

Request

Method: GET
Route path: /api/bookings/current
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
``` json
{
  "Bookings": [
    {
      "id": 1,
      "spotId": 1,
      "Spot": {
        "id": 1,
        "ownerId": 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "price": 123,
        "previewImage": "image url"
      },
      "userId": 2,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
  ]
}
```

Get all Bookings for a Spot based on the Spot's id

Return all the bookings for a spot specified by id.

Require Authentication: true

Request

Method: GET
Route path: /api/spots/:spotId/bookings
Body: none
Successful Response: If you ARE NOT the owner of the spot.

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Bookings": [
    {
      "spotId": 1,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20"
    }
  ]
}
```
Successful Response: If you ARE the owner of the spot.

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Bookings": [
    {
      "User": {
        "id": 2,
        "firstName": "John",
        "lastName": "Smith"
      },
      "id": 1,
      "spotId": 1,
      "userId": 2,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
  ]
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Create a Booking from a Spot based on the Spot's id

Create and return a new booking from a spot specified by id.

Require Authentication: true

Require proper authorization: Spot must NOT belong to the current user

Request

Method: POST

Route path: /api/spots/:spotId/bookings

Headers:

Content-Type: application/json
Body:
```json
{
  "startDate": "2021-11-19",
  "endDate": "2021-11-20"
}
```
Successful Response

Status Code: 201

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "spotId": 1,
  "userId": 2,
  "startDate": "2021-11-19",
  "endDate": "2021-11-20",
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```
Error response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "startDate": "startDate cannot be in the past",
    "endDate": "endDate cannot be on or before startDate"
  }
}
```
Error response: Couldn't find a Spot with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot couldn't be found"
}
```
Error response: Booking conflict

Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Sorry, this spot is already booked for the specified dates",
  "errors": {
    "startDate": "Start date conflicts with an existing booking",
    "endDate": "End date conflicts with an existing booking"
  }
}
```
Edit a Booking

Update and return an existing booking.

Require Authentication: true

Require proper authorization: Booking must belong to the current user

Request

Method: PUT

Route path: /api/bookings/:bookingId

Headers:

Content-Type: application/json
Body:
```json
{
  "startDate": "2021-11-19",
  "endDate": "2021-11-20"
}
```
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "id": 1,
  "spotId": 1,
  "userId": 2,
  "startDate": "2021-11-19",
  "endDate": "2021-11-20",
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```
Error response: Body validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "startDate": "startDate cannot be in the past",
    "endDate": "endDate cannot be on or before startDate"
  }
}
```
Error response: Couldn't find a Booking with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Booking couldn't be found"
}
```
Error response: Can't edit a booking that's past the end date

Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Past bookings can't be modified"
}
```
Error response: Booking conflict

Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Sorry, this spot is already booked for the specified dates",
  "errors": {
    "startDate": "Start date conflicts with an existing booking",
    "endDate": "End date conflicts with an existing booking"
  }
}
```
Delete a Booking

Delete an existing booking.

Require Authentication: true

Require proper authorization: Booking must belong to the current user or the Spot must belong to the current user

Request

Method: DELETE
Route path: /api/bookings/:bookingId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Successfully deleted"
}
```
Error response: Couldn't find a Booking with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Booking couldn't be found"
}
```
Error response: Bookings that have been started can't be deleted

Status Code: 403

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bookings that have been started can't be deleted"
}
```
IMAGES

Delete a Spot Image

Delete an existing image for a Spot.

Require Authentication: true

Require proper authorization: Spot must belong to the current user

Request

Method: DELETE
Route path: /api/spot-images/:imageId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Successfully deleted"
}
```
Error response: Couldn't find a Spot Image with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Spot Image couldn't be found"
}
```
Delete a Review Image

Delete an existing image for a Review.

Require Authentication: true

Require proper authorization: Review must belong to the current user

Request

Method: DELETE
Route path: /api/review-images/:imageId
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Successfully deleted"
}
```
Error response: Couldn't find a Review Image with the specified id

Status Code: 404

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Review Image couldn't be found"
}
```
Add Query Filters to Get All Spots

Return spots filtered by query parameters.

Require Authentication: false

Request

Method: GET
Route path: /api/spots
Query Parameters
page: integer, minimum: 1, default: 1
size: integer, minimum: 1, maximum: 20, default: 20
minLat: decimal, optional
maxLat: decimal, optional
minLng: decimal, optional
maxLng: decimal, optional
minPrice: decimal, optional, minimum: 0
maxPrice: decimal, optional, minimum: 0
Body: none
Successful Response

Status Code: 200

Headers:

Content-Type: application/json
Body:
```json
{
  "Spots": [
    {
      "id": 1,
      "ownerId": 1,
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "avgRating": 4.5,
      "previewImage": "image url"
    }
  ],
  "page": 2,
  "size": 20
}
```
Error Response: Query parameter validation errors

Status Code: 400

Headers:

Content-Type: application/json
Body:
```json
{
  "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
  "errors": {
    "page": "Page must be greater than or equal to 1",
    "size": "Size must be between 1 and 20",
    "maxLat": "Maximum latitude is invalid",
    "minLat": "Minimum latitude is invalid",
    "minLng": "Maximum longitude is invalid",
    "maxLng": "Minimum longitude is invalid",
    "minPrice": "Minimum price must be greater than or equal to 0",
    "maxPrice": "Maximum price must be greater than or equal to 0"
  }
}
```
## Feature List

1. Spot Features   
2. Reviews Features 

## Future Features
1. Booking Features
2. Review Image Features
3. Spot Image Features

   
## Contact 

[Miaohua](https://github.com/miaohua897)  
[LinkedIn](https://www.linkedin.com/in/haijian-hou-b1b32b344/)
# castleBnb_websocket
