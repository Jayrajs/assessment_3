/**
 * Created by phangty on 10/11/16.
 */

(function () {

angular.module('weddingGramApp').factory('AuthFactory',
    ['$q', '$timeout', '$http', 'Flash', '$state',
        function ($q, $timeout, $http, Flash, $state) {

            // create user variable
            var user = null;
            // return available functions for use in the controllers
            return ({
                isLoggedIn: isLoggedIn,
                getUserStatus: getUserStatus,
                login: login,
                logout: logout,
                register: register,
                resetPassword: resetPassword,
                changePassword: changePassword
            });

            function isLoggedIn() {
                if(user) {
                    return true;
                } else {
                    return false;
                }
            }

            function isAdmin() {
                console.log(user);
            }

            function getUserStatus(callback) {
                $http.get('/status/user')
                // handle success
                    .then(function (data) {
                        var authResult = JSON.stringify(data);
                        if(data["data"] != ''){
                            user = true;
                            callback(user);
                        } else {
                            user = false;
                            callback(user);
                        }
                    });
            }

            function login(userProfile) {

                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                $http.post('/login',
                    userProfile)
                // handle success
                    .then(function (data) {
                        var status = data.status;
                        if(status == 200){
                            getUserStatus(function(result){
                                if(result){
                                    deferred.resolve();
                                    $state.go('weddinggram');
                                }else{
                                    deferred.reject();
                                    Flash.create('danger', "Ooops having issue logging in!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                                    $state.go('SignIn');
                                }
                            });
                        } else {
                            user = false;
                            Flash.clear();
                            Flash.create('danger', "Ooops having issue logging in!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                            deferred.reject();
                        }
		    })
                    // handle error
                    .catch(function (data) {
                        user = false;
                        Flash.clear();
                        Flash.create('danger', "Ooops having issue logging in!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;

            }

            function logout() {

                // create a new instance of deferred
                var deferred = $q.defer();

                // send a get request to the server
                $http.get('/logout')
                // handle success
                    .then(function (data) {
                        user = false;
                        deferred.resolve();
                    })
                    // handle error
                    .catch(function (data) {
                        user = false;
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;

            }

            function resetPassword(userProfile) {
                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                $http.post('/reset-password',
                    userProfile)
                // handle success
                    .then(function (data) {
                        var status = data.status;
                        if(status){
                            deferred.resolve();
                        } else {
                            Flash.closeFlash();
                            Flash.create('danger', "Reset password failed!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                            deferred.reject();
                        }
                    })
                    // handle error
                    .catch(function (data) {
                        Flash.clear();
                        Flash.create('danger', "Reset password failed!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;
            }

            function changePassword(userProfile) {
                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                $http.post('/change-password',
                    userProfile)
                // handle success
                    .then(function (data) {
                        var status = data.status;
                        if(status){
                            console.log("--> change password Good !");
                            deferred.resolve();
                        } else {
                            Flash.closeFlash();
                            Flash.create('danger', "Change password failed!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                            deferred.reject();
                        }
                    })
                    // handle error
                    .catch(function (data) {
                        Flash.clear();
                        Flash.create('danger', "Change password failed!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;
            }

            function register(username, password, firstName, lastName) {

                // create a new instance of deferred
                var deferred = $q.defer();

                // send a post request to the server
                $http.post('/register',
                    {username: username, password: password, firstName: firstName, lastName: lastName})
                // handle success
                    .then(function (data) {
                        var status = data.status;
                        if(status){
                            deferred.resolve();
                        } else {
                            Flash.closeFlash();
                            Flash.create('danger', "Can't register with us!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                            deferred.reject();
                        }
                    })
                    // handle error
                    .catch(function (data) {
                        Flash.clear();
                        Flash.create('danger', "Ooops something went wrong!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;

            }

        }]);

})();
