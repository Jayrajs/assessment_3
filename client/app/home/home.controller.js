(function () {
    angular
        .module("weddingGramApp")
        .controller("HomePageAppCtrl", ["$q", "AuthFactory", "$rootScope", "$state", HomePageAppCtrl]);

    function HomePageAppCtrl($q, AuthFactory, $rootScope, $state){
        var vm = this;

        AuthFactory.getUserStatus(function(result){
            vm.isUserLogon = result;
        });
        vm.isUserLogon = AuthFactory.isLoggedIn();
        $rootScope.$watch('user', function() {
        	console.log(vm.isUserLogon);
                console.log($state.$current.url);
		if($state.$current.url != "" && !vm.isUserLogon){
			$state.go('SignIn');
		}
    	});
 

        var defer = $q.defer();
        vm.err = null;
    }

})();
