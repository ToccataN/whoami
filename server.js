var express = require('express'),
    app = express(),
    ip = require('request-ip'),
    locale = require('locale'),
    useragent= require("useragent");
    
    var info ={};
    
    app.get('/', function(req, res){
        var lang = new locale.Locales(req.headers["accept-language"]);
        var agent= useragent.parse(req.headers["user-agent"]);
        info.IP= ip.getClientIp(req);
        info.Language = lang.toString();
        info.OS= agent.os.toString();
        var str = "Your IP address: "+info.IP+
        " --- Your native language: "+ info.Language+" --- "+"Your Operating System: "+info.OS
        res.send(str);
    })
    
    app.listen(8080, function(){
        console.log("app on port 8080!");
    })
    
    