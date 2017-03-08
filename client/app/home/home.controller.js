(function () {
    angular
        .module("weddingGramApp")
        .controller("HomePageAppCtrl", ["$q", "AuthFactory", "$rootScope", "$state", "$location", HomePageAppCtrl]);

    function HomePageAppCtrl($q, AuthFactory, $rootScope, $state, $location){
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

        vm.isActive = function (viewLocation) {
            //console.log(viewLocation);
            console.log($location.path());
            return viewLocation === $location.path();
        };
    }

})();
