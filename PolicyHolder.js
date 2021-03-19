const { getMissingFieldsPolicyHolder, getMissingFieldsAllOperators } = require('./helperFunctions');
/**
 * @class PolicyHolder
 * @constructor intializes with policy linked to policy holder
 * @param {Object} policy  
 */

module.exports = class PolicyHolder {
  
  constructor(policy) {
    this.policy = policy;
  }
  
  /**
   * @param  {Array} requirements
   * @return {Array} AllMissingFields or undefined 
   */
  getMissingFields( requirements ) {
    
    const allMissingFields = [];
    let fields, missingFields, result, data;
    const keyFunctions = {

      policyHolder: getMissingFieldsPolicyHolder,
      operators: getMissingFieldsAllOperators

    }
     
    for ( let key in requirements ) {
       
      fields = requirements[key];

      missingFields = {};
      missingFields[key] = [];
   
      fields.forEach( field => {
        
        data = this.policy[key];
        result = keyFunctions[key](data, field);

        if (result.length) {
          missingFields[key] = [...missingFields[key], ...result];
        }

      });

      missingFields[key].length && allMissingFields.push(missingFields);
    }

    return allMissingFields;

  }

   //TODO: Write Method
  updateFields( fields ) {
    //Update policy info
  }

  //TODO: Write Method
  generateQuote( insName, requirements ) {

    let missingFields = this.getMissingFields(requirements);

    if(!missingFields) {
      //invoke another function to generate quote
    } else {
      //send alert to get more info
    }
  }
  
};
