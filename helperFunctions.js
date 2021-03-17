
const getMissingFieldsPolicyHolder = ( info ) => {

  const result = [];

  let key, value;

  Object.entries(info).forEach( property => {

    key = property[0];          //(name, address, email)
    value = property[1];

    !value && result.push(key);
    
  });
  
  return result;
    
};

const getMissingFieldsAllOperators = ( operators, type ) => {
  
  const result = [];
  
  operators.forEach( operator => {
    
    let { gender, birthdayRange, name } = operator;
    operator = { name };
    operator.missingFields = [];
    
    if(type === 'gender') {
      !gender && operator.missingFields.push('gender');
    }

    if(type === 'birthdayRange') {
      birthdayRange.start !== birthdayRange.end && operator.missingFields.push('birthdate');
    }
    
    operator.missingFields.length && result.push(operator);
    
  });

  return result;
}



module.exports = { getMissingFieldsPolicyHolder, getMissingFieldsAllOperators };