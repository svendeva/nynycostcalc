$(document).ready(function(){

	$('#simulate').click(function(){


		var sjlcccost = [];
		var sjlccyears = [];
		var sjlccnpv = [];
		var sjlcctype = [];

		$("#lcctable tbody").empty();


		if(document.getElementById('demo').checked) {
			$("#lcctable tbody").empty();
			var newmainttime = $('#new_maint_time').val();
			var newrefurbtime =$('#new_refurb_time').val;
			var retime =$('#new_refurb_time').val();
			var refurbtime =$('#ref_refurb_time').val();
			var refmainttime = $('#ref_maint_time').val();
			var newcost = $('#new_cost').val();
			var refcost = $('#ref_cost').val();

		}
		if(document.getElementById('insert').checked) {
			var retime =$('#refurb_calc_time').val();
			var refurbtime =$('#ref_refurb_calc_time').val();
			var newcost = $('#new_calc_cost').val();
			var refcost = $('#ref_calc_cost').val();
		}	

		if(document.getElementById('calculate').checked) {
			var retime =$('#nb_calc_refurb_time').val();
			var refurbtime =$('#nb_calc_refurb_time').val();
			var newcost = $('#calcNewCost').val();
			var refcost = $('#calcRefCost').val();
		}			


		var interest = parseInt(interestrate) + parseInt(inflationrate);

		var lcc = [];
		var lccobj = {};

		var j;
		var counter;
		var sidstmaint;

		var accucost;
		var accunpv;

		var lccnew = [];
		var lccyears = [];
		var lcctype = [];
		var lcccost = [];
		var lccref = [];
		var lccmaint = [];
		var lccnpv = [];

		var sjlccyears = [];
		var sjlcctype = [];
		var sjlcccost = [];
		var sjlccnpv = [];




		// Fills the arrays for years, new, maint, ref, 
		for(i=0;i<=designlife;i++){
			lccyears[i] = i;
			lcccost[i] = 0;
			lccmaint[i] =0;
			lccref[i] = 0;
			lcctype[i] = "";
			lccnpv[i] = 0;
		}

		//fills the 0 year
		lccref[0] = newcost*parseInt(structurearea);
		lcctype[0] = "New construction";
		lccnpv[0] = newcost*parseInt(structurearea);

		// Fills the refurbishment data
		j=0;
		for(i=parseInt(retime);i<parseInt(designlife)-parseInt(refurbtime)/2;i=i+parseInt(refurbtime)){
			j = j + 1;
			lccref[i] = refcost*structurearea;
			lcctype[i] = j + ". refurbishment";
			lcccost[i] = refcost;
			lccnpv[i] = Math.round(lccref[i]/Math.pow((1 + interest/100),i ));
			counter = j;
		}


		if(document.getElementById('demo').checked) {
			var newmainttime = $('#new_maint_time').val();
			var newrefurbtime = $('#new_refurb_time').val();
			var maintcost = $('#maint_cost').val();
			var refmainttime = $('#ref_maint_time').val();
			var refrefurbtime = $('#ref_refurb_time').val();
		}
		if(document.getElementById('insert').checked) {
			newmainttime = $('#maint_calc_time').val();
			newrefurbtime = $('#refurb_calc_time').val();
			maintcost = $('#maint_calc_cost').val();
			refmainttime = $('#ref_maint_calc_time').val();
			refrefurbtime = $('#ref_refurb_calc_time').val();
		}
		if(document.getElementById('calculate').checked) {
			newmainttime = $('#nb_calc_maint_time').val();
			newrefurbtime = $('#nb_calc_refurb_time').val();
			maintcost = $('#calcMaintCost').val();
			refmainttime = $('#nb_calc_maint_time').val();
			refrefurbtime = $('#nb_calc_refurb_time').val();
		}

		// Fills the new maintenance within new refurbishment
		j=0;
		for(i=parseInt(newmainttime);i<parseInt(newrefurbtime)-parseInt(newmainttime)/2;i =i +parseInt(newmainttime)){
			j = j+1;
			lccmaint[i] = maintcost;
			lcctype[i] = j + ". maintenance";
			lccnpv[i] = Math.round(lccmaint[i]/Math.pow((1 + interest/100),i ));
			
		}

		// Fills the maintenance for the remainder
		k=0;
		for (j=1;j<=counter;j++){
			for(i= j*parseInt(newrefurbtime) +parseInt(refmainttime);i<(j+1)*parseInt(refrefurbtime)-parseInt(refmainttime)/2; i = i+parseInt(refmainttime)){
				k = k+1;
				lccmaint[i] = maintcost;
				lcctype[i] = k + ". maintenance";
				sidstmaint = k
				lccnpv[i] = Math.round(lccmaint[i]/Math.pow((1 + interest/100),i ));
			}
			k=0;
		}

		//Fills the extra maintenance at the end of the period
		if ((parseInt(designlife) - i) > parseInt(refmainttime)/2){
			for(l=i; l< parseInt(designlife)-parseInt(refmainttime)/2;l = l + parseInt(refmainttime)){
				sidstmaint = sidstmaint +1;
				lccmaint[l] = maintcost;
				lcctype[l] = sidstmaint + ". maintenance";
				lccnpv[l] = Math.round(lccmaint[i]/Math.pow((1 + interest/100),l ));
			}
		}

		//This is to override the maintenance in the cases where maintenance and refurbishment clashes 
		j=0;
		for(i=parseInt(retime);i<parseInt(designlife)-parseInt(refurbtime)/2;i=i+parseInt(refurbtime)){
			j = j + 1;
			lccref[i] = refcost*structurearea;
			lcctype[i] = j + ". refurbishment";
			lcccost[i] = refcost;
			lccnpv[i] = Math.round(lccref[i]/Math.pow((1 + interest/100),i ));
			counter = j;
		}

		$('#lcccon').show();
		$('#lcctable').show();

		// Populates the sj array
		for(i=0;i<=designlife;i++){
				if(lccnpv[i]>0){
					sjlccyears.push(lccyears[i]);
					sjlcctype.push(lcctype[i]);
					sjlcccost.push(parseInt(lccmaint[i]) +lccref[i]);
					sjlccnpv.push(lccnpv[i]);
				}
		}

		//Accumulates the cost and npv
		accucost = 0;
		accunpv = 0
		for(i=0;i<sjlccyears.length;i++){
			//console.log("Year = : " + sjlccyears[i] + "Type er : " + sjlcctype[i] + "Cost er : " + sjlcccost[i] + "npv er : " + sjlccnpv[i]);
			accucost = accucost + sjlcccost[i];
			accunpv = accunpv + sjlccnpv[i];
			
		}

		// Popuilates the lccobj object and adds the data to the DOM
		for(i=0;i<=sjlccyears.length;i++){
		var lccobj = {};
			lccobj.year = sjlccyears[i];
			lccobj.task = sjlcctype[i];
			lccobj.cost = sjlcccost[i];
			lccobj.npv = sjlccnpv[i];
			lcc.push(lccobj);

			if(i == sjlccyears.length){
				lccobj.year = ""
				lccobj.task = "The sum is";
				lccobj.cost = accucost;
				lccobj.npv = accunpv;
				lcc.push(lccobj);
			}

			var newYear = '<td class = "lcc_table_year">'+lcc[i].year+'</td>';
			var newTask = '<td class="lcc_table_task">'+ lcc[i].task + '</td>';
			var newCost = '<td class="lcc_table_cost">' + tusind((lcc[i].cost).toString()) + '</td>';
			var newNPV = '<td class="lcc_table_cost">' + tusind((lcc[i].npv).toString()) + '</td>';
			var newRow = '<tr>' + '</tr>';
			$('#tablebody').append(newYear);
			$('#tablebody').append(newTask);
			$('#tablebody').append(newCost);
			$('#tablebody').append(newNPV);
			$('#tablebody').append(newRow);


	


		}


	

		// function for thousand comma separation
		function tusind(abc) {
		var altid;
		var resultat;
		altid = abc;
		
		if (altid.length < 4){
			resultat=altid;
		}
		if (altid.length<7 && altid.length>3){
			resultat = altid.slice(0,length-3) + "," + altid.slice(-3);
		}
		if (altid.length<10 && altid.length>6){
			resultat = altid.slice(0,length-6) + "," + altid.slice(-6,-3) + "," + altid.slice(-3);
		}
		if (altid.length<13 && altid.length>9){
			resultat = altid.slice(0,length-9) + "," + altid.slice(-9,-6) + "," + altid.slice(-6,-3) + "," + altid.slice(-3);
		}
		if (altid.length<16 && altid.length>12){
			resultat = altid.slice(0,length-12) + "," + altid.slice(-12,-9) + "," + altid.slice(-9,-6) + "," + altid.slice(-6,-3) + "," + altid.slice(-3);
		}
		if (altid.length>16){
			resultat = "error";
		}
		return resultat;
		}	

	});


});