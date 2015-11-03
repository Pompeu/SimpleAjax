# SimpleAjax
Micro Lib for HttpRequest
with 477 bytes.

##To use
```html
  <script src="/dist/js/simpleajax.min.js"></script>
```
  in you index.html

##The API

how use ajaxPromise(method, URL, data);

you can use GET, PUT, POST or DELETE,
but for GET mybe dont need add data param.

##Exemple

```js

  var url = "https://bloog-limp.herokuapp.com/api/alunos/";
  var method = "GET";
  var ajax = ajaxPromise;

  ajax(method, url).then(success, fail);

  function success(data){
    console.log(data);
  }

  function fail (err) {
    console.log(err);
  }

```
##how testing
+ use jasmine for testing
+  run teste with karma start

##how build
+ npm run build-prod

