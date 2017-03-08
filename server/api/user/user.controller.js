var User = require("../../database").User;
var AuthProvider = require("../../database").AuthProvider;
var bcrypt   = require('bcryptjs');
var config = require("../../config");
var api_key = config.mailgun_key;
var domain = config.mailgun_domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require('mailcomposer');

exports.get = function (req, res) {
    User
        .findById(req.params.id)
        .then(function (user) {

            if (!user) {
                handler404(res);
            }

            res.json(user);
        })
        .catch(function (err) {
            handleErr(res, err);
        });
};

exports.register = function(req, res) {
    if(!req.body.password === req.body.confirmpassword) {
        return res.status(500).json({
            err: err
        });
    }
    console.log();
    var hashpassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
    User.findOrCreate({where: {email: req.body.username,},defaults: {
        username: req.body.username,
        email: req.body.username,
        password: hashpassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName}})
        .spread(function(user, created) {
            if(created){
                user.password = "";
                res.status(200);
                var data = {
                from: config.register_email.from,
                to: user.email,
                subject: config.register_email.subject,
                text: config.register_email.email_text
                };
                
                mailgun.messages().send(data, function (error, body) {
                    console.log(body);
                });
                returnResults(user,res);
            }else{
                user.password = "";
                handleErr(res);
            }
        }).error(function(error){
            handleErr(res, err);
    });
};

exports.list = function (req, res) {
    User
        .findAll()
        .then(function (users) {
            res.json(users);
        })
        .catch(function (err) {
            handleErr(res, err);
        });
};

exports.resetPasswd = function (req, res) {
    console.log(req.body.email);
    User.findOne({where: {email: req.body.email}})
        .then(function(result) {
            var whereClause = {};
            var reset_password_token = bcrypt.hashSync(req.body.email, bcrypt.genSaltSync(8), null);
            whereClause.email = req.body.email;

            User
                .update({ reset_password_token: reset_password_token, 
                          reset_password_sent_at: new Date()},
                {where:  whereClause}
            ).then(function(result){
                res.json(result);
            }).catch(function(err){
                console.log(err);
                res
                    .status(500)
                    .json(err);
            })    

            var mail = mailcomposer({
                    from: config.reset_password_email.from,
                    to: req.body.email,
                    subject: config.reset_password_email.subject,
                    text: config.reset_password_email.email_text,
                    html: config.reset_password_email.email_content 
                        + config.domain_name + "/home.html#!/ChangeNewpassword?token=" 
                        + reset_password_token
                });
                
                mail.build(function(mailBuildError, message) {
                    var dataToSend = {
                        to: req.body.email,
                        message: message.toString('ascii')
                    };
                
                    mailgun.messages().sendMime(dataToSend, function (sendError, body) {
                        if (sendError) {
                            console.log(sendError);
                            return;
                        }
                    });
                });    
            
        }).catch(function (err) {
        console.error(err);
        handleErr(res, err);
    });
};

exports.changePasswd = function (req, res) {
    console.log(req.body.email);
    console.log(req.body.curr_password);
    console.log(req.body.NewPassword);
    console.log(req.body.ConfirmPassword);
    
    User.findOne({where: {email: req.body.email}})
        .then(function(result) {
            var whereClause = {};
            var hashPassword = bcrypt.hashSync(req.body.NewPassword, bcrypt.genSaltSync(8), null);
            whereClause.email = req.body.email;
            console.log(result.sign_in_count);
            if(bcrypt.compareSync(req.body.curr_password , result.password)){
                User
                    .update({ password: hashPassword, 
                            sign_in_count: (result.sign_in_count +1)},
                    {where:  whereClause}
                ).then(function(result){
                    console.log("--->");
                    res.status(202).json(result);
                }).catch(function(err){
                    console.log(err);
                    res
                        .status(500)
                        .json(err);
                })
            }
        }).catch(function (err) {
            console.error(err);
            handleErr(res, err);
        });
};

exports.profile = function (req, res) {
    User.findOne({where: {email: req.user.email}})
        .then(function(result) {
            res.json(result);
        }).catch(function (err) {
        console.error(err);
        handleErr(res, err);
    });
};

exports.profiles = function (req, res) {
    AuthProvider.findAll({where: {userId: req.user.id}})
        .then(function(result) {
            res.status(200).json(result);
        }).catch(function (err) {
        console.error(err);
        handleErr(res, err);
    });
};

exports.create = function (req, res) {
    User
        .create(req.body)
        .then(function (user) {
            res.json(user);
        })
        .catch(function (err) {
            handleErr(res, err);
        });
};

exports.update = function (req, res) {
    User
        .findById(req.params.id)
        .then(function (user) {

            if (!user) {
                handler404(res);
            }

            res.json(user);
        })
        .catch(function (err) {
            handleErr(res, err);
        });
};

exports.remove = function (req, res) {
    User
        .findById(req.params.id)
        .then(function (user) {
            if (!user) {
                handler404(res);
            }

            res.json(user);
        })
        .catch(function (err) {
            handleErr(res, err);
        });
};


function handleErr(res) {
    handleErr(res, null);
}


function handleErr(res, err) {
    console.log(err);
    res
        .status(500)
        .json({
            error: true
        });
}

function handler404(res) {
    res
        .status(404)
        .json({message: "User not found!"});
}

function returnResults(results, res) {
    res.send(results);
}