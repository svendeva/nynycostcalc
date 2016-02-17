$(document).ready(function(){

        $("#insert").click(function () {
        	if(document.getElementById('insert').checked) {
        		console.log("nu fjernes nb calc fra insert");
				$('#nb_spec').hide();
				$('#nb_lcccalculate').hide();
				$('#lcccon').hide();
        		$('#specification').hide();
	        	$('#demonstrate').hide();
	        	$('#lcccalculate').hide();
	        	$('#lccinsert').show();
	        	$('#new_calc_data').show();
	        	$('#maint_calc_data').show();
	        	$('#refurb_calc_data').show();
	        	$('#simulate').show();
     		}
        });
        
        $("#demo").click(function (){
        	if(document.getElementById('demo').checked) {
        		console.log("nu fjernes nb calc");
				$('#nb_spec').hide();
				$('#nb_lcccalculate').hide();
        		$('#specification').hide();
	        	$('#lccinsert').hide();
	        	$('#lcccalculate').hide();
	        	$('#demonstrate').show();
	        	$('#new_con_data').show();
	        	$('#maint_con_data').show();
	        	$('#ref_con_data').show();
	        	$('#simulate').show();
        	}
    	});

    	 $("#calcsim").click(function (){
        	console.log("nu er vi så i calcsim functionen");
        	$('#simulate').show();
    	});

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

	$('#projectSim').click(function(){
		$('.box1').animate({'opacity':'.50'}, 300, 'linear');
		$('.box1').animate({'opacity':'1.00'}, 300, 'linear');
		$('.box1').css('display', 'block');
		$('#newcon').hide();
		$('#lcccon').hide();
	});
 }); 




		