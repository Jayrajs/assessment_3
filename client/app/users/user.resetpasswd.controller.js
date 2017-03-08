/**
 * Created by phangty on 10/11/16.
 */
(function () {
    angular
        .module("weddingGramApp")
        .controller("ResetPasswordCtrl", ["$state", "AuthFactory", "Flash", ResetPasswordCtrl]);

    function ResetPasswordCtrl($state, AuthFactory, Flash){
        var vm = this;

        vm.resetPassword = function () {
            AuthFactory.resetPassword(vm.user)
                .then(function (result) {
                    Flash.create('info', "Password reset.", 0, {class: 'custom-class', id: 'custom-id'}, true);
                }).catch(function () {
                    console.error("Failed in reset password !");
                });
        };
    }
})();