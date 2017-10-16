({
	loadchartDetails : function(component, event, helper) {
		var action = component.get("c.getDonation");
     
        //Set up the callback
  		var jy = jQuery.noConflict();      
        action.setCallback(this, function(actionResult) {
            //chart
            helper.drawChart(actionResult.getReturnValue());
            //
            
        });
        
        $A.enqueueAction(action);
        
	},
    updateChart : function(component, event, helper) {
		var jy = jQuery.noConflict();  
        var message = event.getParam("eventName");
        // set the handler attributes based on event data
        if(message=='insert'){
        	//chart
            helper.updateChart((parseInt(jy('.totalAm').text()) + event.getParam("amount")));
        }
        
	}
})