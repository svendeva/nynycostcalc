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
		console.log("nu er vi ved no_coats");
		disable("ref_surf_prep");
		$('#ref_nocoats').show();
		$('#ref_testcalc').show();
     });

		//ref surface preparation function selectors
	$('#ref_surf_prep').on('change', function() {
		var ref_surfprep = document.getElementById("ref_surf_prep").value;
		$('#ref_surfpreptag').show(); 
		$('#ref_surfprep').show();
		$('#ref_showplease').show();
		$('#ref_surfprep_in').show();
		$('#refContSurfPrep').show();
		//enable("ref_nocoats");

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

	$('#ref_nocoats').on('change', function() {
		lccobj.refsub.coats = parseInt(document.getElementById("ref_nocoats").value);
		if(lccobj.refsub.coats ==1){
			$('.reflines').hide();
			$('#refline1').show();
		}
		if(lccobj.refsub.coats ==2){
			$('.reflines').hide();
			$('#refline1').show();
			$('#refline2').show();
		}/*
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
		}*/
		$('#ref_testcalc').show();
	});

		//Calculates squaremeter price and total for the number of layers
	$('#ref_testcalc').click(function (){
		if(lccobj.refsub.coats == 1){
			enlinie();
			$('#calcRefCost').attr("value",lccobj.nbsub.sqmprice1.toFixed(2));
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#ref_testcalc').hide();
			$('#ref_spec').hide();
		}
		if(lccobj.refsub.coats == 2){
			enlinie();
			tolinie();
			lccobj.refsub.totsqmprice = lccobj.refsub.sqmprice1 + lccobj.refsub.sqmprice2;
			$('#calcRefCost').attr("value",lccobj.refsub.totsqmprice.toFixed(2));
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
			$('#ref_spec').hide();
		}
		/*
		if(lccobj.nbsub.coats == 3){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
			$('#nbline1').hide();
			disable("nb_nocoats");
			$('#testcalc').hide();
			$('#nbtimes').show();
			$('#nb_time_btn').show();
		}
		if(lccobj.nbsub.coats == 4){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.sqmprice4 = firelinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
			$('#nbline1').hide();
			disable("nb_nocoats");
			$('#testcalc').hide();
			$('#nbtimes').show();
			$('#nb_time_btn').show();
		}
		if(lccobj.nbsub.coats == 5){
			lccobj.nbsub.sqmprice1 = enlinie();
			lccobj.nbsub.sqmprice2 = tolinie();
			lccobj.nbsub.sqmprice3 = trelinie();
			lccobj.nbsub.sqmprice4 = firelinie();
			lccobj.nbsub.sqmprice5 = femlinie();
			lccobj.nbsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4  + lccobj.nbsub.sqmprice5;
			$('#calcNewCost').attr("value",lccobj.nbsub.totsqmprice.toFixed(2));
			$('#nbline1').hide();
			disable("nb_nocoats");
			$('#testcalc').hide();
			$('#nbtimes').show();
			$('#nb_time_btn').show();
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
			$('#nbline1').hide();
			disable("nb_nocoats");
			$('#testcalc').hide();
			$('#nbtimes').show();
			$('#nb_time_btn').show();
		}*/
	});

	// Calculates sqm prices and  for the selected number of lines
	function enlinie() {
		lccobj.refsub.prod1 = $('#ref_product1').val();
		lccobj.refsub.dft1 = parseInt($('#ref_dft1').val());
		lccobj.refsub.price1 = parseFloat($('#ref_price1').val());
		lccobj.refsub.solids1 = parseFloat($('#ref_solids1').val());
		lccobj.refsub.VOC1 = parseFloat($('#ref_VOC1').val());
		lccobj.refsub.loss1 = parseFloat($('#ref_loss1').val());
		lccobj.refsub.applcost1 = parseFloat($('#ref_applcost1').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());
		//calculates regfurbishment blasting cost
		lccobj.refsub.blastcost  = structurearea*lccobj.refsub.surfprepcost;
		//calculates refurbishment application cost
		lccobj.refsub.applcost1 = lccobj.refsub.applcost1*structurearea;
		// calculates refurbishment paintcost
		lccobj.refsub.pricearea1 = ((lccobj.refsub.dft1*lccobj.refsub.price1*lccobj.refsub.loss1)/(lccobj.refsub.solids1*10))*structurearea;
		//calculates refurbishment total cost
		lccobj.refsub.totcost1 = (lccobj.refsub.blastcost + lccobj.refsub.applcost1 + lccobj.refsub.pricearea1).toFixed(0);
		
	}

	function tolinie() {
		lccobj.refsub.prod2 = $('#ref_product2').val();
		lccobj.refsub.dft2 = parseInt($('#ref_dft2').val());
		lccobj.refsub.price2 = parseFloat($('#ref_price2').val());
		lccobj.refsub.solids2 = parseFloat($('#ref_solids2').val());
		lccobj.refsub.VOC2 = parseFloat($('#ref_VOC2').val());
		lccobj.refsub.loss2 = parseFloat($('#ref_loss2').val());
		lccobj.refsub.applcost2 = parseFloat($('#ref_applcost2').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());


		// Touch up alternativ
		if($('#reftucheck2').is(":checked")) {
			lccobj.refsub.tf2 = 0;
			//calculates maintenance blasting cost
			//lccobj.maintsub.blastcost  = (structurearea*(lccobj.maintsub.area/100)*1.1)*lccobj.maintsub.surfprepcost;
			//calculates maintenance application cost
			lccobj.refsub.applcost2 = lccobj.refsub.applcost2*(structurearea*(lccobj.refsub.area/100)*1.2);
			// calculates maintenance paintcost
			lccobj.refsub.pricearea2 = ((lccobj.refsub.dft2*lccobj.refsub.price2*lccobj.refsub.loss2)/(lccobj.refsub.solids2*10))*(structurearea* (lccobj.refsub.area/100)*1.2);
			//calculates maintenance total cost
			lccobj.refsub.totcost2 = (lccobj.refsub.applcost2 + lccobj.refsub.pricearea2).toFixed(0);
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
/*
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

	function femlinie() {
		lccobj.maintsub.prod5 = $('#maint_product5').val();
		lccobj.maintsub.dft5 = parseInt($('#maint_dft5').val());
		lccobj.maintsub.price5 = parseFloat($('#maint_price5').val());
		lccobj.maintsub.solids5 = parseFloat($('#maint_solids5').val());
		lccobj.maintsub.VOC5 = parseFloat($('#maint_VOC5').val());
		lccobj.maintsub.loss5 = parseFloat($('#maint_loss5').val());
		lccobj.maintsub.applcost5 = parseFloat($('#maint_applcost5').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());

		// Touch up alternativ
		if($('#mainttucheck5').is(":checked")) {
			lccobj.maintsub.tf5 = 0;
			//calculates maintenance application cost
			lccobj.maintsub.applcost5 = lccobj.maintsub.applcost5*(structurearea*(lccobj.maintsub.area/100)*1.5);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea5 = ((lccobj.maintsub.dft5*lccobj.maintsub.price5*lccobj.maintsub.loss5)/(lccobj.maintsub.solids5*10))*(structurearea* (lccobj.maintsub.area/100)*1.5);
			//calculates maintenance total cost
			lccobj.maintsub.totcost5 = (lccobj.maintsub.applcost5 + lccobj.maintsub.pricearea5).toFixed(0);
		}
		//Full coat alternativ
		if($('#maintfccheck5').is(":checked")) {
			lccobj.maintsub.tf5 = 1;
			//calculates maintenance application cost
			lccobj.maintsub.applcost5 = lccobj.maintsub.applcost5*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea5 = ((lccobj.maintsub.dft5*lccobj.maintsub.price5*lccobj.maintsub.loss5)/(lccobj.maintsub.solids5*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost5 = (lccobj.maintsub.applcost5 + lccobj.maintsub.pricearea5).toFixed(0);
		}
	}

		function sekslinie() {
		lccobj.maintsub.prod6 = $('#maint_product6').val();
		lccobj.maintsub.dft6 = parseInt($('#maint_dft6').val());
		lccobj.maintsub.price6 = parseFloat($('#maint_price6').val());
		lccobj.maintsub.solids6 = parseFloat($('#maint_solids6').val());
		lccobj.maintsub.VOC6 = parseFloat($('#maint_VOC6').val());
		lccobj.maintsub.loss6 = parseFloat($('#maint_loss6').val());
		lccobj.maintsub.applcost6 = parseFloat($('#maint_applcost6').val());
		lccobj.maintsub.area = parseFloat($('#maint_per').val());
		lccobj.maintsub.surfprepcost = parseFloat($('#maint_surfprep_in').val());

		// Touch up alternativ
		if($('#mainttucheck6').is(":checked")) {
			lccobj.maintsub.tf6 = 0;
			//calculates maintenance application cost
			lccobj.maintsub.applcost6 = lccobj.maintsub.applcost6*(structurearea*(lccobj.maintsub.area/100)*1.6);
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea6 = ((lccobj.maintsub.dft6*lccobj.maintsub.price6*lccobj.maintsub.loss6)/(lccobj.maintsub.solids6*10))*(structurearea* (lccobj.maintsub.area/100)*1.6);
			//calculates maintenance total cost
			lccobj.maintsub.totcost6 = (lccobj.maintsub.applcost6 + lccobj.maintsub.pricearea6).toFixed(0);
		}
		//Full coat alternativ
		if($('#maintfccheck6').is(":checked")) {
			lccobj.maintsub.tf6 = 1;
			//calculates maintenance application cost
			lccobj.maintsub.applcost6 = lccobj.maintsub.applcost6*structurearea;
			// calculates maintenance paintcost
			lccobj.maintsub.pricearea6 = ((lccobj.maintsub.dft6*lccobj.maintsub.price6*lccobj.maintsub.loss6)/(lccobj.maintsub.solids6*10))*structurearea;
			//calculates maintenance total cost
			lccobj.maintsub.totcost6 = (lccobj.maintsub.applcost6 + lccobj.maintsub.pricearea6).toFixed(0);
		}
	}*/


});