/****
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
****/
/** more explainary version **/

function convertQueryToMap(query) {
  if(query.length === 0) return {};

  return query.split('&').reduce((result, property) => {     
    let keys = property.split('.');
    let [key, value] = keys.pop().split('=');
    keys.push({[key]: decodeURIComponent(value)});

    keys.reduce((obj, key) => {                           //keys=['user', 'name', {'firstname': 'Bob'}]
      if(key instanceof Object) {                        
        const lastKey = Object.keys(key)[0]               //then Object.keys(key)[0] is lastkey, 
        obj[lastKey] = key[lastKey];                      //then obj[lastkey] = key[lastkey] move to obj from last key
        return;                                           //done process
      }
      if(obj[key]) {                                      //if(obj[key] && typeof obj[key] === object) then obj = obj[key] return obj
        obj = obj[key]
        return obj                                        // change to inner object address
      }
      obj[key] = {};
      obj = obj[key];                                     //generate key: obj[key] = {} {user: {}}, update object: obj = obj[key]
      return obj
    }, result)

    return result;                                        // return original object address
  }, {})
}

/** more clean version **/

function convertQueryToMap(query) {
  if(query.length === 0) return {};

  return query.split('&').reduce((result, property) => {     
    let keys = property.split('.');
    let [key, value] = keys.pop().split('=');
    keys.push({[key]: decodeURIComponent(value)});

    keys.reduce((obj, key) => {                           //keys=['user', 'name', {'firstname': 'Bob'}]
      if(key instanceof Object) {                        
        const lastKey = Object.keys(key)[0]               //Object.keys(key)[0] is lastkey, 
        obj[lastKey] = key[lastKey];                      //obj[lastkey] = key[lastkey] move to obj from last key
        return;                                           
      }
      return obj[key] = obj[key] ? obj[key] : {};         //return obj address, {user: {...}} or {user: {}} 
    }, result)

    return result;                                        // return original object address
  }, {})
}
