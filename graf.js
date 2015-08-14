$(document).ready(function(){

    $('#grafSim').click(function(){
        $('#chartdiv').show();
    


	$.jqplot('chartdiv',  [[[1,5],[2,10],[4,15],[5,30],[7,7],[12,10],[16,20],[20,30]]],
     { title:'Bare en test',

        series:[{renderer:$.jqplot.BarRenderer,
            rendererOptions: {
                barWidth: 15,
                barPadding: 10,
                barMargin: 10,
                color:'#511B78',
            }

     }]});
    
    });

}); 

