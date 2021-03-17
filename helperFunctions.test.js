const { getMissingFieldsPolicyHolder, getMissingFieldsAllOperators } = require('./helperFunctions');
const policies = require('./json.js');

describe('Check Policy Holder For Missing Fields', () => { 

  const { name, address } = policies[0].policyHolder;
    
  describe('Check Name Fields', () => {
  
    let result = getMissingFieldsPolicyHolder(name);
      
    it('Should return 1 missing field', () => {
      expect(result.length).toBe(1);
    });

    it('Should return "middlename" as the missing field', () => {
     expect(result[0]).toBe('middleName');
    });
  });

  describe('Check Address Fields', () => {

    result = getMissingFieldsPolicyHolder(address);
    
    it('Should return empty array for missing fields', () => {
      expect(result.length).toBe(0);
    });
  });

});

describe('Check All Operators For Missing Fields', () => {
  
  let result;

  describe('Check Birthday Fields', () => {

    let operatorWithBirthdate = policies[1].operators;
    let type = 'birthdayRange';
    
    it('It should return an empty array for no missing fields', () => {
      
      result = getMissingFieldsAllOperators(operatorWithBirthdate, type);
      expect(result.length).toBe(0);
    });

    let operatorWithNoBirthdate = policies[0].operators;

     it('It should return 1 missing field', () => {
      result = getMissingFieldsAllOperators(operatorWithNoBirthdate, type);
       expect(result.length).toBe(1);
       expect(result[0].missingFields.length).toBe(1);
    });

      it('It should return an birthdate as the missing field', () => {
        expect(result[0].missingFields[0]).toBe('birthdate');
      });
  });

  describe('Check Gender Fields', () => {

    let { operators } = policies[1];
    let type = 'gender';
    
    it('It should return an empty array for missing fields', () => {
      result = getMissingFieldsAllOperators(operators, type);
      expect(result.length).toBe(0);
    });
  });

});
