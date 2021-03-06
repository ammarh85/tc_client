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
    instance = new TravelConseriage.ModelPackage();
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

  describe('ModelPackage', function() {
    it('should create an instance of ModelPackage', function() {
      // uncomment below and update the code to test ModelPackage
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be.a(TravelConseriage.ModelPackage);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property agencyId (base name: "agencyId")', function() {
      // uncomment below and update the code to test the property agencyId
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property destLat (base name: "destLat")', function() {
      // uncomment below and update the code to test the property destLat
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property destLong (base name: "destLong")', function() {
      // uncomment below and update the code to test the property destLong
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property adultPrice (base name: "adultPrice")', function() {
      // uncomment below and update the code to test the property adultPrice
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property childPrice (base name: "childPrice")', function() {
      // uncomment below and update the code to test the property childPrice
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property lastModificationDate (base name: "LastModificationDate")', function() {
      // uncomment below and update the code to test the property lastModificationDate
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedBy (base name: "LastModifiedBy")', function() {
      // uncomment below and update the code to test the property lastModifiedBy
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new TravelConseriage.ModelPackage();
      //expect(instance).to.be();
    });

  });

}));
