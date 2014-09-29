//KREATIVKOMBINAT GbR //www.kreativkombinat.de //info@kreativkombinat.de					

//About
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupKollektion();
					disablePopupContact();
					disablePopupNews();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});


//Kollektion
			var popupKollektionStatus = 0;
			
			function loadPopupKollektion(){
				if(popupKollektionStatus==0){
					$("#popupKollektion").fadeIn("slow");
					popupKollektionStatus = 1;
				}
			}
			
			function disablePopupKollektion(){
				if(popupKollektionStatus==1){
					$("#popupKollektion").fadeOut("slow");
					popupKollektionStatus = 0;
				}
			}
			
			function centerPopupKollektion(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupKollektionHeight = $("#popupKollektion").height();
				var popupKollektionWidth = $("#popupKollektion").width();
				$("#popupKollektion").css({
					"position": "absolute",
					"top": windowHeight/2-popupKollektionHeight/2,
					"left": windowWidth/2-popupKollektionWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupKollektion").fadeOut();
				popupKollektionStatus = 0;
				$("#Kollektion").click(function(){
				$("#popupKollektion").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();
					disablePopupNews();					
					centerPopupKollektion();
					loadPopupKollektion();
				    $("#popupKollektion").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupKollektionClose").click(function(){
					disablePopupKollektion();
				});
				$("#bg").click(function(){
					disablePopupKollektion();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupKollektion();
			});
			});


//B2b
			var popupB2bStatus = 0;
			
			function loadPopupB2b(){
				if(popupB2bStatus==0){
					$("#popupB2b").fadeIn("slow");
					popupB2bStatus = 1;
				}
			}
			
			function disablePopupB2b(){
				if(popupB2bStatus==1){
					$("#popupB2b").fadeOut("slow");
					popupB2bStatus = 0;
				}
			}
			
			function centerPopupB2b(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupB2bHeight = $("#popupB2b").height();
				var popupB2bWidth = $("#popupB2b").width();
				$("#popupB2b").css({
					"position": "absolute",
					"top": windowHeight/2-popupB2bHeight/2,
					"left": windowWidth/2-popupB2bWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupB2b").fadeOut();
				popupB2bStatus = 0;
				$("#B2b").click(function(){
				$("#popupB2b").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();
					disablePopupNews();					
					centerPopupB2b();
					loadPopupB2b();
				    $("#popupB2b").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupB2bClose").click(function(){
					disablePopupB2b();
				});
				$("#bg").click(function(){
					disablePopupB2b();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupB2b();
			});
			});


//News
			var popupNewsStatus = 0;
			
			function loadPopupNews(){
				if(popupNewsStatus==0){
					$("#popupNews").fadeIn("slow");
					popupNewsStatus = 1;
				}
			}
			
			function disablePopupNews(){
				if(popupNewsStatus==1){
					$("#popupNews").fadeOut("slow");
					popupNewsStatus = 0;
				}
			}
			
			function centerPopupNews(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupNewsHeight = $("#popupNews").height();
				var popupNewsWidth = $("#popupNews").width();
				$("#popupNews").css({
					"position": "absolute",
					"top": windowHeight/2-popupNewsHeight/2,
					"left": windowWidth/2-popupNewsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupNews").fadeOut();
				popupNewsStatus = 0;
				$("#News").click(function(){
				$("#popupNews").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupKollektion();					
					disablePopupContact();					
					centerPopupNews();
					loadPopupNews();
				    $("#popupNews").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupNewsClose").click(function(){
					disablePopupNews();
				});
				$("#bg").click(function(){
					disablePopupNews();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupNews();
			});
			});


//Sales
			var popupSalesStatus = 0;
			
			function loadPopupSales(){
				if(popupSalesStatus==0){
					$("#popupSales").fadeIn("slow");
					popupSalesStatus = 1;
				}
			}
			
			function disablePopupSales(){
				if(popupSalesStatus==1){
					$("#popupSales").fadeOut("slow");
					popupSalesStatus = 0;
				}
			}
			
			function centerPopupSales(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupSalesHeight = $("#popupSales").height();
				var popupSalesWidth = $("#popupSales").width();
				$("#popupSales").css({
					"position": "absolute",
					"top": windowHeight/2-popupSalesHeight/2,
					"left": windowWidth/2-popupSalesWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupSales").fadeOut();
				popupSalesStatus = 0;
				$("#Sales").click(function(){
				$("#popupSales").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupKollektion();
					disablePopupNews();					
					centerPopupSales();
					loadPopupSales();
				    $("#popupSales").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupSalesClose").click(function(){
					disablePopupSales();
				});
				$("#bg").click(function(){
					disablePopupSales();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupSales();
			});
			});


//Contact
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupKollektion();
					disablePopupNews();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});


//Impressum
			var popupImpressumStatus = 0;
			
			function loadPopupImpressum(){
				if(popupImpressumStatus==0){
					$("#popupImpressum").fadeIn("slow");
					popupImpressumStatus = 1;
				}
			}
			
			function disablePopupImpressum(){
				if(popupImpressumStatus==1){
					$("#popupImpressum").fadeOut("slow");
					popupImpressumStatus = 0;
				}
			}
			
			function centerPopupImpressum(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupImpressumHeight = $("#popupImpressum").height();
				var popupImpressumWidth = $("#popupImpressum").width();
				$("#popupImpressum").css({
					"position": "absolute",
					"top": windowHeight/2-popupImpressumHeight/2,
					"left": windowWidth/2-popupImpressumWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupImpressum").fadeOut();
				popupImpressumStatus = 0;
				$("#impressum").click(function(){
				$("#popupImpressum").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupKollektion();
					disablePopupNews();					
					centerPopupImpressum();
					loadPopupImpressum();
				    $("#popupImpressum").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupImpressumClose").click(function(){
					disablePopupImpressum();
				});
				$("#bg").click(function(){
					disablePopupImpressum();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupImpressum();
			});
			});