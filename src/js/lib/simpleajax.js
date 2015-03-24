var $ = (function(){
  'use strict';

  var service = {};
  
  service.ajaxservice = function (method,url,callback,data) {

    var req = new XMLHttpRequest();
   
    req.open(method,url,true);     

    if(!data){
      req.send();
    }else { 
      req.setRequestHeader("Content-Type", "application/json");
      req.send(JSON.stringify(data));
    }

    req.addEventListener("load",success,false);
    req.addEventListener("error",error , false);
    
    function success() {
      if(req.status < 300 && req.readyState === 4){
        return callback(null,JSON.parse(req.response));
      }
      else if(req.status >= 300){
        return callback(new Error("Request failed: " +
                            req.statusText),null);
      }
    };

    function error() {
      return callback(new Error("Network error"),null);
    };
  };
  return service;
})();