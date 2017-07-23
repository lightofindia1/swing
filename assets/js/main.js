$(document).ready(function(){
	sections=["intro","features","gallery","contact"]
	cs=0;
	$(window).on('mousewheel DOMMouseScroll', function(e){
		if(e.originalEvent.detail > 0) {
			//scroll down
			if(cs < (sections.length-1)){
				$("#"+sections[cs]).fadeOut();
				cs+=1;
				$("#"+sections[cs]).fadeIn();
			}
		}
		else{
			//scroll up
			if(cs > 0){
				$("#"+sections[cs]).fadeOut();
				cs-=1;
				$("#"+sections[cs]).fadeIn();
			}
		}
		return false;
	});
});