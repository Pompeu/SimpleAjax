describe('Simple Ajax lib Test',  () => {

  it('should have property ajaxservice', () => {
    var ajax = ajaxPromise;        
    expect(ajax).toBeDefined();
  });

  it('should GET request recive data', done => {
    var ajax = ajaxPromise;
    var url = "http://redeconhecimentos.herokuapp.com/api/user";
    var method = "GET";
    ajax(method,url)
      .then(function(data) {
        expect(data).toBeTruthy()
        done()
      })
  });

  it('should Post request with  bad url get same error on promise', done => {
    var ajax = ajaxPromise;
    var url = "http://redeconhecimentos.herokuapp.com/1api/user";
    var method = "POST";
    var data = {
        email: "opa@opa.com",
        name: "Itacir",
        sname: "Pompeu",
        password: "12345678"
    };
    ajax(method,url,data)
      .then(data => {
        expect(data).toBeTruthy()
      },err => {
        expect(err).toBeTruthy()
        done()
      })
      
  });

  it('request should be have an have url', done => {
    var ajax = ajaxPromise;
    expect(ajax).toThrow();
    done();
  });

});
