
jQuery(document).ready(function($) {
	var barapp = getCookie("barapp");
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
			if (Drupal.settings.mobiledetect.enable_ipad==0)
			{
				return navigator.userAgent.match(/iPhone/i);
			} else {
				return navigator.userAgent.match(/iPhone|iPad/i);
			}
	        
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};


	if(isMobile.Android()) {
		if(!barapp){
			jQuery('body') .prepend('<div id="app-bar"><div id="app-close">X</div><div id="app-img"><img id="applogo" src="'+Drupal.settings.mobiledetect.url_logo+'"></div><div id="app-caption"><div class="description"><div class="description_title"><strong>Ville de Marseille</strong></div><div class="description_text">Tout Marseille dans une app</div><svg width="46px" height="10px" viewBox="0 0 46 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><g id="Group-12-Copy"><g id="Star_rating"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy-2" transform="translate(24.35294 0)"><path d="M4.7353 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.7353 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.7353 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy" transform="translate(12.17647 0)"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy-3" transform="translate(36.52941 0)"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g></g></svg></div><div class="download"><a href="'+Drupal.settings.mobiledetect.url_android+'">Télécharger</a></div></div></div>');
		}
	}
	
	if(isMobile.iOS()) {
		if(!barapp){
			jQuery('body') .prepend('<div id="app-bar"><div id="app-close">X</div><div id="app-img"><img id="applogo" src="'+Drupal.settings.mobiledetect.url_logo+'"></div><div id="app-caption"><div class="description"><div class="description_title"><strong>Ville de Marseille</strong></div><div class="description_text">Tout Marseille dans une app</div><svg width="46px" height="10px" viewBox="0 0 46 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><g id="Group-12-Copy"><g id="Star_rating"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy-2" transform="translate(24.35294 0)"><path d="M4.7353 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.7353 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.7353 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy" transform="translate(12.17647 0)"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g><g id="Star_rating-Copy-3" transform="translate(36.52941 0)"><path d="M4.73529 7.10294L1.95196 8.56623L2.48353 5.46694L0.231762 3.27201L3.34363 2.81983L4.73529 0L6.12696 2.81983L9.23883 3.27201L6.98706 5.46694L7.51863 8.56623L4.73529 7.10294Z" id="Star" fill="#FFC42A" stroke="#F5A623" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" /></g></g></svg></div><div class="download"><a href="'+Drupal.settings.mobiledetect.url_ios+'">Télécharger</a></div></div></div>');
		}
	}
	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		}
		else
		{
			begin += 2;
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
			end = dc.length;
			}
		}
		return decodeURI(dc.substring(begin + prefix.length, end));
	}
	
	
	
	jQuery( "#app-close" ).click(function() {
		jQuery('#app-bar').hide();
		document.cookie = "barapp=1";
	});
});




