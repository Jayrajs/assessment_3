(function () {
    angular
        .module("weddingGramApp")
        .config(weddingGramAppConfig);
    weddingGramAppConfig.$inject = ["$stateProvider","$urlRouterProvider"];

    function weddingGramAppConfig($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('init',{
                url : '/',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/users/login.html"
                    }
                },
                controller : 'LoginCtrl',
                controllerAs : 'ctrl'
            })
            .state("SignIn", {
                url: "/signIn",
                views: {
                    "content": {
                        templateUrl: "../app/users/login.html"
                    }
                },
                controller : 'LoginCtrl',
                controllerAs : 'ctrl'
            })
            .state("SignUp", {
                url: "/signUp",
                views: {
                    "content": {
                        templateUrl: "../app/users/register.html"
                    }
                },
                controller : 'RegisterCtrl',
                controllerAs : 'ctrl'
            })
            .state("ResetPassword", {
                url: "/ResetPassword",
                views: {
                    "content": {
                        templateUrl: "../app/users/reset-password.html"
                    }
                },
                controller : 'ResetPasswordCtrl',
                controllerAs : 'ctrl'
            })
            .state("MyAccount", {
                url: "/MyAccount",
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/profile/profile.html"
                    }
                },
                resolve: {
			authenticated: function (AuthFactory){
						console.log("authenticated ?");
						console.log(AuthFactory.isLoggedIn());
						return AuthFactory.isLoggedIn();
				       }
		 },
                controller : 'MyAccountCtrl',
                controllerAs : 'ctrl'
            })
            .state("ChangePassword", {
                    url: "/ChangePassword",
                    views: {
                        "nav": {
                            templateUrl: "../app/home/navigation.html"
                        },
                        "content": {
                            templateUrl: "../app/profile/changePassword.html"
                        }
                    },
                    resolve: {
                authenticated: function (AuthFactory){
                            console.log("authenticated ?");
                            console.log(AuthFactory.isLoggedIn());
                            return AuthFactory.isLoggedIn();
                        }
            },
                    controller : 'ChangePasswordCtrl',
                    controllerAs : 'ctrl'
                })
            .state('weddinggram',{
                url : '/weddinggram',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/home/wedding-gram.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'PostListCtrl',
                controllerAs : 'ctrl'
            })
            .state('aboutus',{
                url : '/aboutus',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/home/aboutus.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'AboutUsCtrl',
                controllerAs : 'ctrl'
            })
            .state('guests',{
                url : '/guests',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/home/guest.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'GuestListCtrl',
                controllerAs : 'ctrl'
            })
            .state('seatings',{
                url : '/seatings',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/home/seatings.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'SeatingsCtrl',
                controllerAs : 'ctrl'
            })
            .state('profile',{
                url : '/profile',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/profile/profile.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'PostListCtrl',
                controllerAs : 'ctrl'
            })
            .state('back',{
                url : '/back',
                templateUrl :'./app/users/login.html',
                controller : 'PostListCtrl',
                controllerAs : 'ctrl'
            })
            .state('comments',{
                url : '/comments/:data',
                views: {
                    "nav": {
                        templateUrl: "../app/home/navigation.html"
                    },
                    "content": {
                        templateUrl: "../app/comment/comment.html"
                    }
                },
                resolve: {
                        authenticated: function (AuthFactory){
                                                console.log("authenticated ?");
                                                console.log(AuthFactory.isLoggedIn());
                                                return AuthFactory.isLoggedIn();
                                       }
                 },
                controller : 'CommentDetailCtrl',
                controllerAs : 'ctrl'
            })

        $urlRouterProvider.otherwise("/signIn");


    }
})();
