self.port.on("lang", function(lang) {
	console.log(lang);
	console.log(window.location.href);
	document.cookie = "googtrans=/auto/" + lang;
});
	function googleTranslateElementInit() {
	  new google.translate.TranslateElement({layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
	}
	var d = document, b = document.body, script = document.createElement('script'), div = document.createElement("div");
	script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
	div.id = "google_translate_element";
	div.setAttribute("class", "translate-box");
	d.getElementsByTagName("head")[0].appendChild(script);
	b.appendChild(div);