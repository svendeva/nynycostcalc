$(document).ready(function(){

	//Starts the application
    $('#logIn').click(function(){
        $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
        $('.box').animate({'opacity':'1.00'}, 300, 'linear');
        $('.backdrop, .box').css('display', 'block'); 
	});

	$('#tryk').click(function(){
		input_email = $('#email').val();
		input_password = $('#password').val();
			if (input_email == "jgc@svjo.dk" && input_password == "svendeva") {
				$('.box').animate({'opacity':'0'}, 300, 'linear',function(){
				$('.box').css('display', 'none');

				$('.box1').animate({'opacity':'.50'}, 300, 'linear');
        		$('.box1').animate({'opacity':'1.00'}, 300, 'linear');
        		$('.box1').css('display', 'block');


				});
			};
	});

	$('#project_button').click(function(){
		projectname = $('#project_name').val();
		projecttype = $('#project_type').val();
		structurearea = $('#structure_area').val();
		designlife = $('#design_life').val();
		country = $('#country').val();
		currency = $('#currency').val();
		interestrate = $('#interest_rate').val();
		inflationrate = $('#inflation_rate').val();
		date = $('#date').val();
		$('.box1').animate({'opacity':'0'}, 300, 'linear',function(){
		$('.box1').css('display', 'none');
		});
		//$('.backdrop').css('display', 'none');
		$('#logIn').hide();

		$('#newdemo').attr('checked', true);
		$('#maintdemo').attr('checked', true);
		$('#refdemo').attr('checked', true);

		$('#newcon').css('display','block');

	});

	

	$('.new_select_button').click(function(){
        if(document.getElementById('newdemo').checked) {
 			$('#newinput').hide();
 			$('#new_cost').attr("value", "143")
 			$('#new_maint_time').attr("value", "7")
 			$('#new_refurb_time').attr("value", "30")
 			$('#new_con_data').show();
 			$('.new_return_button').show();
 			console.log("New cost er nu : " + "øl");
		}
		 if(document.getElementById('newinsert').checked) {
 			$('#newinput').hide();
 			$('#new_cost').attr("value", "")
 			$('#new_maint_time').attr("value", "")
 			$('#new_refurb_time').attr("value", "")
 			$('#new_con_data').show();
 			$('.new_return_button').show();
		}
		 if(document.getElementById('newcalculate').checked) {
 			alert("This functionality is not ready yet");
		}
	});

	 $('#new_return').click(function(){
	 	$('#newinput').show();
	 	$('#new_con_data').hide();
 		$('.new_return_button').hide();
	});

	 $('.maint_select_button').click(function(){
        if(document.getElementById('maintdemo').checked) {
 			$('#maintinput').hide();
 			$('#maint_cost').attr("value", "3611863");
 			$('#maint_con_data').show();
 			$('.maint_return_button').show();
		}
		 if(document.getElementById('maintinsert').checked) {
 			$('#maintinput').hide();
 			$('#maint_cost').attr("value", "")
 			$('#maint_con_data').show();
 			$('.maint_return_button').show();
		}
		 if(document.getElementById('maintcalculate').checked) {
 			alert("This functionality is not ready yet");
		}
	});

	 $('#maint_return').click(function(){
	 	$('#maintinput').show();
	 	$('#maint_con_data').hide();
 		$('.maint_return_button').hide();
	});

	 	$('.ref_select_button').click(function(){
        if(document.getElementById('refdemo').checked) {
 			$('#refinput').hide();
 			$('#ref_cost').attr("value", "143")
 			$('#ref_maint_time').attr("value", "7")
 			$('#ref_refurb_time').attr("value", "30")
 			$('#ref_con_data').show();
 			$('.ref_return_button').show();
		}
		 if(document.getElementById('refinsert').checked) {
 			$('#refinput').hide();
 			$('#ref_cost').attr("value", "")
 			$('#ref_maint_time').attr("value", "")
 			$('#ref_refurb_time').attr("value", "")
 			$('#ref_con_data').show();
 			$('.ref_return_button').show();
		}
		 if(document.getElementById('refcalculate').checked) {
 			alert("This functionality is not ready yet");
		}
	});

	 $('#ref_return').click(function(){
	 	$('#refinput').show();
	 	$('#ref_con_data').hide();
 		$('.ref_return_button').hide();
	});



 }); 




		