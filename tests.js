test( "#timer shoudl display zeros only", function() {
  equal( $('#timer').text(), '00:00:00', 'kaboom');
});

test( "#start button exist", function() {
  equal( $('#start').attr('value'), 'Start', 'we have a start button');
});

test( "startTimer returns a timestamp", function() {
  equal( startTimer(), new Date().getTime(), 'The timer started');
});

test("clicking start button starts startTimer function", function(){
	$('#start').trigger("click");
	equal(window.start.toString().length, 13, 'Timer started');		
});







