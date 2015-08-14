$(document).ready(function(){



	$('#calculate').click(function (){
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
	        	$('#specification').show();
	        	$('#lcccalculate').show();
	        }
     });

	$('#nbContSurfPrep').click(function (){
			calcSurfPrep = $('#nbsurfprep_in').val();
			//$('#calcNewCost').attr("value",calcSurfPrep);
			$('#lcccalculate').show();
			$('#nbsurfprep_in').hide();
			$('#showplease').hide();
			$('#surfpreptag').hide();
			$('#surfshow').hide();
			$('#projectCurrency').hide();
			$('#nbContSurfPrep').hide();
			disable("nb_surf_prep");
			$('#testcalc').show();

     });



	$('#testcalc').click(function (){
		if(lccobj.nbsub.coats == 1){
			lccobj.nbsub.sqmprice1 = enlinie();
			$('#calcNewCost').attr("value",lccobj.nbsub.sqmprice1.toFixed(2));
			$('#nbline1').hide();
			disable("nb_nocoats");
			$('#testcalc').hide();
			$('#nbtimes').show();
			$('#nb_time_btn').show();
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

	$('#nb_time_btn').click(function (){
		var time1 = $('#nb_maint_time').val();
		$('#nb_calc_maint_time').attr("value",time1);
		var time2 = $('#nb_refurb_time').val();
		$('#nb_calc_refurb_time').attr("value",time2);
		$('#specification').hide();	
		alert("Nu er den fjernet");
		alert("en anden ændring");
()
	});	

		//NB surface preparation function selectors
	$('#nb_surf_prep').on('change', function() {

		var surfprep = document.getElementById("nb_surf_prep").value;
		
		$('#surfpreptag').show(); 
		$('#surfshow').show();
		$('#showplease').show();
		$('#nbsurfprep_in').show();
		$('#nbContSurfPrep').show();
		enable();


		if(surfprep == "St 2"){
			$('#surfshow').text(surfprep);
			$('#projectCurrency').text(currency + " " + "per SQM");

		}
		if(surfprep =="Sa 1"){
			$('#surfshow').text(surfprep);
			$('#projectCurrency').text(currency + " " + "per SQM");
		}
		if(surfprep == "Sa 2½"){
			$('#surfshow').text(surfprep);
			$('#projectCurrency').text(currency + " " + "per SQM");
		}
		if(surfprep =="Sa 3"){
			$('#surfshow').text(surfprep);
			$('#projectCurrency').text(currency + " " + "per SQM");
		}
	});



	//NB Number of coat function selectors
	$('#nb_nocoats').on('change', function() {
		lccobj.nbsub.coats = parseInt(document.getElementById("nb_nocoats").value);
		if(lccobj.nbsub.coats ==1){
			$('.nblines').hide();
			$('#nbline1').show();
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
		console.log("Number of coats are : " + lccobj.nbsub.coats);
	});

	function disable(abc) {
    	document.getElementById(abc).disabled=true;
	}
	function enable() {
    	document.getElementById("nb_nocoats").disabled=false;
	}

	function enlinie() {
		lccobj.nbsub.prod1 = $('#nb_product1').val();
		lccobj.nbsub.dft1 = parseInt($('#nb_dft1').val());
		lccobj.nbsub.price1 = parseFloat($('#nb_price1').val());
		lccobj.nbsub.solids1 = parseFloat($('#nb_solids1').val());
		lccobj.nbsub.VOC1 = parseFloat($('#nb_VOC1').val());
		lccobj.nbsub.loss1 = parseFloat($('#nb_loss1').val());
		lccobj.nbsub.applcost1 = parseFloat($('#nb_applcost1').val());
		lccobj.nbsub.spgr1 = parseFloat($('#nb_spgr1').val());
		lccobj.nbsub.sqmprice1= parseInt(calcSurfPrep) + ((lccobj.nbsub.dft1*lccobj.nbsub.price1*lccobj.nbsub.loss1)/(lccobj.nbsub.solids1*10)) + lccobj.nbsub.applcost1;
		return lccobj.nbsub.sqmprice1;
	}

	function tolinie() {
		lccobj.nbsub.prod2 = $('#nb_product2').val();
		lccobj.nbsub.dft2 = parseInt($('#nb_dft2').val());
		lccobj.nbsub.price2 = parseFloat($('#nb_price2').val());
		lccobj.nbsub.solids2 = parseFloat($('#nb_solids2').val());
		lccobj.nbsub.VOC2 = parseFloat($('#nb_VOC2').val());
		lccobj.nbsub.loss2 = parseFloat($('#nb_loss2').val());
		lccobj.nbsub.applcost2 = parseFloat($('#nb_applcost2').val());
		lccobj.nbsub.spgr2 = parseFloat($('#nb_spgr2').val());
		lccobj.nbsub.sqmprice2= ((lccobj.nbsub.dft2*lccobj.nbsub.price2*lccobj.nbsub.loss2)/(lccobj.nbsub.solids2*10)) + lccobj.nbsub.applcost2;
		return lccobj.nbsub.sqmprice2;
	}

	function trelinie() {
		lccobj.nbsub.prod3 = $('#nb_product3').val();
		lccobj.nbsub.dft3 = parseInt($('#nb_dft3').val());
		lccobj.nbsub.price3 = parseFloat($('#nb_price3').val());
		lccobj.nbsub.solids3 = parseFloat($('#nb_solids3').val());
		lccobj.nbsub.VOC3 = parseFloat($('#nb_VOC3').val());
		lccobj.nbsub.loss3 = parseFloat($('#nb_loss3').val());
		lccobj.nbsub.applcost3 = parseFloat($('#nb_applcost3').val());
		lccobj.nbsub.spgr3 = parseFloat($('#nb_spgr3').val());
		lccobj.nbsub.sqmprice3= ((lccobj.nbsub.dft3*lccobj.nbsub.price3*lccobj.nbsub.loss3)/(lccobj.nbsub.solids3*10)) + lccobj.nbsub.applcost3;
		return lccobj.nbsub.sqmprice3;
	}

	function firelinie() {
		lccobj.nbsub.prod4 = $('#nb_product4').val();
		lccobj.nbsub.dft4 = parseInt($('#nb_dft4').val());
		lccobj.nbsub.price4 = parseFloat($('#nb_price4').val());
		lccobj.nbsub.solids4 = parseFloat($('#nb_solids4').val());
		lccobj.nbsub.VOC4 = parseFloat($('#nb_VOC4').val());
		lccobj.nbsub.loss4 = parseFloat($('#nb_loss4').val());
		lccobj.nbsub.applcost4 = parseFloat($('#nb_applcost4').val());
		lccobj.nbsub.spgr4 = parseFloat($('#nb_spgr4').val());
		lccobj.nbsub.sqmprice4= ((lccobj.nbsub.dft4*lccobj.nbsub.price4*lccobj.nbsub.loss4)/(lccobj.nbsub.solids4*10)) + lccobj.nbsub.applcost4;
		return lccobj.nbsub.sqmprice4;
	}

	function femlinie() {
		lccobj.nbsub.prod5 = $('#nb_product5').val();
		lccobj.nbsub.dft5 = parseInt($('#nb_dft5').val());
		lccobj.nbsub.price5 = parseFloat($('#nb_price5').val());
		lccobj.nbsub.solids5 = parseFloat($('#nb_solids5').val());
		lccobj.nbsub.VOC5 = parseFloat($('#nb_VOC5').val());
		lccobj.nbsub.loss5 = parseFloat($('#nb_loss5').val());
		lccobj.nbsub.applcost5 = parseFloat($('#nb_applcost5').val());
		lccobj.nbsub.spgr5 = parseFloat($('#nb_spgr5').val());
		lccobj.nbsub.sqmprice5= ((lccobj.nbsub.dft5*lccobj.nbsub.price5*lccobj.nbsub.loss5)/(lccobj.nbsub.solids5*10)) + lccobj.nbsub.applcost5;
		return lccobj.nbsub.sqmprice5;
	}

	function sekslinie() {
		lccobj.nbsub.prod6 = $('#nb_product6').val();
		lccobj.nbsub.dft6 = parseInt($('#nb_dft6').val());
		lccobj.nbsub.price6 = parseFloat($('#nb_price6').val());
		lccobj.nbsub.solids6 = parseFloat($('#nb_solids6').val());
		lccobj.nbsub.VOC6 = parseFloat($('#nb_VOC6').val());
		lccobj.nbsub.loss6 = parseFloat($('#nb_loss6').val());
		lccobj.nbsub.applcost6 = parseFloat($('#nb_applcost6').val());
		lccobj.nbsub.spgr6 = parseFloat($('#nb_spgr6').val());
		lccobj.nbsub.sqmprice6= ((lccobj.nbsub.dft6*lccobj.nbsub.price6*lccobj.nbsub.loss6)/(lccobj.nbsub.solids6*10)) + lccobj.nbsub.applcost6;
		return lccobj.nbsub.sqmprice6;
	}


 }); 