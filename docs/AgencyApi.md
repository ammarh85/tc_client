# TravelConseriage.AgencyApi

All URIs are relative to *http://localhost:8080/tc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgency**](AgencyApi.md#createAgency) | **POST** /agency | Create Agency
[**getAgencies**](AgencyApi.md#getAgencies) | **GET** /agency/getAgency | Returns all agencies in the system
[**getAgencyById**](AgencyApi.md#getAgencyById) | **GET** /agency/getAgencyById | Returns an Agency for a given id


<a name="createAgency"></a>
# **createAgency**
> createAgency(body)

Create Agency

This can only be done by the logged in user.

### Example
```javascript
var TravelConseriage = require('travel_conseriage');

var apiInstance = new TravelConseriage.AgencyApi();

var body = new TravelConseriage.Agency(); // Agency | Created Agency object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createAgency(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Agency**](Agency.md)| Created Agency object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getAgencies"></a>
# **getAgencies**
> [Agency] getAgencies()

Returns all agencies in the system

Returns list of all Agencies

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.AgencyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgencies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Agency]**](Agency.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAgencyById"></a>
# **getAgencyById**
> Agency getAgencyById(agencyId)

Returns an Agency for a given id

Returns agency object

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.AgencyApi();

var agencyId = "agencyId_example"; // String | The id of the agency


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgencyById(agencyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agencyId** | **String**| The id of the agency | 

### Return type

[**Agency**](Agency.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

