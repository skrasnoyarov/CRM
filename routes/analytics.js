const {addAnalyticsData, addOverviewData} = require('../controllers/analytics');
const express = require('express');
const analyticsRouter = express.Router();

analyticsRouter.get('/overview', addAnalyticsData);
analyticsRouter.get('/analytics', addOverviewData);

module.exports = analyticsRouter;