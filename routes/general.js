const router = require('express').Router()
const uploads = require('../modules/uploads')

router.get('/identifier', uploads.any(), (req, res) => {
    res.render('gen/identifier')
})

router.get('/', (req, res) => {
    res.redirect('ship/panel')
})

module.exports = router