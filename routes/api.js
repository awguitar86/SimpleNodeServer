const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = express.Router()

router.get('/api', (req, res) => {
  return res.json({username: 'thorgodofthunder', password: 'strongestavenger', hammerOfChoice: 'Stormbreaker'})
})

module.exports = router