(function() {
  var accordionsMenu = document.getElementsByClassName('m-accordion--animated');

	if( accordionsMenu.length > 0 && window.requestAnimationFrame) {
		for(var i = 0; i < accordionsMenu.length; i++) {(function(i){
			accordionsMenu[i].addEventListener('change', function(event){
				animateAccordion(event.target);
			});
		})(i);}

		function animateAccordion(input) {
			var bool = input.checked,
				dropdown =  input.parentNode.getElementsByClassName('sub')[0];
			
			Util.addClass(dropdown, 'sub--is-visible'); 

			var initHeight = !bool ? dropdown.offsetHeight: 0,
				finalHeight = !bool ? 0 : dropdown.offsetHeight;

			Util.setHeight(initHeight, finalHeight, dropdown, 200, function(){
				Util.removeClass(dropdown, 'sub--is-visible');
				dropdown.removeAttribute('style');
			});
		}
	}
	
}());

 $(document).ready(function(){
	$('.menu-text').click( function(e) {
		e.preventDefault(); 
		e.stopPropagation();
		$(this).parent().find('.dropdown-content').toggle();
	});
    
	$('.dropdown-content').click( function(e) {        
		e.stopPropagation();         
	});
    
	$('body').click( function() {
		$('.dropdown-content').hide();
	});
});