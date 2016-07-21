'use strict';

/**
 * @ngdoc function
 * @name telligenTechApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the telligenTechApp
 */
angular.module('telligenTechApp')
  .controller('AboutCtrl', ['$http', '$scope', function ($http,$scope) {
    var aboutCtrl = this;

    aboutCtrl.aboutUsData =
    {
      heading: 'About Us',
      subHeading: 'Who are we?',
      content:'<p>Founded in 2012, TelligenTech is a Technology powerhouse with a vision of bringing actionable accomplishments to masses.</p>' +
      '<p>With focused expertise in providing actionable solutions for enterprises and innovative outsourcing services for software product companies, we see ourselves as fellow travelers with our clients on the road to creating enduring value.</p>' +
      '<p>We crafted a solutions architecture utilizing best of the breed software company’s offerings, identifying and finding micro needles in today’s enterprise digital haystack. Ours is a very innovative approach in promoting emerging technologies with proven products– to improve the efficiency by a large multiplication factor.</p>' +
      '<p>Access management is about managing consistent sets of access control policies across enterprise systems.</p>' +
      '<p>As a company developing, its niche technology expertise has become home to many committed, ambitious and technology savvy professionals. The environment, which provides ample opportunities to embrace multiple tool expertise and responsibilities.</p>' +
      '<p>Maintaining technology leadership in this rapidly-changing market requires a committed, energized team of people. At TelligenTech, we continue to attract the best and brightest due to our energized, dynamic contribution into Information Technology</p>' +
      '<p>The exceptional quality of our workforce is a valuable competitive edge. TelligenTech attracts individuals with strong character, excellent technical skills and a solid work ethic. Our consultants strive for success and are proud to be part of our team.</p>'

    };
    aboutCtrl.ourValuesData =
    {
      heading: 'Our Values',
      subHeading: 'Pride in work',
      content:'<p>At TelligenTech we encourage our people to be the best in class professional. This is reflected in our competency development, training and reward policies.</p>' +
      '<p>TelligenTech is a place where people can advance their career . We are committed to attracting, retaining and rewarding the best minds in business.</p>' +
      '<p>We encourage and support competency-building efforts that will enable realization of our Vision .</p>' +
      '<p>The Exceptional quality of our workforce is a valuable competitive edge. TelligenTech attracts individuals with strong character, excellent technical skills and a solid work ethic.</p>'

    };

    aboutCtrl.showAboutUsContent = true;

    aboutCtrl.showAboutUs = function () {
      aboutCtrl.showOurValuesContent = false;


      aboutCtrl.showAboutUsContent = true;


      return aboutCtrl.showAboutUsContent;
    };

    aboutCtrl.showOurValuesContent = false;

    aboutCtrl.showOurValues = function () {

      aboutCtrl.showAboutUsContent = false;

      aboutCtrl.showOurValuesContent = true;

      return aboutCtrl.showOurValuesContent;
    };

    $scope.expand = false;

    $scope.toggleClick = function(){
      $scope.expand = true;
    };
    console.log($scope.expand);
  }]);
