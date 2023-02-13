const express=require("express")
const router=express.Router()
const {postInfo}=require('../controller/info.js')
router.post('/', postInfo)
router.get('/', (req, res) => {
    res.send('hello world')
})

module.exports={router}



