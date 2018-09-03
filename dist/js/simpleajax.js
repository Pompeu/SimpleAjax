'use strict';

window.ajaxPromise = function () {

  var req = new XMLHttpRequest();

  return function ajaxparams(method, url, data, contentType) {

    data = JSON.stringify(data) || null;

    contentType = contentType || 'application/json';

    if (!url) {
      return Promise.reject('url is required!');
    } else {
      req.open(method.toUpperCase(), url, true);
    }

    req.setRequestHeader('Content-Type', contentType);
    req.send(data);

    return new Promise(function (resolve, reject) {

      req.addEventListener('load', success, false);

      function success() {

        if (req.status < 300 && req.readyState === 4) {
          return resolve(JSON.parse(req.response));
        } else if (req.status >= 300) {
          return reject({
            response: JSON.parse(req.response),
            statusText: req.statusText,
            status: req.status
          });
        }
      }
    });
  };
}();
