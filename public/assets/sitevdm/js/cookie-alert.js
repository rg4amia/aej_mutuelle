function jPopup(largeur,hauteur){
	var isAlert = true;
	if (getCookie(_siteRefCookie)!==undefined) {
		if (String.trim(getCookie(_siteRefCookie)) != String.trim(_siteValueCookie)) {
			isAlert = true;
		} else {
			isAlert = false;
		}
	} else {
		isAlert = true;
	}
	if(isAlert){
		var sizeStyle = "width:"+largeur+"px;height:"+hauteur+"px;margin-top:-"+hauteur/2+"px;margin-left:-"+largeur/2+"px;";
		var popupElement = createDivElement("id-warning-cookies","font-family: Arial,Verdana,Geneva,Helvetica,sans-serif;margin: 0px; position: fixed; width: 100%; text-align: center; background-color: #545658; opacity: 0.95;color: white; padding: 0.5em;left: 0;bottom: 0;z-index: 2000;");
		popupElement.innerHTML = htmlPopupCode();
		document.body.appendChild(popupElement);
	}
}

var _siteRefCookie = "";
var _siteValueCookie = 'popup_alert';

popup();

function popup() {
	if (document.getElementsByTagName('base').length==0) {
		_siteRefCookie = window.location.host+"/"+window.location.pathname.split("/")[1];
	} else {
		_siteRefCookie = document.getElementsByTagName('base')[0].href;
	}
	jPopup(500,240);
}

function createDivElement(id,style) {
	var divElement = document.createElement("div");
	var attrId=document.createAttribute("id");
	attrId.value=id;
	divElement.setAttributeNode(attrId);
	var attrStyle=document.createAttribute("style");
	attrStyle.value=style;
	divElement.setAttributeNode(attrStyle);
	return divElement;
}

function closeCkPopup(ensavoirplus) {
	setCookie(_siteRefCookie,_siteValueCookie,365,'/');
	document.body.removeChild(document.getElementById("id-warning-cookies"));
	return false;
}

function enSavoirPlus() {
	window.open("http:\/\/www.marseille.fr\/mentions-legales#cookie",'_blank');
	return false;
}

function htmlPopupCode() {
	var strVar="";
	strVar += "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies qui permettent le bon fonctionnement de notre site et de ses services.";
	strVar += "<a class=\"okpopup\" style=\"background-color: #b1b1b1;border-radius: 20%;color: #45453b;margin-left: 2.2em;padding: 0.2em 0.3em;text-decoration: none;\" href=\"javascript:void(0);\" onclick=\"javascript:closeCkPopup();\">OK<\/a>";
	strVar += "<a class=\"validatepopup\" style=\"margin-left:1.0em;text-decoration: none;color: #a3a397;\" href=\"javascript:void(0);\" onclick=\"javascript:enSavoirPlus();\">En Savoir Plus<\/a>";
	strVar += "<a class=\"closepopup\" style=\"font-weight: bold;float:right;margin-right:0.8em;text-decoration: none;color: white;\" href=\"javascript:void(0);\" onclick=\"javascript:closeCkPopup();\">X<\/a>";
	return strVar;
}

function setCookie(c_name,value,exdays,chemin,domaine,securite)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	document.cookie = c_name + ' = ' + escape(value) + '  ' +
    ((exdays == undefined) ? '' : ('; expires = ' + exdate.toGMTString())) +
    ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
    ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
    ((securite == true) ? '; secure' : '');
}


function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}
