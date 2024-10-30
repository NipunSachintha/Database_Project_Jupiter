const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const generateReportController = require('../controllers/generateReportController');
const path = require('path');


router.get('/get_dropdown_options',authMiddleware(['Admin User',"HR Manager","Second Manager","Employee"]),generateReportController.get_dropdown_options);
router.post('/get_employee_detail_by_department', authMiddleware(['Admin User',"HR Manager","Second Manager","Employee"]), generateReportController.get_employee_detail_by_department);
router.post('/get_employee_detail_by_branch', authMiddleware(['Admin User',"HR Manager","Second Manager","Employee"]), generateReportController.get_employee_detail_by_branch);

module.exports = router;