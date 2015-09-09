$(document).ready(function(){

	var blast = 0;

	//Show nb container
	$('#maint_calculate').click(function (){
    	if(document.getElementById('calculate').checked) {
        	$('#demonstrate').hide();
        	$('#lccinsert').hide();
        	$('#new_con_data').hide();
        	$('#maint_con_data').hide();
        	$('#ref_con_data').hide();
        	$('#lcccon').hide();
        	$('#simulate').hide();
        	disable("calcMaintButton");
        	disable("calcRefurbButton");
        	disable("nb_nocoats");
        	$('#maint_spec').show();
        	$('#maint_lcccalculate').show();
        }
     });

	//Show maint container
	$('#maintContSurfPrep').click(function (){
		maintcalcSurfPrep = $('#maint_surfprep_in').val();
		$('#maint_lcccalculate').show();
		$('#maint_surfprep_in').hide();
		$('#maint_showplease').hide();
		$('#maintProjectCurrency').hide();
		$('#maint_surfpreptag').hide();
		$('#maint_surfshow').hide();
		$('#projectCurrency').hide();
		$('#maintContSurfPrep').hide();
		disable("maint_surf_prep");
		$('#maint_testcalc').show();
		

     });

	//Maint surface preparation function selectors
	$('#maint_surf_prep').on('change', function() {
		var maint_surfprep = document.getElementById("maint_surf_prep").value;
		$('#maint_surfpreptag').show(); 
		$('#maint_surfshow').show();
		$('#maint_showplease').show();
		$('#maint_surfprep_in').show();
		$('#maintContSurfPrep').show();
		enable();

		if(maint_surfprep == "St 2"){
			$('#maint_surfshow').text(maint_surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
		if(maint_surfprep =="Sa 1"){
			$('#maint_surfshow').text(maint_surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
		if(maint_surfprep == "Sa 2½"){
			$('#maint_surfshow').text(maint_surfprep);

			//$('#maintProjectCurrency').text(currency + " " + "per SQM");
			$('#maintProjectCurrency').show();
		}
		if(maint_surfprep =="Sa 3"){
			$('#maint_surfshow').text(maint_surfprep);
			$('.projectCurrency').text(currency + " " + "per SQM");
		}
	});

	//NB Number of maintenance coat function selectors
	$('#maint_nocoats').on('change', function() {
		lccobj.maintsub.coats = parseInt(document.getElementById("maint_nocoats").value);
		if(lccobj.maintsub.coats ==1){
			$('.maintlines').hide();
			$('#maintline1').show();
		}
		if(lccobj.nbsub.coats ==2){
			$('.nblines').hide();
			$('#nbline1').show();
			$('#nbline2').show();
		}
		if(lccobj.nbsub.coats ==3){
			$('.nblines').hide();
			$('#nbline1').show();
			$('#nbline2').show();
			$('#nbline3').show();
		}
		if(lccobj.nbsub.coats ==4){
			$('.nblines').hide();
			$('#nbline1').show();
			$('#nbline2').show();
			$('#nbline3').show();
			$('#nbline4').show();
		}
		if(lccobj.nbsub.coats ==5){
			$('.nblines').hide();
			$('#nbline1').show();
			$('#nbline2').show();
			$('#nbline3').show();
			$('#nbline4').show();
			$('#nbline5').show();
		}
		if(lccobj.nbsub.coats ==6){
			$('#nbline1').show();
			$('#nbline2').show();
			$('#nbline3').show();
			$('#nbline4').show();
			$('#nbline5').show();
			$('#nbline6').show();
		}
	});

	//Set up input for maintenance time and refutbishment time
	$('#maint_maint_time_btn').click(function (){
		var time1 = $('#maint_maint_time').val();
		$('#maint_calc_maint_time').attr("value",time1);
		var time2 = $('#maint_refurb_time').val();
		$('#maint_calc_refurb_time').attr("value",time2);
		$('#maint_spec').hide();
		$('#ref_spec').show();
	});	

	$('#maint_testcalc').click(function (){
		console.log("nu er vi i maint_testcalc");
		if(lccobj.maintsub.coats == 1){
			lccobj.maintsub.sqmprice1 = enlinie();
			console.log("maintenance cost is : " + lccobj.maintsub.sqmprice1);
			$('#calcNewCost').attr("value",lccobj.nbsub.sqmprice1.toFixed(2));
			$('#maintline1').hide();
			disable("maint_nocoats");
			$('#maint_testcalc').hide();
			$('#mainttimes').show();
			$('#maint_time_btn').show();
		}
		if(lccobj.nbsub.coats == 2){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
		}
		if(lccobj.nbsub.coats == 3){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
		}
		if(lccobj.nbsub.coats == 4){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.sqmprice4 = firelinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
		}
		if(lccobj.nbsub.coats == 5){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.sqmprice4 = firelinie();
			lccobj.nbsub.sqmprice5 = femlinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4  + lccobj.nbsub.sqmprice5;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
		}
		if(lccobj.nbsub.coats == 6){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.sqmprice4 = firelinie();
			lccobj.nbsub.sqmprice5 = femlinie();
			lccobj.nbsub.sqmprice6 = sekslinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4  + lccobj.nbsub.sqmprice5 + lccobj.nbsub.sqmprice6;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
		}
	});

	// Calculates sqm prices and  for the selected number of lines
	function enlinie() {
		lccobj.maintsub.prod1 = $('#maint_product1').val();
		lccobj.maintsub.dft1 = parseInt($('#maint_dft1').val());
		lccobj.maintsub.price1 = parseFloat($('#maint_price1').val());
		lccobj.maintsub.solids1 = parseFloat($('#maint_solids1').val());
		lccobj.maintsub.VOC1 = parseFloat($('#maint_VOC1').val());
		lccobj.maintsub.loss1 = parseFloat($('#maint_loss1').val());
		lccobj.maintsub.applcost1 = parseFloat($('#maint_applcost1').val());
		lccobj.maintsub.spgr1 = parseFloat($('#maint_spgr1').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());

		console.log("Surfprep per sqm er : " + lccobj.maintsub.surfprepcost);

		if($('#mainttucheck1').attr('checked')) {
			lccobj.maintsub.tf1 = 0;

			lccobj.maintsub.blastcost  = (structurearea*(lccobj.maintsub.area/100)*1.1)*lccobj.maintsub.surfprepcost;

			
			lccobj.maintsub.pricearea1 = ((lccobj.maintsub.dft1*lccobj.maintsub.price1*lccobj.maintsub.loss1)/(lccobj.maintsub.solids1*10))*structurearea* (lccobj.maintsub.area/100)*1.1;
			console.log("maint price per sqm :" + lccobj.maintsub.pricearea1);
			
			lccobj.maintsub.area1 = structurearea*(lccobj.maintsub.area/100)*1.1;
			console.log("maint sub area1" + lccobj.maintsub.area1);
		}







		if($('#maintfccheck1').attr('checked')) {
			lccobj.maintsub.tf1 = 1;
				
			lccobj.maintsub.pricearea1 = ((lccobj.maintsub.dft1*lccobj.maintsub.price1*lccobj.maintsub.loss1)/(lccobj.maintsub.solids1*10))*lccobj.area;
			
			lccobj.maintsub.area1 = lccobj.area;
		}

		lccobj.maintsub.price = lccobj.maintsub.area1*88 + lccobj.maintsub.pricearea1*lccobj.maintsub.area1+lccobj.maintsub.area1*4;








		lccobj.maintsub.sqmprice1= parseInt(calcSurfPrep) + ((lccobj.maintsub.dft1*lccobj.maintsub.price1*lccobj.maintsub.loss1)/(lccobj.maintsub.solids1*10)) + lccobj.maintsub.applcost1;
		return lccobj.maintsub.sqmprice1;
	}



});