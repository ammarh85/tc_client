# TravelConseriage.PackageApi

All URIs are relative to *http://localhost:8080/tc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInventory**](PackageApi.md#getInventory) | **GET** /package/inventory | Returns package inventories


<a name="getInventory"></a>
# **getInventory**
> ModelPackage getInventory()

Returns package inventories

Returns list of all packages

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.PackageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventory(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModelPackage**](ModelPackage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

