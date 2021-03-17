const { getMissingFieldsPolicyHolder, getMissingFieldsAllOperators } = require('./helperFunctions');
/**
 * 
 * @module PolicyHolder
 * 
 */

module.exports = class PolicyHolder {
  /**
   * @param  {} policy
   */
  constructor(policy) {
    this.policy = policy;
  }
  /**
   * @param  {Array} requirements
   * @return {Array} AllMissingFields or undefined 
   */
  getMissingFields( requirements ) {
    
    let allMissingFields = [];
    let fields;
     
    for ( let key in requirements ) {
       
      fields = requirements[key];

      if (key === 'policyHolder') {

        let missingFields = {};
        missingFields.policyHolder = [];
        let result, data;

        fields.forEach( field => {
          
          data = this.policy[key][field];
          result = getMissingFieldsPolicyHolder(data);

          if (result.length) {
            missingFields.policyHolder = [...missingFields.policyHolder, ...result];
          }
        });

        missingFields.policyHolder.length && allMissingFields.push(missingFields);
        
      }
    

      if (key === 'operators') {

        let missingFields = {};
        missingFields.operators = [];
        let result, data;

        fields.forEach( field => {

          data = this.policy[key];
          result = getMissingFieldsAllOperators(data, field);
                    
          if (result.length){
            missingFields.operators = [...missingFields.operators, ...result];
          }
        });

        missingFields.operators.length && allMissingFields.push(missingFields);
      }
    }
    return allMissingFields;
  }
   //TODO: Write Method
  updateFields( fields ) {
    //Update policy info
  }

  //TODO: Write Method
  generateQuote( insName, requirements ) {

    let missingFields = this.findMissingFields;

    if(!missingFields) {
      //invoke another function to generate quote
    } else {
      //send alert to get more info
    }
  }
  
};
