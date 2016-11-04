function startTimer(timestamp){
	clearInterval(window.tenMillisecondUpdate);
	var start =  timestamp || new Date().getTime();
	window.start = start;
	window.tenMillisecondUpdate = setInterval(render, 10);
	// $('#start').text('Reset');
	return start;


	
};

function addLeadingZero(n){
	if (n<10){
		return '0'+ n;
	}
	else{
		return '' + n;
	}
};

function render(){
	var now = new Date().getTime();
	var elapsed = now - window.start;
	var mm = Math.floor(elapsed / (60 * 1000));
	var ss =  Math.floor((elapsed - (mm * 60 * 1000))/1000);
	var cs = Math.floor((elapsed - ((mm * 60 * 1000) + (ss * 1000)))/10);
	var time = addLeadingZero(mm) + ':' + addLeadingZero(ss) + ':' + addLeadingZero(cs);
	
	$('#timer').text(time);

	
};

function reset(){
	clearInterval(window.tenMillisecondUpdate);
	$('#timer').text('00:00:00');
};

function stop(endTime){
	var now = new Date().getTime();
	var elapsed = now - window.start;
	var timeElapsed = endTime - start + elapsed;
	clearInterval(window.tenMillisecondUpdate);
    // $('#stop').hide();
    // $('#go').show();
    // $('#clear').show();
    return timeElapsed;
    var timestamp = 
    };

// function continue(){

// };



