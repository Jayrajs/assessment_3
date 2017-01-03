/**
 * Created by phangty on 10/11/16.
 */
(function () {
    angular
        .module("weddingGramApp")
        .controller("LoginCtrl", ["$state", "AuthFactory", "Flash", 'ngProgressFactory', LoginCtrl]);

    function LoginCtrl($state, AuthFactory, Flash, ngProgressFactory){
        var vm = this;

        vm.progressbar = ngProgressFactory.createInstance();

        vm.login = function () {
            vm.progressbar.start();
            AuthFactory.login(vm.user)
                .then(function () {
                    if(AuthFactory.isLoggedIn()){
                        vm.emailAddress = "";
                        vm.password = "";
                        vm.progressbar.complete();
                        $state.go("weddinggram");
                    }else{
                        Flash.create('danger', "Ooops having issue logging in!", 0, {class: 'custom-class', id: 'custom-id'}, true);
                        vm.progressbar.stop();
                        $state.go("SignIn");
                    }
                }).catch(function () {
                vm.progressbar.stop();
                console.error("Error logging on !");
            });
        };
    }
})();