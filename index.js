'use strict';

const { cancelJob, rescheduleJob, scheduledJobs, scheduleJob} = require('./lib/schedule')
const { Invocation, RecurrenceRule, Range} = require('./lib/Invocation')
const { Job } = require('./lib/Job')
exports = {
  Job,
  Invocation,
  Range,
  RecurrenceRule,
  cancelJob,
  rescheduleJob,
  scheduledJobs,
  scheduleJob
}
if (typeof window === 'object') window.schedule = exports
else module.exports = exports
