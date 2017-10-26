({
    drawChart : function(donationAmount) {
        var jy = jQuery.noConflict();
        var gaugeOptions = {
            
            chart: {
                type: 'solidgauge'
            },
            
            title: null,
            
            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            
            tooltip: {
                enabled: false
            },
            
            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
            
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };
        jy('#container-donation').highcharts(Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 20000,
                title: {
                    text: 'Donation Received'
                }
            },
            
            credits: {
                enabled: false
            },
            
            series: [{
                name: 'Speed',
                data: [donationAmount],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">${y}</span><br/>' +
                    '<span style="font-size:12px;color:silver"></span></div>'
                },
                tooltip: {
                    valueSuffix: ''
                }
            }]
            
        }));
    },
    updateChart : function(donationAmount,component) { 
        
        var jy = jQuery.noConflict();
        var chart = jy('#container-donation').highcharts(),
            point,
            newVal,
            inc;
        point = chart.series[0].points[0];
        
        var action = component.get("c.getDonation");
        
        //Set up the callback
        var jy = jQuery.noConflict();      
        action.setCallback(this, function(actionResult) {
            
            var totalExistingAmount = (actionResult.getReturnValue() - point.y);
            newVal = point.y + totalExistingAmount;
            point.update(newVal);
            
        });
        
        $A.enqueueAction(action);
        
        
    }
    
})