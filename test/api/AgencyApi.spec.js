/**
 * Travel Conseriage
 * API for managing Travel Conceriage Service datasets.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ammar.haris@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TravelConseriage);
  }
}(this, function(expect, TravelConseriage) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TravelConseriage.AgencyApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AgencyApi', function() {
    describe('createAgency', function() {
      it('should call createAgency successfully', function(done) {
        //uncomment below and update the code to test createAgency
        //instance.createAgency(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgencies', function() {
      it('should call getAgencies successfully', function(done) {
        //uncomment below and update the code to test getAgencies
        //instance.getAgencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgencyById', function() {
      it('should call getAgencyById successfully', function(done) {
        //uncomment below and update the code to test getAgencyById
        //instance.getAgencyById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
