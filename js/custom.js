var rkt_site_url = "https://www.radhakrishnatemple.net";
jQuery(function() {
	//alert(jQuery);
    console.log( "ready!" );
	
	jQuery("#custom_subscribe_form").click(function(e){
	e.preventDefault();

			console.log( "custom_subscribe_form! started" );
			var bool = 1;
			if(jQuery("#name").val()  == ''||jQuery.isNumeric(jQuery("#name").val()) ){
				jQuery('#name').addClass('error');
				bool = 0;				
			}else{
				jQuery('#name').removeClass("error");
			}
			
			if(jQuery("#phone").val()  == '' ){
				jQuery('#phone').addClass('error');
				bool = 0;				
			}else{
				jQuery('#phone').removeClass("error");
			}
			
			if(jQuery("#city").val()  == '' ){
				jQuery('#city').addClass('error');
				bool = 0;				
			}else{
				jQuery('#city').removeClass("error");
			}
			
			var email = jQuery('#email').val();
			
			var email_regex  = /^.+@[^\.].*\.[a-z]{2,}$/;
			if(!email_regex.test(email)){
				jQuery('#email').addClass('error');
				bool = 0;
			}else if(email == ''){
				jQuery('#email').addClass('error');
				bool = 0;
			}else{
				jQuery('#email').removeClass("error");
			}
			//console.log( "custom_subscribe_form! bool "+bool );
			if(bool == 1){
				jQuery("#custom_subscribe_form").prop('disabled', true);
				//console.log( "custom_subscribe_form! bool 1" );						
						var name = jQuery("#name").val();
						var email = jQuery("#email").val();
						var phone = jQuery("#phone").val();
						var city = jQuery("#city").val();
						var url = jQuery("#url").val();
						var whatsApp = 0;
						if(jQuery("#edit-join-me-to-whatsapp-group").is(":checked"))
							 whatsApp = 1;
						 
						var final_data = {uname: name,uemail:email,uphone:phone,ucity:city,uurl:url,source:"RKT HoliFest",source_url:"/holi",whatsAppFlag:whatsApp};
						//final_data = JSON.stringify(final_data).replaceAll("&", "_AND_");
						var customUrl = rkt_site_url+"/admin/serviceSubscribe";
						var register_flg = 0;
						jQuery("#submit_spinner").show();
						//var user_data = { regdata:final_data }
						jQuery.ajax({url: customUrl, method: 'POST',
						headers: {  'Access-Control-Allow-Origin': rkt_site_url },
						data: final_data,success: function(result){
							 jQuery("#failure_div").hide();
							 jQuery("#already_exists_div").hide();
							if(result.already_exists == 1) {
								jQuery('#email').addClass('error');								
								jQuery("#already_exists_div").show();
								jQuery("#submit_spinner").hide();
								jQuery("#custom_subscribe_form").prop('disabled', false);
							} else {
								jQuery("#custom_subscribe_form").prop('disabled', true);
								jQuery("#submit_spinner").hide();
								    
								   if(jQuery("#edit-join-me-to-whatsapp-group").is(":checked") && jQuery("#edit-join-me-to-whatsapp-group").attr("data-whtsgrp-id")!=''){
										var url = (navigator.userAgent.indexOf("Mobile") > 0)?"https://chat.whatsapp.com/"+jQuery("#whatsapp-grp").attr("data-whtsgrp-id"):"https://web.whatsapp.com/accept?code="+jQuery("#edit-join-me-to-whatsapp-group").attr("data-whtsgrp-id");						 
											window.open(url, '_blank');
									}								   
								   jQuery("#success_div").show();
							
									setTimeout(function() {
											location.reload();
										}, 8000);
							}
										
							},
							complete: function () {
								   
							}
						});	
			} else {
				jQuery("#failure_div").show();
			}


});

	jQuery("#custom_yoga_fest_subscribe_form").click(function(e){
	e.preventDefault();

			console.log( "custom_yoga_fest_subscribe_form! started" );
			var bool = 1;
			if(jQuery("#name").val()  == ''||jQuery.isNumeric(jQuery("#name").val()) ){
				jQuery('#name').addClass('error');
				bool = 0;				
			}else{
				jQuery('#name').removeClass("error");
			}
			
			if(jQuery("#phone").val()  == '' ){
				jQuery('#phone').addClass('error');
				bool = 0;				
			}else{
				jQuery('#phone').removeClass("error");
			}
			
			if(jQuery("#city").val()  == '' ){
				jQuery('#city').addClass('error');
				bool = 0;				
			}else{
				jQuery('#city').removeClass("error");
			}
			
			var email = jQuery('#email').val();
			
			var email_regex  = /^.+@[^\.].*\.[a-z]{2,}$/;
			if(!email_regex.test(email)){
				jQuery('#email').addClass('error');
				bool = 0;
			}else if(email == ''){
				jQuery('#email').addClass('error');
				bool = 0;
			}else{
				jQuery('#email').removeClass("error");
			}
			//console.log( "custom_subscribe_form! bool "+bool );
			if(bool == 1){
				jQuery("#custom_yoga_fest_subscribe_form").prop('disabled', true);
				//console.log( "custom_subscribe_form! bool 1" );						
						var name = jQuery("#name").val();
						var email = jQuery("#email").val();
						var phone = jQuery("#phone").val();
						var city = jQuery("#city").val();
						var url = jQuery("#url").val();
						var register_dl = jQuery("#register_dl").val();
						var whatsApp = 0;
						if(jQuery("#edit-join-me-to-whatsapp-group").is(":checked"))
							 whatsApp = 1;
						 
						var final_data = {uname: name,uemail:email,uphone:phone,ucity:city,uurl:url,source:"RKT HoliFest",source_url:"/holi",whatsAppFlag:whatsApp,register_cc_dl:register_dl};
						//final_data = JSON.stringify(final_data).replaceAll("&", "_AND_");
						var customUrl = rkt_site_url+"/admin/serviceYogaFestSubscribe";
						var register_flg = 0;
						jQuery("#submit_spinner").show();
						//var user_data = { regdata:final_data }
						jQuery.ajax({url: customUrl, method: 'POST',
						headers: {  'Access-Control-Allow-Origin': rkt_site_url },
						data: final_data,success: function(result){
							 jQuery("#failure_div").hide();
							 jQuery("#already_exists_div").hide();
							if(result.already_exists == 1) {
								jQuery('#email').addClass('error');								
								jQuery("#already_exists_div").show();
								jQuery("#submit_spinner").hide();
								jQuery("#custom_yoga_fest_subscribe_form").prop('disabled', false);
							} else {
								jQuery("#custom_yoga_fest_subscribe_form").prop('disabled', true);
								jQuery("#submit_spinner").hide();
								    
								   if(jQuery("#edit-join-me-to-whatsapp-group").is(":checked") && jQuery("#edit-join-me-to-whatsapp-group").attr("data-whtsgrp-id")!=''){
										var url = (navigator.userAgent.indexOf("Mobile") > 0)?"https://chat.whatsapp.com/"+jQuery("#whatsapp-grp").attr("data-whtsgrp-id"):"https://web.whatsapp.com/accept?code="+jQuery("#edit-join-me-to-whatsapp-group").attr("data-whtsgrp-id");						 
											window.open(url, '_blank');
									}								   
								   jQuery("#success_div").show();
							
									setTimeout(function() {
											location.reload();
										}, 8000);
							}
										
							},
							complete: function () {
								   
							}
						});	
			} else {
				jQuery("#failure_div").show();
			}


});


});