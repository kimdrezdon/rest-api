//Require Express
const express = require('express');

//Require Express router
const router = express.Router();

//Import tool to hash user passwords
const bcryptjs = require('bcryptjs');

//Import tool to parse the authorization header
const auth = require('basic-auth');

//User and Course models
const { User, Course } = require("./db").models;

//Middleware to handle errors without using try/catch blocks in every route. Takes in a callback function, wraps it in a try/catch block, and passes errors to the global error handling middleware
function asyncHandler(cb) {
    return async (req, res, next) => {
        try {
            await cb (req, res, next);
        } catch (err) {
            next(err);
        }
    }
}

//need to add custom authentication middleware here

//Send a GET request to /users to return the currently authenticated user (200)
//needs to call custom authentication middleware first
router.get('/users', asyncHandler( async (req, res) => {

}));

//Send a POST request to /users to create a user, set the Location header to '/' and return no content (201)
//needs to validate that the request body contains these required values and return validation errors when necessary: firstName, lastName, emailAddress, password
router.post('/users', asyncHandler( async (req, res) => {

}));

//Send a GET request to /courses to return a list of courses, including the user that owns each course (200)
router.get('/courses', asyncHandler( async (req, res) => {
    const courses = await Course.findAll();
    res.status(200).json(courses);
}));

//Send a GET request to /courses/:id to return the course, including the user that owns the course, for the provided course ID (200)
router.get('/courses/:id', asyncHandler( async (req, res) => {
    const course = await Course.findByPk(req.params.id);
    res.status(200).json(course);
}));

//Send a POST request to /courses to create a course, set the Location header to the URI for the course, and return no content (201)
//needs to validate that the request body contains these required values and return validation errors when necessary: title, description
router.post('/courses', asyncHandler( async (req, res) => {

}));

//Send a PUT request to /courses/:id to update a course and return no content (204)
//needs to validate that the request body contains these required values and return validation errors when necessary: title, description
router.put('/courses/:id', asyncHandler( async (req, res) => {

}));

//Send a DELETE request to /courses/:id to delete a course and return no content
router.delete('/courses/:id', asyncHandler( async (req, res) => {

}));

//Export the router
module.exports = router;