'use strict';

describe('Simple Ajax lib Test',  () => {

  it('should have property ajaxservice', () => {
    let ajax = ajaxPromise;
    expect(ajax).toBeDefined();
  });

  it('should GET request recive data', done => {
    let ajax = ajaxPromise;
    let url = "http://redeconhecimentos.herokuapp.com/api/user";
    let method = "GET";

    ajax(method,url)
      .then(function(data) {
        expect(data).toBeTruthy();
        done();
      });
  });

  it('should Post request with  bad url get same error on promise', done => {
    let ajax = ajaxPromise,
      url = "http://redeconhecimentos.herokuapp.com/1api/user",
      method = "POST",
      data = {
        email: "opa@opa.com",
        name: "Itacir",
        sname: "Pompeu",
        password: "12345678"
      };

      ajax(method,url,data)
        .then(data => {
          expect(data).toBeTruthy();
        },err => {
          expect(err).toBeTruthy();
          done();
        });

  });

  it('request should the url is required!', done => {
    let ajax = ajaxPromise;
    ajax()
      .catch(err => {
        expect(err).toBeDefined() ;
        expect(err).toEqual('url is required!');
        done();
      });
  });

});
