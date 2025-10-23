// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function ($) {

	/* trigger when page is ready */
	$(document).ready(function (){

		var currentLocationPhoneNum = document.getElementById('Current_Location_Phone_Num_Val').value;
		var $location_phone_numbers = document.getElementsByClassName('location_phone_number');

		if( !!currentLocationPhoneNum )
		{
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$location_phone_numbers[0].innerHTML =
					'<a id="tel_btn" href="sms://' +
					currentLocationPhoneNum.replace(/-/g, "") +
					';?&body=I%20need%20an%20excellent%20attorney%21">' +
					currentLocationPhoneNum +
					"</a>";
			} else {
				$location_phone_numbers[0].innerHTML =
					'<a id="tel_btn" href="tel:+1-' +
					currentLocationPhoneNum +
					'">' +
					currentLocationPhoneNum +
					"</a>";
			}
		}

	});

}(window.jQuery || window.$));


//  This javascript function will toggle the link to display the location dropdown, and the location dropdown.
function ToggleLocationsDropdown() {
  var show_locations_link = document.getElementById("Show_Locations_Link");
  var locations_dropdown = document.getElementById(
    "Locations_Dropdown_Wrapper"
  );

  if (show_locations_link.style.display != "none") {
    show_locations_link.style.display = "none";
    locations_dropdown.style.display = "block";
  } else {
    show_locations_link.style.display = "block";
    locations_dropdown.style.display = "none";
  }
}

//  This javascript function will change the location text in the header, and if any other places where the office location is listed on the current page.
//  Note: Depending on which AFLC website the code below will need to be adjusted.
function SwitchLocation(location_value) {
  var location_parts = location_value.split("|");
  if (
    typeof location_parts[0] != "undefined" &&
    typeof location_parts[1] != "undefined"
  ) {
    var $location_phone_numbers = document.getElementsByClassName(
      "location_phone_number"
    );

    var i;
    for (i = 0; i < $location_phone_numbers.length; i++) {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$location_phone_numbers[i].innerHTML =
          '<a id="tel_btn" href="sms://' +
          location_parts[1].replace(/-/g, "") +
          ';?&body=I%20need%20an%20excellent%20attorney%21">' +
					location_parts[1] +
					"</a>";
			} else {
				$location_phone_numbers[i].innerHTML =
					'<a id="tel_btn" href="tel:' +
					location_parts[1] +
					'">' +
					location_parts[1] +
					"</a>";
			}
    }

    var $location_phone_locations = document.getElementsByClassName(
      "location_phone_location"
    );
    var i2;
    for (i2 = 0; i2 < $location_phone_locations.length; i2++) {
      $location_phone_locations[i2].innerHTML = location_parts[0];
    }
  }
}
