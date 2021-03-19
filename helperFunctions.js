/**
 * @param  { Object } info - information under policy holder
 * @return { string[] } result - any missing fields
 */
const getMissingFieldsPolicyHolder = ( info, field ) => {

  const result = [];

  let key, value;

  if (typeof info[field] === 'object') {

    Object.entries(info[field]).forEach( property => { 
  
      key = property[0];      
      value = property[1];
    
     !value && result.push(key);
      
    });

  } else {
    !info[field] && result.push(field);
  }

  return result;
    
};

/**
 * @param  { Object[] } operators - all operators under the policy
 * @param  { string } field - insurance requirement field to look in operators
 * @return { string[] } result - any missing fields
 */
const getMissingFieldsAllOperators = ( operators, field ) => {
  
  const result = [];
  
  operators.forEach( operator => {
    
    const { gender, birthdayRange, name, isPrimary, driversLicenseNumber } = operator;
    operator = { name };
    operator.missingFields = [];
    
    if (field === 'gender') {
      !gender && operator.missingFields.push('gender');
    }

    if (field === 'birthdayRange') {
      birthdayRange.start !== birthdayRange.end && operator.missingFields.push('birthdate');
    }
    
    if (field === 'driversLicenseNumber') {
      
      if (isPrimary) {
        ( !driversLicenseNumber || driversLicenseNumber.includes('XXXXX') || driversLicenseNumber.includes('*****') ) && operator.missingFields.push('driversLicenseNumber');
      }
    }

    operator.missingFields.length && result.push(operator);

  });

  return result;

};

module.exports = { getMissingFieldsPolicyHolder, getMissingFieldsAllOperators };