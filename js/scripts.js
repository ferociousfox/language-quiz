$(function(){
  $('#survey').submit(function(event){
    event.preventDefault();

    var firstQuestion = $("input:radio[name=question1]:checked").val();
    var secondQuestion =$("input:radio[name=question2]:checked").val();
    $('.card').removeClass("show");

    if(firstQuestion + secondQuestion === 'aa'){
      $('#CSS').show();
      $('#JAVA').hide();
      $('#RUBY').hide();
      $('#PHP').hide();

    } else if(firstQuestion + secondQuestion === 'ab'){
      $('#JAVA').show();
      $('#CSS').hide();
      $('#RUBY').hide();
      $('#PHP').hide();

    } else if(firstQuestion + secondQuestion === 'ba'){
      $('#RUBY').show();
      $('#CSS').hide();
      $('#JAVA').hide();
      $('#PHP').hide();

    } else if(firstQuestion + secondQuestion === 'bb'){
      $('#PHP').show();
      $('#RUBY').hide();
      $('#CSS').hide();
      $('#JAVA').hide();

    };
  });
});
