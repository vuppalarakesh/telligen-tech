/**
 * Created by rvuppala on 7/9/2016.
 */
angular.module('telligenTechApp').controller('LoginController', ['FBMSG', 'authFactory', "$window","$stateParams","$state", function(FBMSG, authFactory, $window,$stateParams,$state) {
  var loginCtl = this;
  loginCtl.signUp = function() {
    var result = authFactory.createUser(loginCtl.email, loginCtl.password);
    result.then(function(userData){
      console.log("User Successfully created with uid: ", userData.uid)
    }, function(error) {
      console.log("an error occurred ", error)
    })
  }

  loginCtl.signUpForm = false;

  loginCtl.showSignUp = function() {
    loginCtl.signUpForm = true;

    console.log($state.params);

    return loginCtl.signUpForm;

  };

  loginCtl.login = function () {

    var result = authFactory.authUser(loginCtl.loginEmail, loginCtl.loginPassword);
    result.then(function(authData){
      console.log("User Successfully logged in with uid: ", authData.uid)
      $window.location.href = "/";
    }, function(error) {
      console.log("Authentication Failed: ", error)
    })
  }

}])
