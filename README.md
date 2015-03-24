# SimpleAjax
Micro Lib for HttpRequest

##To use
```html
  <script src="src/js/lib/simpleajax.min.js"></script>
```
  in you index.html

##The API

how use $.service(method, URL , callback , JSbject);

you can use GET, PUT, POST or DELETE,
but for GET dont need add last parameter.

#Exemple

```js
  var url = "https://bloog-limp.herokuapp.com/api/alunos/";
  var method = "GET";

  $.ajaxservice(method, url, result);

  function result(err , data){
    if(!err) console.log(data);
  }
```

