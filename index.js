$(document).ready( function(){

   $('form').on('submit', function(event){
     event.preventDefault();
     var city = $('#city-type').val();

     if (city === 'NYC' || city === 'New York' || city === 'new york')  {
      console.log("got into the conditional");
       $('body').addClass('nyc');
       var str = 'NEW YORK';
       var res = str.toLowerCase();
         }

     if (city === 'SF' || city === 'San Fransicso' || city === 'San Fran' || city === 'Bay Area')  {
      console.log("got into the conditional again");
      $('body').addClass('sf');
           }

     if (city === 'LA' || city === 'Los Angeles' || city === 'LAX')  {
      console.log("got into the conditional again!");
      $('body').addClass('la');
           }

     if (city === 'Austin' || city === 'ATX')  {
      console.log("got into the conditional again!!");
      $('body').addClass('austin');
           }

     if (city === 'SYD' || city === 'Sydney')  {
      console.log("got into the conditional again!!");
      $('body').addClass('sydney');
           }

   });


});
