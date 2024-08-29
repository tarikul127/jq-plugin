/*==================== js ================  */







/* ===================jq ===================*/
$(document).ready(function(){
// ex 1
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ex 2
$('.counter2').countdown360({
      radius      : 60,
      seconds     : 100,
      fontColor   :'#FFFFFF',
      onComplete  :function () { console.log('done') }

    });
// ex 3
$(".incremental-counter").incrementalCounter({

  "digits": 4

});




});

 