# Find Missing Fields
Implemented a JS Class to find missing fields of insurance policies. 
The class instance holds information per policy holder.
The class has one method to gather all missing fields depending on each insurance company's requirements.
This method uses helper functions for each area.

#### Assumptions for Implementation
- All fields will be checked for missing data (e.g. for name of policy holder, "firstname", "middlename," and "lastname" must have a value).
- birthdayRange "start" and "end" must match to show exact birthday.
- "driversLicenseNumber" must have valid string (e.g. cannot contain "XXXXX", "*****", or null);

#### Policy Data Definition
```json
{
policyId: unique identifier for policy,
issuer: company that issued the policy,
issueDate: date policy starts, YYYY-MM-DD
renewalDate: date policy ends, YYYY-MM-DD
policyTermMonths: duration of policy in months, 6 or 12
premiumCents: total premium (cost) for the term of the policy, in cents
policyHolder: {
name: {
firstName: policy holder’s first name
middleName: policy holder’s middle name
lastName: policy holder’s last name
}
address: {
number: street number for policy holder’s address
street: street name for policy holder’s address
type: street type for policy holder’s address
sec_unit_type: secondary unit type for policy holder’s address
sec_unit_num: secondary unit number for policy holder’s address
city: city for policy holder’s address
state: state for policy holder’s address
zip: zip code for policy holder’s address
}
email: policy holder’s email
phone: policy holder’s phone number
}
operators: [{
isPrimary: is the operator the policy holder
name: {
firstName: operator’s first name
middleName: operator’s middle name
lastName: operator’s last name
}
birthdayRange: {
start: start of operator’s birthday range
end: end of operator’s birthday range
// sometimes we can’t extract the exact birthday
// (e.g. driver is 35 years old), so we save the implied range in this case
}
gender: operator’s gender
driversLicenseStatus: operator’s driver’s license status (valid, invalid, etc.)
driversLicenseState: operator’s driver’s license state
driversLicenseNumber: operator’s driver’s license number
relationship: operator’s relationship to policyholder
}]
```
#### Insurance Requirements Data Definition
```javascript
[
  { policyHolder : [name, email, address, driversLicenseNumber] },
  { operators: [gender, birthdayRange }
 ]
```

## Getting Started
### Dependencies
  - Jest
### Installing
 - run `npm install`
### Executing Function
- in cli: `npm run start`
### Run Tests
- in cli: `npm run test`
- 
## ToDo List
- Write method for updating policy information
- Write method for generating quotes
- Write more tests
