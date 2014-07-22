var controller	=	function(){

	/***********************
		Constants
	************************/
	var docObj	= {};
	var navObj	= {};
	


	/***********************
		Dev Help handlers
	************************/
	var dumpStuff	=	function(stuff, message){
		console.log('Dumping Activated - ' + message);
		console.log(stuff);
	};


	var includeJQ	=	function(){
		var script = document.createElement('script');
		script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
		script.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(script);
		dumpStuff('entered');
	};

	function loadjscssfile(filename, filetype){
	 if (filetype=="js"){ //if filename is a external JavaScript file
	  var fileref=document.createElement('script')
	  fileref.setAttribute("type","text/javascript")
	  fileref.setAttribute("src", filename)
	 }
	 else if (filetype=="css"){ //if filename is an external CSS file
	  var fileref=document.createElement("link")
	  fileref.setAttribute("rel", "stylesheet")
	  fileref.setAttribute("type", "text/css")
	  fileref.setAttribute("href", filename)
	 }
	 if (typeof fileref!="undefined")
	  document.getElementsByTagName("head")[0].appendChild(fileref)
	}

	/***********************
		Main Functions
	************************/
	var defineConstants	=	function(){
		docObj	=	$(document);
		navObj	=	$('.left-nav li');
	};

	var pageLoader	=	function(component){

		//Clear the content
		$( "#display-div-worker" ).html('');
		$( "#code-div-worker" ).text('');
		var nocache = new Date().getTime();
		//set path
		var component_path	=	component +"/" + component+".html?cache=" + nocache;
		var component_css_path	=	component +"/css/" + component+".css?cache=" + nocache;
		var component_js_path	=	component +"/js/" + component+".js?cache=" + nocache;

		dumpStuff(component_css_path, 'path dump');

		
		//HTML
		$.get( component_path, function( data ) {		
			
			//dumpStuff(data, 'complete');
//			$(data).find('[nodeName=body]').text();		
		 	$( "#display-div-worker" ).html(data);
	 		$( "#code-div-worker" ).text(data);	
		});

		//CSS
		$.get( component_css_path, function( data ) {			
			//dumpStuff(data, 'complete');		
		 	$( "#CSS-display-worker" ).text(data);
		});

		//CSS
		loadjscssfile(component_css_path, 'css');


		//CSS
		loadjscssfile(component_js_path, 'js');
		
	};

	var startEngine = function(){

		//define Constants
		defineConstants();

		//Bind elements
		connectEngineToElements();

	};

	var handleClick = function(event){
		dumpStuff(event.target.id,'click handler');
		attachCSSHandle(event.target.id);
		pageLoader(event.target.id);
	};
	
	var connectEngineToElements = function(){
		//iterate and bind to li-s
		navObj.on('click', handleClick);
	};

	var attachCSSHandle = function(targetElem){
		//iterate and bind to li-s
		navObj.find('a').removeClass('active');
		$('#'+targetElem).addClass('active');
	};



	return{
		initiateSequence: function(){
			startEngine();
		}


	};
};