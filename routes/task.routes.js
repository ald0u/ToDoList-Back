const { Router } = require('express');
const router = Router();
const checkParams = require('./../guards/check-params-guards');

//Controlador
const taskController = require('./../controllers/task.controller');

router.get('/tasks', taskController.findAll);

router.get('/tasks/:id', taskController.findOne);

router.put('/tasks', checkParams(['id', 'title']), taskController.edit);

router.post('/tasks', checkParams(['title']), taskController.create);

router.delete('/tasks/:id', taskController.delete);
//Middleware

//Guard

module.exports = router; 