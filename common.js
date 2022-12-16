var showNewMenu; 
var showBagMenu;
$(document).ready(function() {

var navBar = document.getElementById('navBar');
	window.addEventListener('scroll', function () {
		var srollValue = window.scrollY;

		if (srollValue > 50) {
			navBar.classList.add('navbar-color');
		} else {
			navBar.classList.remove('navbar-color');
		}

	});

	var toggleValue = false;
	var menuDiv = document.getElementById('menubar');
	var hamBurger = document.getElementById('hamburger');
	var closeMenu = document.getElementById('closeMenu');
	var subMenuResponsiveHide = document.getElementById('subMenuResponsiveHide');
	
	showNewMenu = function() {
		toggleValue = !toggleValue;
		if (toggleValue) {
			menuDiv.style.display = 'flex';
			hamBurger.style.display = 'none';
			closeMenu.style.display = 'block';
			subMenuResponsiveHide.style.display = 'none';
			

		} else {
			menuDiv.style.display = 'none';
			hamBurger.style.display = 'block';
			closeMenu.style.display = 'none';
		    subMenuResponsiveHide.style.display = 'block'; 
		}

	}

	var toggleValue = false;
    var cart = document.getElementById('cart');
	var subMenuHide = document.getElementById('subMenuHide');
     showBagMenu = function(){
     	toggleValue = !toggleValue;
     	if(toggleValue){
     		cart.style.display = 'block'; 
			subMenuHide.style.display = 'none';
     	} else {
     	cart.style.display = 'none'; 
		subMenuHide.style.display = 'block';
         }
     } 

});
