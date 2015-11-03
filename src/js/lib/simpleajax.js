var ajaxPromise = (function(){
  'use strict';
  var req =  new XMLHttpRequest();

  return function(method, url, data, contentType) {
    var req =  new XMLHttpRequest();
    var data = JSON.stringify(data) || null

    contentType = contentType || "application/json";

    if(!url) throw "url is required!"
    else req.open(method.toUpperCase(),url,true)
    req.setRequestHeader("Content-Type", contentType);
    req.send(data);
    
    return new Promise( (resolve, reject) => {
      req.addEventListener("load",success,false);
      function success() {
        if(req.status < 300 && req.readyState === 4){
          return resolve(JSON.parse(req.response))
        }
        else if(req.status >= 300){
          return reject({ response : req.statusText, status : req.status})
        }
      }
    });
  } 
})();
