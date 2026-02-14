"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
// const DepartmentRouter = require('express').Router()
/* ------------------------------------------------------- */

const department = require('../controllers/department.controller')
// const idValidation = require( '../middlewares/idValidation' )

// URL: /departments

router.route('/')
    .get(department.list)
    .post(department.create)

router.route('/:id')
// .all(idValidation)
    .get(department.read)
    .put(department.update)
    .patch(department.update)
    .delete(department.delete)

router.get('/:id/personnels', department.personnels)

/* ------------------------------------------------------- */
module.exports = router
// module.exports = DepartmentRouter