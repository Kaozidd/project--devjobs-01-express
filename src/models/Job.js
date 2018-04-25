const { Model } = require('objection')

class Job extends Model {
  static get tableName() {
	return 'jobs'
  }
  // static get relationshipMappings() {
  // 	const Company = require('./Company')
  // 	return {
  // 	  company: {
  // 	  	relation: Model.BelongsToOneRelation,
  // 	  	modelClass: Company,
  // 	  	join: {
  // 	  	  from: 'jobs.companyId',
  // 	  	  to: 'companies.id'
  // 	  	}
  // 	  }
  // 	}
  // }
}

module.exports = Job