describe('Simple Ajax lib Test', function() {

  it('should have property ajaxservice', function () {
    var ajax = $;        
    expect(ajax).toBeDefined();
    expect(ajax.ajaxservice).toBeDefined();
  });

  it('should GET request recive true', function (done) {
    var ajax = $;
    var url = "https://bloog-limp.herokuapp.com/api/alunos/";
    var method = "GET";

    ajax.ajaxservice(method, url, function(err , data) {
      expect(err).toBeNull();
      expect(data).toBeTruthy();
      data.forEach(function(aluno) {
        expect(aluno.name).toBeTruthy();
      })      
      done();
    });

  });

  it('should recive http request', function (done) {
    var ajax = $;
    var url = null;
    var method = "GET";
    ajax.ajaxservice(method, url, function(err , data) {
      expect(err).toBeTruthy();
      expect(data).toBeNull();
      done();
    });  
  });

});