const {Router} =  require('express')
const controller  = require('./controller')

const router = Router()
  
router.get('/', (req,res) => {controller.getauthors(req,res)});

router.get('/:name', (req,res) => {controller.getauthorbyname(req,res)})

module.exports = router;