var bcrypt   = require('bcryptjs');
var config = require("./config");
var database = require("./database");
var User = database.User;
var Post = database.Post;

module.exports = function () {
    if (config.seed) {
        var hashpassword = bcrypt.hashSync("Password@123", bcrypt.genSaltSync(8), null);
        User
            .create({
                username: "admin",
                password: hashpassword,
                firstName: "Admin",
                lastName: "Admin",
                addressLine1: "79 02 Ayer Rajah crescent",
                addressLine2: "",
                city: "Singapore",
                email: "kenneth.phang@nus.edu.sg",
                postcode: "42312",
                isAdmin: true,
                phone: "98832587",
                google: "http://google.com",
                facebook: "http://facebook.com",
                twitter: "http://twitter.com"
            })
            .then(function (user) {
                console.log(user);
            }).catch(function () {
                console.log("Error", arguments)
            })
        
        User
            .create({
                username: "kenken64",
                password: hashpassword,
                firstName: "Kenneth",
                lastName: "Phang",
                addressLine1: "79 02 Ayer Rajah Crescent",
                addressLine2: "",
                city: "Singapore",
                email: "kenneth.phang1977@gmail.com",
                postcode: "42312",
                phone: "98832587",
                google: "http://google.com",
                facebook: "http://facebook.com",
                twitter: "http://twitter.com"
            })
            .then(function (user) {
                Post
                    .create({
                        caption: "Looks like a scene from Hollywood movie!",
                        url: "1477564902212_4.jpg"
                    })
                    .then(function (post) {
                        user
                            .addPost(post)
                            .then(function () {
                                console.log("Done");
                            })
                            .catch(function () {
                            });
                    })
                    .catch(function () {

                    });Post
                    .create({
                        caption: "Aaaaah!!!!!",
                        url: "1477564908055_5.jpg"
                    })
                    .then(function (post) {
                        user
                            .addPost(post)
                            .then(function () {
                                console.log("Done");
                            })
                            .catch(function () {
                            });
                    })
                    .catch(function () {

                    });Post
                    .create({
                        caption: "The DAY!",
                        url: "1477564913469_6.jpg"
                    })
                    .then(function (post) {
                        user
                            .addPost(post)
                            .then(function () {
                                console.log("Done");
                            })
                            .catch(function () {
                            });
                    })
                    .catch(function () {

                    });Post
                    .create({
                        caption: "Cute :*",
                        url: "1477564919836_7.jpg"
                    })
                    .then(function (post) {
                        user
                            .addPost(post)
                            .then(function () {
                                console.log("Done");
                            })
                            .catch(function () {
                            });
                    })
                    .catch(function () {

                    });
            })
            .catch(function () {
                console.log("Error", arguments)
            })

    }
};