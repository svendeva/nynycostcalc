$(document).ready(function(){

	//Show ref container
	$('#maint_calculate').click(function (){
    	if(document.getElementById('calculate').checked) {
        	$('#demonstrate').hide();
        	$('#lccinsert').hide();
        	$('#new_con_data').hide();
        	$('#maint_con_data').hide();
        	$('#ref_con_data').hide();
        	$('#lcccon').hide();
        	$('#simulate').hide();
        	//disable("calcMaintButton");
        	//&disable("calcRefurbButton");
        	disable("nb_nocoats");
        	$('#maint_spec').show();
        	$('#maint_lcccalculate').show();
        }
     });

		//ref surface preparation function selectors
	$('#ref_surf_prep').on('change', function() {
		var surfprep = document.getElementById("ref_surf_prep").value;
		$('#surfpreptag').show(); 
		$('#surfshow').show();
		$('#showplease').show();
		$('#refsurfprep_in').show();
		$('#refContSurfPrep').show();
		
		//enable("nb_nocoats");

		if(surfprep == "St 2"){
			$('#surfshow').text(surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");

		}
		if(surfprep =="Sa 1"){
			$('#surfshow').text(surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
		if(surfprep == "Sa 2½"){
			$('#surfshow').text(surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
		if(surfprep =="Sa 3"){
			$('#surfshow').text(surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
	});

	});