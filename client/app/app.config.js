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
                //resolve: { authenticated: AuthFactory.isLoggedIn },
                controller : 'MyAccountCtrl',
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
                //resolve: { authenticated: AuthFactory.isLoggedIn },
                controller : 'PostListCtrl',
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
                //resolve: { authenticated: AuthFactory.isLoggedIn },
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
                //resolve: { authenticated: AuthFactory.isLoggedIn },
                controller : 'CommentDetailCtrl',
                controllerAs : 'ctrl'
            })

        $urlRouterProvider.otherwise("/signIn");


    }
})();
