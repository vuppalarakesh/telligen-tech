/**
 * Created by rvuppala on 6/26/2016.
 */

'use strict';

/**
 * @ngdoc function
 * @name telligenTechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telligenTechApp
 */
angular.module('telligenTechApp')
  .controller('ContactCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ref =  new Firebase('https://telligen-tech.firebaseio.com/');
    // download the data into a local object
    $scope.contacts = $firebaseArray(ref);

    var contactUsController = this;

    contactUsController.title = 'Some title';

    contactUsController.saveContact = function() {
      console.log("adding contacts");

      $scope.contacts.$add({
        name: $scope.name,
        email: $scope.email,
        subject: $scope.subject
      }).then(function(ref){
        var id = ref.key();
        console.log('added contact'+id);
          $scope.name = '';
          $scope.email  = '';
          $scope.subject  = '';
      });
    };

  }]);

