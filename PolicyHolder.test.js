const PolicyHolder = require('./PolicyHolder.js');
const policies = require('./json.js');

describe('Check PolicyHolder Methods', () => {
  
  let result, policy, customer, missingFields;
  const requirements =
  {
    policyHolder: ['name', 'address', 'email'],
    operators : ['birthdayRange', 'gender', 'driversLicenseNumber']
  };

  describe('Get Missing Fields', () => {
  
    it('It should return undefined for no missing fields', () => {

      policy = policies[1];
      customer = new PolicyHolder(policy);
      missingFields = customer.getMissingFields(requirements);

      expect(result).toBe(undefined);
    });

     it('It should return 3 missing fields', () => {

      policy = policies[0];
      customer = new PolicyHolder(policy);
      missingFields = customer.getMissingFields(requirements);

      const missingFieldsPolicyHolder = missingFields[0];
      const missingFieldsOperators = missingFields[1].operators;
      const totalMissingFields = [missingFieldsPolicyHolder, ...missingFieldsOperators];

      const policyHolder = Object.keys(missingFields[0])[0];
      const operators = Object.keys(missingFields[1])[0];
      
      expect(totalMissingFields.length).toBe(3);
      expect(policyHolder).toBe('policyHolder');
      expect(typeof missingFields[0]).toBe('object');
      expect(operators).toBe('operators');
      expect(typeof missingFields[1]).toBe('object');
    });

  });

});
