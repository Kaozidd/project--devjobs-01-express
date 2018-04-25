const { Model } = require('objection')

class Company extends Model {
  static get tableName() {
    return 'companies'
  }
  static get relationshipMappings() {
	const Job = require('./Job')
	return {
	  jobs: {
		relation: Model.HasManyRelation,
		modelClass: Job,
		join: {
		  from: 'companies.id',
		  to: 'jobs.companyId'
		}
	  }
	}
  }
}

module.exports = Company