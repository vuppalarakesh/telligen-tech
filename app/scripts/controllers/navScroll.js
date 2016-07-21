/**
 * Created by rvuppala on 6/27/2016.
 */

angular.module('telligenTechApp').directive("myNavscroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (!scope.scrollPosition) {
        scope.scrollPosition = 11
      }

      if (this.pageYOffset > scope.scrollPosition) {
        scope.boolChangeClass = true;
      } else {
        scope.boolChangeClass = false;
      }
      scope.scrollPosition = this.pageYOffset;
      scope.$apply();
    });
  };
});
