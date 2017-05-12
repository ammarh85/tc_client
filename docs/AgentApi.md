# TravelConseriage.AgentApi

All URIs are relative to *http://localhost:8080/tc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgent**](AgentApi.md#createAgent) | **POST** /agent | Create Agent
[**createAgentsWithArrayInput**](AgentApi.md#createAgentsWithArrayInput) | **POST** /agent/createWithArray | Creates list of agents with given input array
[**getAgents**](AgentApi.md#getAgents) | **GET** /agent/getAgents | Returns all agents in the system
[**getagentById**](AgentApi.md#getagentById) | **GET** /agent/getAgentById | Returns An Agent for a given id
[**loginUser**](AgentApi.md#loginUser) | **GET** /agent/login | Logs user into the system


<a name="createAgent"></a>
# **createAgent**
> createAgent(body)

Create Agent

This can only be done by the logged in user.

### Example
```javascript
var TravelConseriage = require('travel_conseriage');

var apiInstance = new TravelConseriage.AgentApi();

var body = new TravelConseriage.Agent(); // Agent | Created user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createAgent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Agent**](Agent.md)| Created user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="createAgentsWithArrayInput"></a>
# **createAgentsWithArrayInput**
> createAgentsWithArrayInput(body)

Creates list of agents with given input array



### Example
```javascript
var TravelConseriage = require('travel_conseriage');

var apiInstance = new TravelConseriage.AgentApi();

var body = [new TravelConseriage.Agent()]; // [Agent] | List of agent object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createAgentsWithArrayInput(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Agent]**](Agent.md)| List of agent object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getAgents"></a>
# **getAgents**
> [Agent] getAgents()

Returns all agents in the system

Returns list of all Agents

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.AgentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgents(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Agent]**](Agent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getagentById"></a>
# **getagentById**
> Agent getagentById(agentId)

Returns An Agent for a given id

Returns agent object

### Example
```javascript
var TravelConseriage = require('travel_conseriage');
var defaultClient = TravelConseriage.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new TravelConseriage.AgentApi();

var agentId = "agentId_example"; // String | The id of the agent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getagentById(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| The id of the agent | 

### Return type

[**Agent**](Agent.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginUser"></a>
# **loginUser**
> &#39;String&#39; loginUser(username, password)

Logs user into the system



### Example
```javascript
var TravelConseriage = require('travel_conseriage');

var apiInstance = new TravelConseriage.AgentApi();

var username = "username_example"; // String | The user name for login

var password = "password_example"; // String | The password for login in clear text


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

