# ldap-promise

Small wrapper for ldap-client that use promises.

You can use ldap-client in this way

```
let data = yield ldap.search({
	filter: '(objectClass=*)'
});
```

and this way too

```
ldap.search({
	filter: '(objectClass=*)'
}).then((err, data) => {
	console.log(data);
});
```



## Installation

This module is installed via npm:

``` bash
$ npm install ldap-promise
```

## Example Usage

```
let ldap = new LDAP({
    uri:             'ldap://server',   // string 
    validatecert:    false,             // Verify server certificate 
    connecttimeout:  -1,                // seconds, default is -1 (infinite timeout), connect timeout 
    base:            'dc=com',          // default base for all future searches 
    attrs:           '*',               // default attribute list for future searches 
    filter:          '(objectClass=*)', // default filter for all future searches 
    scope:           LDAP.SUBTREE,      // default scope for all future searches 
    connect:         function(),        // optional function to call when connect/reconnect occurs 
    disconnect:      function(),        // optional function to call when disconnect occurs         
}, function(err) {
    // connected and ready     
});

```

### promise 

```
ldap.search({
	filter: '(objectClass=*)'
}).then((err, data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
```


### generator

```
let co = require('co');

co(function *() {
	let result = null;
	try {
		result = yield ldap.search({
			filter: '(objectClass=*)'
		});
	} catch(e) {
		result = e;
	}
	console.log(result);
});
```
