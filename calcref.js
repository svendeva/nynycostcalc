$(document).ready(function(){



	//Show ref container
	/*$('#refContSurfPrep').click(function (){
		refcalcSurfPrep = $('#ref_surfprep_in').val();
		$('#ref_lcccalculate').show();
		$('#ref_surfprep_in').hide();
		$('#ref_showplease').hide();
		$('#refProjectCurrency').hide();
		$('#ref_surfpreptag').hide();
		$('#ref_surfshow').hide();
		$('#projectCurrency').hide();
		$('#refContSurfPrep').hide();
		disable("ref_surf_prep");
		$('#ref_testcalc').show();
     });*/

		//ref surface preparation function selectors
	$('#ref_surf_prep').on('change', function() {
		console.log("nu i ref først");
		var surfprep = document.getElementById("ref_surf_prep").value;
		console.log("nu i ref");
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