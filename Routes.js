const {Router} = require('express');
const router = Router();

const Message = require('./messageModel');

router.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html');
})

router.post('/',(req,res)=>{
    let newMessage = new Message ({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    newMessage.save();
    res.sendFile(__dirname + '/answer.html')
})

module.exports = router;