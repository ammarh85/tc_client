# TravelConseriage.UserApi

All URIs are relative to *http://localhost:8080/tc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /user | Register a new user
[**updateUser**](UserApi.md#updateUser) | **PUT** /user | Update an existing User


<a name="addUser"></a>
# **addUser**
> addUser(body)

Register a new user

New user Registration

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.UserApi();

var body = new TravelConseriage.User(); // User | User object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(body)

Update an existing User



### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.UserApi();

var body = new TravelConseriage.User(); // User | Pet object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Pet object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

