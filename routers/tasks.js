const express = require('express');
const router = express.Router();
const db = require('../models/database');

router.get('/', async(req, res)=>{
    const items = await db.getTasks();
    res.render('todolist', {title: "To Do List", todo: items});
});

router.post('/item', async(req, res)=>{
    const title = req.body.title;
    await db.createTask(title);
    res.redirect('/')
})

router.get('/item/:id/complete', async (req, res)=>{
    const id = req.params.id;
    await db.updateTask(id, 1);
    res.redirect('/')
})
router.get('/item/:id/incomplete', async (req, res)=>{
    const id = req.params.id;
    await db.updateTask(id, 0);
    res.redirect('/')
})
router.get('/item/:id/delete', async (req, res)=>{
    const id = req.params.id;
    await db.deleteTask(id);
    res.redirect('/')
})
module.exports = router;
