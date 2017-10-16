({
	updateDonationDetails : function(component, event, helper) {
		var jy = jQuery.noConflict();  
        var message = event.getParam("eventName");
        // set the handler attributes based on event data
        if(message=='insert'){
        	jy('.totalAm').prop('Counter',parseInt(jy('.totalAm').text())).animate({
                Counter: (parseInt(jy('.totalAm').text()) + event.getParam("amount"))
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    jy('.totalAm').text(Math.ceil(now));
                }
            });
            
        }
        
	},
    loadDonationCount : function(component, event, helper) {
         var action = component.get("c.getDonation");
     
        //Set up the callback
  		var jy = jQuery.noConflict();      
        action.setCallback(this, function(actionResult) {
            
            component.set("v.numEvents",actionResult.getReturnValue());
            
            jy('.totalAm').prop('Counter',0).animate({
                Counter: actionResult.getReturnValue()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    jy('.totalAm').text(Math.ceil(now));
                }
            });
            
            //chart
            //helper.drawChart(actionResult.getReturnValue());
            
            //
            
        });
        
        $A.enqueueAction(action);
        
       
        
	}
})