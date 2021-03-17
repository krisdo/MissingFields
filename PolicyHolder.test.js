const PolicyHolder = require('./PolicyHolder.js');
const policies = require('./json.js');

describe('Check PolicyHolder Methods', () => {
  
  let result;

  describe('Get Missing Fields', () => {
  
    it('It should return undefined for no missing fields', () => {
      let policy = policies[1];
      let customer = new PolicyHolder(policy);
      let requirements =
        {
          policyHolder: ['name', 'address', 'email'],
          operators : ['birthdayRange', 'gender']
        };
      
      let missingFields = customer.getMissingFields(requirements);
      expect(result).toBe(undefined);
    });

     it('It should return 1 missing field', () => {
      policy = policies[0];
      customer = new PolicyHolder(policy);
      requirements =
        {
          policyHolder: ['name', 'address', 'email'],
          operators : ['birthdayRange', 'gender']
        };
      
      missingFields = customer.getMissingFields(requirements);
      const policyHolder = Object.keys(missingFields[0])[0];
      const operators = Object.keys(missingFields[1])[0];
      
      expect(missingFields.length).toBe(2);
      expect(policyHolder).toBe('policyHolder');
      expect(typeof missingFields[0]).toBe('object');
      expect(operators).toBe('operators');
      expect(typeof missingFields[1]).toBe('object');
    });

  });

});
