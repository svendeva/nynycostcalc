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
			$('#maintProjectCurrency').show();
		}
		if(maint_surfprep =="Sa 1"){
			$('#maint_surfshow').text(maint_surfprep);
			$('#maintProjectCurrency').show();
		}
		if(maint_surfprep == "Sa 2½"){
			$('#maint_surfshow').text(maint_surfprep);
			$('#maintProjectCurrency').show();
		}
		if(maint_surfprep =="Sa 3"){
			$('#maint_surfshow').text(maint_surfprep);
			$('#maintProjectCurrency').show();
		}
	});

	//NB Number of maintenance coat function selectors
	$('#maint_nocoats').on('change', function() {
		lccobj.maintsub.coats = parseInt(document.getElementById("maint_nocoats").value);

		if(lccobj.maintsub.coats ==1){
			$('.maintlines').hide();
			$('#maintline1').show();
		}
		if(lccobj.maintsub.coats ==2){
			$('.maintlines').hide();
			$('#maintline1').show();
			$('#maintline2').show();
		}
		if(lccobj.maintsub.coats ==3){
			$('.maintlines').hide();
			$('#maintline1').show();
			$('#maintline2').show();
			$('#maintline3').show();
		}
		if(lccobj.maintsub.coats ==4){
			$('.maintlines').hide();
			$('#maintline1').show();
			$('#maintline2').show();
			$('#maintline3').show();
			$('#maintline4').show();
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

	$('#maint_testcalc').click(function (){
		console.log("nu er vi i maint_testcalc");
		if(lccobj.maintsub.coats == 1){
			lccobj.maintsub.sqmprice1 = enlinie();
			$('#maintline1').hide();
			disable("maint_nocoats");
			$('#maint_spec').hide();
		}
		if(lccobj.maintsub.coats == 2){
			console.log("nu er vi i 2 coats");
			enlinie();
			tolinie();
			$('#maintline1').hide();
			$('#maintline2').hide();
			disable("maint_nocoats");
			$('#maint_spec').hide();
			lccobj.maintsub.totcost = Number(lccobj.maintsub.totcost1)+Number(lccobj.maintsub.totcost2);
			$('#calcMaintCost').attr("value",lccobj.maintsub.totcost);
		}
		if(lccobj.maintsub.coats == 3){
			enlinie();
			tolinie();
			trelinie();
			$('#maintline1').hide();
			$('#maintline2').hide();
			$('#maintline3').hide();
			disable("maint_nocoats");
			$('#maint_spec').hide();
			lccobj.maintsub.totcost = Number(lccobj.maintsub.totcost1)+Number(lccobj.maintsub.totcost2) + Number(lccobj.maintsub.totcost3);
			$('#calcMaintCost').attr("value",lccobj.maintsub.totcost);
		}
		if(lccobj.maintsub.coats == 4){
			console.log("Nu er vi i fire");
			enlinie();
			tolinie();
			trelinie();
			firelinie();
			disable("maint_nocoats");
			$('#maint_spec').hide();
			lccobj.maintsub.totcost = Number(lccobj.maintsub.totcost1)+Number(lccobj.maintsub.totcost2) + Number(lccobj.maintsub.totcost3) + Number(lccobj.maintsub.totcost4);
			$('#calcMaintCost').attr("value",lccobj.maintsub.totcost);
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
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());

		// Touch up alternativ
		if($('#mainttucheck1').is(":checked")) {
			lccobj.maintsub.tf1 = 0;
			//calculates maintenance blasting cost
			lccobj.maintsub.blastcost  = structurearea*(lccobj.maintsub.area/100)*lccobj.maintsub.surfprepcost;
			//calculates maintenance application cost
			lccobj.maintsub.applcost1 = lccobj.maintsub.applcost1*(structurearea*(lccobj.maintsub.area/100)*1.1);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea1 = ((lccobj.maintsub.dft1*lccobj.maintsub.price1*lccobj.maintsub.loss1)/(lccobj.maintsub.solids1*10))*(structurearea* (lccobj.maintsub.area/100)*1.1);
			//calculates maintenance total cost
			lccobj.maintsub.totcost1 = (lccobj.maintsub.blastcost + lccobj.maintsub.applcost1 + lccobj.maintsub.pricearea1).toFixed(0);
			// puts the total maintenance cost up
			//$('#calcMaintCost').attr("value",lccobj.maintsub.totcost1);
		}

		//Full coat alternativ
		if($('#maintfccheck1').is(":checked")) {
			lccobj.maintsub.tf1 = 1;
			//calculates maintenance blasting cost
			lccobj.maintsub.blastcost  = structurearea*lccobj.maintsub.surfprepcost;
			//calculates maintenance application cost
			lccobj.maintsub.applcost1 = lccobj.maintsub.applcost1*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea1 = ((lccobj.maintsub.dft1*lccobj.maintsub.price1*lccobj.maintsub.loss1)/(lccobj.maintsub.solids1*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost1 = (lccobj.maintsub.blastcost + lccobj.maintsub.applcost1 + lccobj.maintsub.pricearea1).toFixed(0);
		}
	}

	function tolinie() {
		lccobj.maintsub.prod2 = $('#maint_product2').val();
		lccobj.maintsub.dft2 = parseInt($('#maint_dft2').val());
		lccobj.maintsub.price2 = parseFloat($('#maint_price2').val());
		lccobj.maintsub.solids2 = parseFloat($('#maint_solids2').val());
		lccobj.maintsub.VOC2 = parseFloat($('#maint_VOC2').val());
		lccobj.maintsub.loss2 = parseFloat($('#maint_loss2').val());
		lccobj.maintsub.applcost2 = parseFloat($('#maint_applcost2').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());


		// Touch up alternativ
		if($('#mainttucheck2').is(":checked")) {
			lccobj.maintsub.tf2 = 0;
			//calculates maintenance blasting cost
			//lccobj.maintsub.blastcost  = (structurearea*(lccobj.maintsub.area/100)*1.1)*lccobj.maintsub.surfprepcost;
			//calculates maintenance application cost
			lccobj.maintsub.applcost2 = lccobj.maintsub.applcost2*(structurearea*(lccobj.maintsub.area/100)*1.2);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea2 = ((lccobj.maintsub.dft2*lccobj.maintsub.price2*lccobj.maintsub.loss2)/(lccobj.maintsub.solids2*10))*(structurearea* (lccobj.maintsub.area/100)*1.2);
			//calculates maintenance total cost
			lccobj.maintsub.totcost2 = (lccobj.maintsub.applcost2 + lccobj.maintsub.pricearea2).toFixed(0);
		}

		//Full coat alternativ
		if($('#maintfccheck2').is(":checked")) {
			lccobj.maintsub.tf2 = 1;
			//calculates maintenance application cost
			lccobj.maintsub.applcost2 = lccobj.maintsub.applcost2*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea2 = ((lccobj.maintsub.dft2*lccobj.maintsub.price2*lccobj.maintsub.loss2)/(lccobj.maintsub.solids2*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost2 = (lccobj.maintsub.applcost2 + lccobj.maintsub.pricearea2).toFixed(0);
		}
	}

	function trelinie() {
		lccobj.maintsub.prod3 = $('#maint_product3').val();
		lccobj.maintsub.dft3 = parseInt($('#maint_dft3').val());
		lccobj.maintsub.price3 = parseFloat($('#maint_price3').val());
		lccobj.maintsub.solids3 = parseFloat($('#maint_solids3').val());
		lccobj.maintsub.VOC3 = parseFloat($('#maint_VOC3').val());
		lccobj.maintsub.loss3 = parseFloat($('#maint_loss3').val());
		lccobj.maintsub.applcost3 = parseFloat($('#maint_applcost3').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());


		// Touch up alternativ
		if($('#mainttucheck3').is(":checked")) {
			lccobj.maintsub.tf3 = 0;
			//calculates maintenance application cost
			lccobj.maintsub.applcost3 = lccobj.maintsub.applcost3*(structurearea*(lccobj.maintsub.area/100)*1.3);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea3 = ((lccobj.maintsub.dft3*lccobj.maintsub.price3*lccobj.maintsub.loss3)/(lccobj.maintsub.solids3*10))*(structurearea* (lccobj.maintsub.area/100)*1.3);
			//calculates maintenance total cost
			lccobj.maintsub.totcost3 = (lccobj.maintsub.applcost3 + lccobj.maintsub.pricearea3).toFixed(0);
		}
		//Full coat alternativ
		if($('#maintfccheck3').is(":checked")) {
			lccobj.maintsub.tf3 = 1;
			//calculates maintenance application cost
			lccobj.maintsub.applcost3 = lccobj.maintsub.applcost3*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea3 = ((lccobj.maintsub.dft3*lccobj.maintsub.price3*lccobj.maintsub.loss3)/(lccobj.maintsub.solids3*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost3 = (lccobj.maintsub.applcost3 + lccobj.maintsub.pricearea3).toFixed(0);
		}
	}

	function firelinie() {
		lccobj.maintsub.prod4 = $('#maint_product4').val();
		lccobj.maintsub.dft4 = parseInt($('#maint_dft4').val());
		lccobj.maintsub.price4 = parseFloat($('#maint_price4').val());
		lccobj.maintsub.solids4 = parseFloat($('#maint_solids4').val());
		lccobj.maintsub.VOC4 = parseFloat($('#maint_VOC4').val());
		lccobj.maintsub.loss4 = parseFloat($('#maint_loss4').val());
		lccobj.maintsub.applcost4 = parseFloat($('#maint_applcost4').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());


		// Touch up alternativ
		if($('#mainttucheck4').is(":checked")) {
			lccobj.maintsub.tf4 = 0;
			//calculates maintenance application cost
			lccobj.maintsub.applcost4 = lccobj.maintsub.applcost4*(structurearea*(lccobj.maintsub.area/100)*1.4);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea4 = ((lccobj.maintsub.dft4*lccobj.maintsub.price4*lccobj.maintsub.loss4)/(lccobj.maintsub.solids4*10))*(structurearea* (lccobj.maintsub.area/100)*1.4);
			//calculates maintenance total cost
			lccobj.maintsub.totcost4 = (lccobj.maintsub.applcost4 + lccobj.maintsub.pricearea4).toFixed(0);
		}
		//Full coat alternativ
		if($('#maintfccheck4').is(":checked")) {
			lccobj.maintsub.tf4 = 1;
			//calculates maintenance application cost
			lccobj.maintsub.applcost4 = lccobj.maintsub.applcost4*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea4 = ((lccobj.maintsub.dft4*lccobj.maintsub.price4*lccobj.maintsub.loss4)/(lccobj.maintsub.solids4*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost4 = (lccobj.maintsub.applcost4 + lccobj.maintsub.pricearea4).toFixed(0);
		}
	}
});