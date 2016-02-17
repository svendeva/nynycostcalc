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
		$('#ref_nocoats').show();
		$('#ref_testcalc').show();
		console.log("Her skal knappen komme");
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
		}
		if(lccobj.refsub.coats ==3){
			$('.reflines').hide();
			$('#refline1').show();
			$('#refline2').show();
			$('#refline3').show();
		}
		if(lccobj.refsub.coats ==4){
			$('.reflines').hide();
			$('#refline1').show();
			$('#refline2').show();
			$('#refline3').show();
			$('#refline4').show();
		}
		if(lccobj.refsub.coats ==5){
			$('.reflines').hide();
			$('#refline1').show();
			$('#refline2').show();
			$('#refline3').show();
			$('#refline4').show();
			$('#refline5').show();
		}
		if(lccobj.refsub.coats ==6){
			$('#refline1').show();
			$('#refline2').show();
			$('#refline3').show();
			$('#refline4').show();
			$('#refline5').show();
			$('#refline6').show();
		}
		$('#ref_testcalc').show();
	});

		//Calculates squaremeter price and total for the number of layers
	$('#ref_testcalc').click(function (){
		if(lccobj.refsub.coats == 1){
			enlinie();
			$('#calcRefCost').attr("value",lccobj.refsub.totcost1);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#ref_testcalc').hide();
			$('#ref_spec').hide();
			$('#simulate').show();
		}
		if(lccobj.refsub.coats == 2){
			enlinie();
			tolinie();
			lccobj.refsub.totsqmprice = lccobj.refsub.sqmprice1 + lccobj.refsub.sqmprice2;
			lccobj.refsub.totcost = Number(lccobj.refsub.totcost1)+Number(lccobj.refsub.totcost2);
			$('#calcRefCost').attr("value",lccobj.refsub.totcost);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
			$('#ref_spec').hide();
		}
		
		if(lccobj.refsub.coats == 3){
			enlinie();
			tolinie();
			trelinie();
			lccobj.refsub.totsqmprice = lccobj.refsub.sqmprice1 + lccobj.refsub.sqmprice2 + lccobj.refsub.sqmprice3;
			lccobj.refsub.totcost = Number(lccobj.refsub.totcost1)+Number(lccobj.refsub.totcost2)+Number(lccobj.refsub.totcost3);
			$('#calcRefCost').attr("value",lccobj.refsub.totcost);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
			$('#ref_spec').hide();
		}

		
		if(lccobj.refsub.coats == 4){
			lccobj.refsub.sqmprice1 = enlinie();
			lccobj.refsub.sqmprice2 = tolinie();
			lccobj.refsub.sqmprice3 = trelinie();
			lccobj.refsub.sqmprice4 = firelinie();
			lccobj.refsub.totsqmprice = lccobj.nbsub.sqmprice1 + lccobj.nbsub.sqmprice2 + lccobj.nbsub.sqmprice3  + lccobj.nbsub.sqmprice4;
			lccobj.refsub.totcost = Number(lccobj.refsub.totcost1)+Number(lccobj.refsub.totcost2)+Number(lccobj.refsub.totcost3)+Number(lccobj.refsub.totcost4);
			$('#calcRefCost').attr("value",lccobj.refsub.totcost);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
			$('#ref_spec').hide();
		}
		
		if(lccobj.refsub.coats == 5){
			lccobj.refsub.sqmprice1 = enlinie();
			lccobj.refsub.sqmprice2 = tolinie();
			lccobj.refsub.sqmprice3 = trelinie();
			lccobj.refsub.sqmprice4 = firelinie();
			lccobj.refsub.sqmprice5 = femlinie();
			lccobj.refsub.totsqmprice = lccobj.refsub.sqmprice1 + lccobj.refsub.sqmprice2 + lccobj.refsub.sqmprice3  + lccobj.refsub.sqmprice4  + lccobj.refsub.sqmprice5;
			lccobj.refsub.totcost = Number(lccobj.refsub.totcost1)+Number(lccobj.refsub.totcost2)+Number(lccobj.refsub.totcost3)+Number(lccobj.refsub.totcost4)+Number(lccobj.refsub.totcost5);
			$('#calcRefCost').attr("value",lccobj.refsub.totcost);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
		}
		
		if(lccobj.refsub.coats == 6){
			lccobj.refsub.sqmprice1 = enlinie();
			lccobj.refsub.sqmprice2 = tolinie();
			lccobj.refsub.sqmprice3 = trelinie();
			lccobj.refsub.sqmprice4 = firelinie();
			lccobj.refsub.sqmprice5 = femlinie();
			lccobj.refsub.sqmprice6 = sekslinie();
			lccobj.refsub.totsqmprice = lccobj.refsub.sqmprice1 + lccobj.refsub.sqmprice2 + lccobj.refsub.sqmprice3  + lccobj.refsub.sqmprice4  + lccobj.refsub.sqmprice5 + lccobj.refsub.sqmprice6;
			lccobj.refsub.totcost = Number(lccobj.refsub.totcost1)+Number(lccobj.refsub.totcost2)+Number(lccobj.refsub.totcost3)+Number(lccobj.refsub.totcost4)+Number(lccobj.refsub.totcost5)+Number(lccobj.refsub.totcost6);
			$('#calcRefCost').attr("value",lccobj.refsub.totcost);
			$('#refline1').hide();
			disable("ref_nocoats");
			$('#testcalc').hide();
		}
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
		//calculates refurbishment blasting cost
		lccobj.refsub.blastcost  = structurearea*lccobj.refsub.surfprepcost;
		//calculates refurbishment application cost
		lccobj.refsub.applcost1 = lccobj.refsub.applcost1*structurearea;
		// calculates refurbishment paintcost
		lccobj.refsub.pricearea1 = ((lccobj.refsub.dft1*lccobj.refsub.price1*lccobj.refsub.loss1)/(lccobj.refsub.solids1*10))*structurearea;
		//calculates refurbishment total cost
		lccobj.refsub.totcost1 = ((lccobj.refsub.blastcost + lccobj.refsub.applcost1 + lccobj.refsub.pricearea1)/structurearea).toFixed(2);
		
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

		//calculates refurbishment application cost
		lccobj.refsub.applcost2 = lccobj.refsub.applcost2*structurearea;
		// calculates maintenance paintcost
		lccobj.refsub.pricearea2 = ((lccobj.refsub.dft2*lccobj.refsub.price2*lccobj.refsub.loss2)/(lccobj.refsub.solids2*10))*structurearea;
		//calculates maintenance total cost
		lccobj.refsub.totcost2 = (lccobj.refsub.applcost2 + lccobj.refsub.pricearea2).toFixed(0);
	}

	function trelinie() {
		lccobj.refsub.prod3 = $('#ref_product3').val();
		lccobj.refsub.dft3 = parseInt($('#ref_dft3').val());
		lccobj.refsub.price3 = parseFloat($('#ref_price3').val());
		lccobj.refsub.solids3 = parseFloat($('#ref_solids3').val());
		lccobj.refsub.VOC3 = parseFloat($('#ref_VOC3').val());
		lccobj.refsub.loss3 = parseFloat($('#ref_loss3').val());
		lccobj.refsub.applcost3 = parseFloat($('#ref_applcost3').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());

		//calculates refurbishment application cost
		lccobj.refsub.applcost3 = lccobj.refsub.applcost3*structurearea;
		// calculates maintenance paintcost
		lccobj.refsub.pricearea3 = ((lccobj.refsub.dft3*lccobj.refsub.price3*lccobj.refsub.loss3)/(lccobj.refsub.solids3*10))*structurearea;
		//calculates maintenance total cost
		lccobj.refsub.totcost3 = (lccobj.refsub.applcost3 + lccobj.refsub.pricearea3).toFixed(0);
	}
	



	function firelinie() {
		lccobj.refsub.prod4 = $('#ref_product4').val();
		lccobj.refsub.dft4 = parseInt($('#ref_dft4').val());
		lccobj.refsub.price4 = parseFloat($('#ref_price4').val());
		lccobj.refsub.solids4 = parseFloat($('#ref_solids4').val());
		lccobj.refsub.VOC4 = parseFloat($('#ref_VOC4').val());
		lccobj.refsub.loss4 = parseFloat($('#ref_loss4').val());
		lccobj.refsub.applcost4 = parseFloat($('#ref_applcost4').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());

		//calculates maintenance application cost
		lccobj.refsub.applcost4 = lccobj.refsub.applcost4*structurearea;
		// calculates maintenance paintcost
		lccobj.refsub.pricearea4 = ((lccobj.refsub.dft4*lccobj.refsub.price4*lccobj.refsub.loss4)/(lccobj.refsub.solids4*10))*structurearea;
		//calculates maintenance total cost
		lccobj.refsub.totcost4 = (lccobj.refsub.applcost4 + lccobj.refsub.pricearea4).toFixed(0);
	}

	function femlinie() {
		lccobj.refsub.prod5 = $('#ref_product5').val();
		lccobj.refsub.dft5 = parseInt($('#ref_dft5').val());
		lccobj.refsub.price5 = parseFloat($('#ref_price5').val());
		lccobj.refsub.solids5 = parseFloat($('#ref_solids5').val());
		lccobj.refsub.VOC5 = parseFloat($('#ref_VOC5').val());
		lccobj.refsub.loss5 = parseFloat($('#ref_loss5').val());
		lccobj.refsub.applcost5 = parseFloat($('#ref_applcost5').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());

		//calculates maintenance application cost
		lccobj.refsub.applcost5 = lccobj.refsub.applcost5*structurearea;
		// calculates maintenance paintcost
		lccobj.refsub.pricearea5 = ((lccobj.refsub.dft5*lccobj.refsub.price5*lccobj.refsub.loss5)/(lccobj.refsub.solids5*10))*structurearea;
		//calculates maintenance total cost
		lccobj.refsub.totcost5 = (lccobj.refsub.applcost5 + lccobj.refsub.pricearea5).toFixed(0);
	}

		function sekslinie() {
		lccobj.refsub.prod6 = $('#ref_product6').val();
		lccobj.refsub.dft6 = parseInt($('#ref_dft6').val());
		lccobj.refsub.price6 = parseFloat($('#ref_price6').val());
		lccobj.refsub.solids6 = parseFloat($('#ref_solids6').val());
		lccobj.refsub.VOC6 = parseFloat($('#ref_VOC6').val());
		lccobj.refsub.loss6 = parseFloat($('#ref_loss6').val());
		lccobj.refsub.applcost6 = parseFloat($('#ref_applcost6').val());
		lccobj.refsub.area = parseFloat($('#ref_per').val());
		lccobj.refsub.surfprepcost = parseFloat($('#ref_surfprep_in').val());
	
		//calculates maintenance application cost
		lccobj.refsub.applcost6 = lccobj.refsub.applcost6*structurearea;
		// calculates maintenance paintcost
		lccobj.refsub.pricearea6 = ((lccobj.refsub.dft6*lccobj.refsub.price6*lccobj.refsub.loss6)/(lccobj.refsub.solids6*10))*structurearea;
		//calculates maintenance total cost
		lccobj.refsub.totcost6 = (lccobj.refsub.applcost6 + lccobj.refsub.pricearea6).toFixed(0);
	}
});