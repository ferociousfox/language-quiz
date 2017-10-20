$(function(){
  $('#survey').submit(function(event){
    event.preventDefault();

    var firstQuestion = $("input:radio[name=question1]:checked").val();
    var secondQuestion =$("input:radio[name=question2]:checked").val();
    $('#result').removeClass("show");

    if(firstQuestion + secondQuestion === 'aa'){
      $('#result').addClass("show");
      $('.card-title').text("CSS");
      $('p').text('CSS is the language for describing the presentation of Web pages, including colors, layout, fonts, and other stylistic choices. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, and printers.');
    } else if(firstQuestion + secondQuestion === 'ab'){
      $('#result').addClass("show");
      $('.card-title').text("Java");
      $('p').text('Java is used in everything from high-performance process building to android user interfaces. Because Java has neen very popular for a very long time, it is also a very high-demand language.');
    } else if(firstQuestion + secondQuestion === 'ba'){
      $('#result').addClass("show");
      $('.card-title').text("RUBY");
      $('p').text('Ruby is used to build interactive web pages and apps. If an app involves users creating accounts, entering information, and interacting with dynamic content, there is a good chance it is built with Ruby.');
    } else if(firstQuestion + secondQuestion === 'bb'){
      $('#result').addClass("show");
      $('.card-title').text("PHP");
      $('p').text('PHP is best known for its use in content management systems like wordpress and Drupal. If you are keen to work for a fast paced ageny that builds websites for lots of clients, or maintain the security and stability of a huge complex of government websites, then PHP is for you.')
    };
  });
});
