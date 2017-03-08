(function(){

    angular
        .module("weddingGramApp")
        .controller("ChangePasswordCtrl", ["$state", "UserAPI", "AuthFactory", "Flash", ChangePasswordCtrl]);

    function ChangePasswordCtrl($state, UserAPI, AuthFactory, Flash){
        var vm = this;
        vm.user = {};
        vm.changePassword  = changePassword;
        
        initForm(vm);
        
        UserAPI.getLocalProfile().then(function(result){
            //console.log(result.data);
            vm.localProfile = result.data;
            console.log(vm.localProfile);
            vm.user.email = vm.localProfile.email; 
        });

        function initForm(vm){
            vm.user.curr_password = "";
            vm.user.NewPassword = "";
            vm.user.ConfirmPassword = "";
        }
        
        function changePassword(){
            console.log("Change Password ...");
            AuthFactory.changePassword(vm.user)
                .then(function () {
                    console.log("Why failing ?");
                    Flash.create('info', "Password changed.", 0, {class: 'custom-class', id: 'custom-id'}, true);
                    $state.go("ChangePassword");
                }).catch(function (error) {
                    console.error("Failed in changing password !");
                    console.error(error);
                });
        }
    }
})();
