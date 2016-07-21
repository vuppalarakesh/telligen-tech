'use strict';

/**
 * @ngdoc function
 * @name telligenTechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telligenTechApp
 */
angular.module('telligenTechApp')
  .controller('MainCtrl', function ($scope) {

    $scope.myInterval = 2000;

    $scope.clientServices = [
      {
        text: 'Client Service Managers',
        image:'images/techonogy-section.jpg'
      },
      {
        text: 'Career Diversity Promotes Career Longevity',
        image:'images/techonogy-section.jpg'
      },
      {
        text: 'Training Opportunities',
        image:'images/techonogy-section.jpg'
      },
      {
        text: 'Tuition Reimbursement',
        image:'images/techonogy-section.jpg'
      },
      {
        text: 'Certification Reimbursement',
        image:'images/techonogy-section.jpg'
      },
      {
        text: 'Other Career Oppurtunities',
        image:'images/techonogy-section.jpg'
      }

    ];
    $scope.trainingServices = [
      {
        title: 'BI App in 8 weeks, 8 days and 8hours',
        subtext:'With Telligen Techs pre-defined BI frameworks',
        image:'images/training/1.png'
      },
      {
        title: 'Discover something incredible with BIGDATA',
        subtext:'Is your business ready?',
        image:'images/training/2.jpg'
      },
      {
        title: 'Solutions for every industry',
        subtext:'Client include Start-ups to Fortune 500',
        image:'images/training/3.png'
      },
      {
        title: 'BI is beyond IT, it extends to executives, sales, customers and everyone in between',
        subtext:'It is important to right from the start',
        image:'images/training/4.png'
      },
      {
        title: 'Customize, Integrate and Maximize',
        subtext:'With Micro strategy Framework',
        image:'images/training/5.png'
      }
    ];


  });
