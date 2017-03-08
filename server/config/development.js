'use strict';

module.exports = {
    mysql: "mysql://root:password@123@localhost/wedding_gram?reconnect=true",
    domain_name: "http://localhost:3000",
    aws: {
        id: "AKIAJ3VUX4BBAF4XXJZA",
        key: "+AwRTzS3QdwLZ/hcK0ufuvuLJMePQntviHlrkJgs",
        url: "https://nus-stackup.s3.amazonaws.com",
        bucket: "nus-stackup",
        region: "ap-southeast-1"
    },
    mailgun_key: "key-24125cce318ec427e9e994cb37d3087b",
    mailgun_domain: "sandboxe2ef77d2dea04510b84b5c1423ab1087.mailgun.org",
    register_email: {
        from: "Weddinggram User <noreply@weddinggram.sg>",
        subject: "Welcome to StackUp Weddinggram",
        email_text: "Hello! Thank you for registering with Stackup WeddingGram. Have fun !"
    },
    reset_password_email: {
        from: "noreply@weddinggram.sg",
        subject: "WeddingGram Password Reset",
        email_text: "Hello! You recently requested a link to reset your password. Please set a new password on the following link !",
        email_content: "Hello! <br>You recently requested a link to reset your password. <br>Please set a new password on the following link <br>"
    },
    port: 3000,
    seed: true,
    linkedin_key: "81xv9l7ppiocvz",
    Linkedin_secret: "LIhcEze930Dx5RmZ",
    Linkedin_callback_url: "http://localhost:3000/oauth/linkedin/callback",
    GooglePlus_key: "552301539640-morchf1e4ig6q7gtfje4fl7l35i99uiv.apps.googleusercontent.com",
    GooglePlus_secret: "JbU_KW4qhXGv8eS7_j8p7f-t",
    GooglePlus_callback_url: "http://localhost:3000/oauth/google/callback",
    Facebook_key: "1774952232780596",
    Facebook_secret: "bbd0cddf9a4605175f4d6fdfc951491e",
    Facebook_callback_url: "http://localhost:3000/oauth/facebook/callback",
    Twitter_key: "IsK3ZwAeez0hMD2Eo7GVjz8sm",
    Twitter_secret: "fiB5McI42sQxb6Q8aOYnlW2n2xSt5cgnLiVNcAlYyT7xCRhZXd",
    Twitter_callback_url: "http://localhost:3000/oauth/twitter/callback",
    Wechat_AppId: "1",
    Wechat_Name: "1",
    Wechat_AppSecret: "1",
    Wechat_Callback_Url: "http://localhost:3000/oauth/wechat/callback"
};
