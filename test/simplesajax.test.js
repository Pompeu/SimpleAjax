'use strict';

describe('Simple Ajax lib Test',  () => {

  it('should have property ajaxservice', () => {
    const ajax = ajaxPromise;
    expect(ajax).toBeDefined();
  });

  it('should GET request recive data', done => {
    const ajax = ajaxPromise;
    const params = {
      url: "http://redeconhecimentos.herokuapp.com/api/user",
      method: "GET"
    };

    ajax(params)
      .then(res => {
        expect(res.data.err == null).toBeTruthy();
        expect(res.data.result).toBeDefined();
        done();
      })
      .catch(done);
  });

});
