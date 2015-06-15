$(function(){
	
	var note = $('#note'),
		ts = new Date(2014, 11, 12),
		wedding = true;
	
	if((new Date()) > ts){
		wedding = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			if(wedding){			
				message += days + " day" + ( days==1 ? '':'s' ) + ", ";
				message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
				message += "left until our marriage";
			}
			else {
				message += "Countdown Expired!";
			}
			note.html(message);
		}
	});
	
});
