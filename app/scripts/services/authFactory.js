/**
 * Created by rvuppala on 7/9/2016.
 */
angular.module('telligenTechApp').factory('authFactory', ['FBMSG', '$firebaseAuth', function(FBMSG, $firebaseAuth) {
  var authFactory = {};
  var ref = new Firebase(FBMSG);
  // Initialize FirebaseAuth
  var auth = $firebaseAuth(ref);
  console.log(auth);
  authFactory.createUser = function(email, password) {
    return auth.$createUser({
      email: email,
      password: password
    })};

  // Authentication
  authFactory.authUser = function(email, password) {
    return auth.$authWithPassword({
      email: email,
      password: password
    });
  }

  authFactory.logout = function() {
    auth.$unauth();
  }

  authFactory.auth = function() {
    return auth;
  }
  return authFactory;
}])
