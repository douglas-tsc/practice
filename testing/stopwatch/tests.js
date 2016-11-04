test( "#timer should display zeros only", function() {
	reset()
  equal( $('#timer').text(), '00:00:00');
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

test("startTimer accepts optional startTime timestamp parameter", function(){
	var timestamp = new Date().getTime() -10000;
	startTimer(timestamp);
	equal(window.start, timestamp, 'started the timer');
	
});

test( 'calling render() displays #timer formatted in mm:ss:cs', function(){
	var goBackInTime = (9 * 60 * 1000) + ( 8 * 1000) + (57 * 10)
	// console.log(goBackInTime);
	var timestamp = new Date().getTime() - goBackInTime;
	startTimer(timestamp);
	render();
	equal($('#timer').text(), '09:08:57', 'rendered correct time');
	reset();
});

test('the timeUpdater() updates the screen every 10 milliseconds when the start button is clicked', function(){
	$('#start').trigger("click");
 	notEqual(window.start, window.tenMillisecondUpdate);
 	reset();
});

test('timer only starts when I click start', function(){
	$( document ).ready();
	equal( $('#timer').text(), '00:00:00');
})

// test( "when I click 'start' button chages to say 'reset'", function() {
// 	$('#start').trigger("click");
// 	equal( $('#start').text(), 'Reset');		 
// });

test( "clicking stop stops timer counting", function() {

	var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( startTimer(startTime), startTime);
    endTime = startTime + 2000; // manually add 1 second
    timeElapsed = endTime - startTime;
    equal( stop(endTime), timeElapsed);
	
});

// test( "stopwatch continues counting after timer stops", function() {
//     reset();
// 	// the first interval
//     var startTime   = new Date().getTime(),
//         endTime     = 0,
//         timeElapsed = 0;
//     endTime = startTime + 5000; 
//     // start the timer again
//     startTime = new Date().getTime();
//     endTime = startTime + 7000; 
//     // we stopTimer we expect to have counted a total of 12 sec (7 + 5)
//     equal( stop(endTime), 12000);
// });


