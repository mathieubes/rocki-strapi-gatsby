'use strict';

/**
 * schedule-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-entry.schedule-entry');
