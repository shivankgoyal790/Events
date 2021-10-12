const express = require('express');
const Events = express.Router();
const {check} = require("express-validator")
const fileUpload = require('../file-upload');
const eventControllers = require("../Controllers/event-controllers");

Events.get("/",eventControllers.getallevents);
Events.post("/newevent",fileUpload.single('image'),[check('title').not().isEmpty()],eventControllers.createevent);
Events.patch("/like/:eid",eventControllers.likeEvent)

module.exports = Events;