(function () {
    angular
        .module("weddingGramApp")
        .controller("PostListCtrl", ["PostAPI", "$http", "$scope",  PostListCtrl]);

    function PostListCtrl(PostAPI, $http, $scope) {
        var self = this;

        $scope.$on("updateList",function(){
   		console.log("refresh list");
                PostAPI
            	  .me()
                  .then(function (response) {
                	self.posts = response.data;
           	 })
            	  .catch(function (err) {
                	console.log(err);
            	 });
	});

        PostAPI
            .me()
            .then(function (response) {
                self.posts = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });

        self.like = function (post) {
            var likeUrl = "/api/posts/" + post.id + "/like";

            $http.post(likeUrl)
                .then(function () {
                    post.likeCount++;
                })
                .catch(function () {

                });
        };

    }
})();
