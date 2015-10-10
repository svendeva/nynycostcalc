$(document).ready(function(){



	//Show ref container
	$('#refContSurfPrep').click(function (){
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
     });

		//ref surface preparation function selectors
	$('#ref_surf_prep').on('change', function() {
		console.log("nu i ref først");
		var ref_surfprep = document.getElementById("ref_surf_prep").value;
		console.log("nu i ref");
		console.log("rwf_surfprep er : " + ref_surfprep);

		$('#ref_surfpreptag').show(); 
		$('#ref_surfprep').show();


		$('#ref_showplease').show();
		$('#ref_surfprep_in').show();
		$('#refContSurfPrep').show();
		enable("ref_nocoats");

		if(ref_surfprep == "St 2"){
			$('#ref_surfshow').text(ref_surfprep);
			$('#refProjectCurrency').show();
		}
		if(ref_surfprep =="Sa 1"){
			$('#ref_surfshow').text(ref_surfprep);
			$('#refProjectCurrency').show();
		}
		if(ref_surfprep == "Sa 2½"){
			$('#ref_surfshow').text(ref_surfprep);
			$('#refProjectCurrency').show();
		}
		if(ref_surfprep =="Sa 3"){
			$('#ref_surfshow').text(ref_surfprep);
			$('#refProjectCurrency').show();
		}
	});

});