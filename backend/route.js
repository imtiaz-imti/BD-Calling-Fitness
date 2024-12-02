const express = require('express')
const router = express.Router()
const {createUser,loginUser,makeAdmin,requestAdmin,requestTrainer,makeTrainer,deleteNotificationCountTrainer,deleteNotificationCountAdmin,deleteNotificationTrainer,deleteNotificationAdmin,getUserDetails,requestTrainerList,requestAdminList,allTrainerList,markAvailable,bookTrainerList,bookTrainer,deleteTrainer} = require('./controller')
router.route('/new').post(createUser)
router.route('/login').post(loginUser)
router.route('/request/admin').post(requestAdmin)
router.route('/make/admin').post(makeAdmin)
router.route('/request/trainer').post(requestTrainer)
router.route('/make/trainer').post(makeTrainer)
router.route('/delete/notification/count/trainer').put(deleteNotificationCountTrainer)
router.route('/delete/notification/count/admin').put(deleteNotificationCountAdmin)
router.route('/delete/notification/trainer').post(deleteNotificationTrainer)
router.route('/delete/notification/admin').post(deleteNotificationAdmin)
router.route('/user/:id').get(getUserDetails)
router.route('/request/trainer/list/:id').get(requestTrainerList)
router.route('/book/trainer/list').get(bookTrainerList)
router.route('/all/trainer/list/:id').get(allTrainerList)
router.route('/request/admin/list/:id').get(requestAdminList)
router.route('/trainer/mark/available').post(markAvailable)
router.route('/book/trainer').post(bookTrainer)
router.route('/delete/trainer').post(deleteTrainer)
module.exports = router