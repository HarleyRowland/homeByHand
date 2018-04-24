var menuShowing = false;
var basketMenuShowing = false;
var profileShowing = false;

$(document).ready(function(){

	$('#bars').click(function(){
		if(menuShowing){
			menuShowing = false;
			basketMenuShowing = false;
			profileShowing = false;
			$('#popUpMenu').hide();
			$('#popUpBasket').hide();
			$('#popUpProfile').hide();
			$('#iconsAndPopUpMenu').css("border", "solid 1px #FFFFFF")
			$('#iconsAndPopUpMenu').css("border-top", "none")
		} else {
			menuShowing = true;
			basketMenuShowing = false;
			profileShowing = false;
			$('#popUpMenu').show();
			$('#popUpBasket').hide();	
			$('#popUpProfile').hide();
			$('#iconsAndPopUpMenu').css("border", "solid 1px #D6AD10");
			$('#iconsAndPopUpMenu').css("border-top", "none");	
		}
	})

	$('#shopping-basket').click(function(){
		if(basketMenuShowing){
			menuShowing = false;
			basketMenuShowing = false;
			profileShowing = false;
			$('#popUpMenu').hide();
			$('#popUpBasket').hide();
			$('#popUpProfile').hide();
			$('#iconsAndPopUpMenu').css("border", "solid 1px #FFFFFF")
			$('#iconsAndPopUpMenu').css("border-top", "none")
		} else {
			menuShowing = false;
			basketMenuShowing = true;
			profileShowing = false;
			$('#popUpMenu').hide();
			$('#popUpBasket').show();
			$('#popUpProfile').hide();
			$('#iconsAndPopUpMenu').css("border", "solid 1px #D6AD10");
			$('#iconsAndPopUpMenu').css("border-top", "none");	
		}
	})

	$('#profile').click(function(){
		if(profileShowing){
			menuShowing = false;
			basketMenuShowing = false;
			profileShowing = false;
			$('#popUpMenu').hide();
			$('#popUpBasket').hide();
			$('#popUpProfile').hide();
			$('#iconsAndPopUpMenu').css("border", "solid 1px #FFFFFF")
			$('#iconsAndPopUpMenu').css("border-top", "none")
		} else {
			profileShowing = true;
			menuShowing = false;
			basketMenuShowing = false;
			$('#popUpMenu').hide();
			$('#popUpProfile').show();
			$('#popUpBasket').hide();	
			$('#iconsAndPopUpMenu').css("border", "solid 1px #D6AD10");
			$('#iconsAndPopUpMenu').css("border-top", "none");	
		}
	})

	$('#heart').click(function(){
		$('#popUpMenu').hide();
		$('#popUpProfile').hide();
		$('#popUpBasket').hide();
		$('#iconsAndPopUpMenu').css("border", "solid 1px #FFFFFF");
		$('#iconsAndPopUpMenu').css("border-top", "none");
	})

	$(document).click(function(e){
		if( $(e.target).closest("#iconsAndPopUpMenu").length > 0 ) {
			return false;
		}
		$('#iconsAndPopUpMenu').css("border", "solid 1px #FFFFFF")
		$('#iconsAndPopUpMenu').css("border-top", "none")
		$('#popUpMenu').hide();
		$('#popUpBasket').hide();
		$('#popUpProfile').hide();
	});
});

