({
    createDonation:function(component,donation,event)
    {
         
	    var spinner = component.find("spinner");
		$A.util.removeClass(spinner, "slds-hide");
        $A.util.addClass(spinner, "slds-show");
        var action = component.get("c.createDonation");
        action.setParams({
          "donation" : donation
      	});
        
        var self = this;
        
        action.setCallback(this, function(actionResult) {
            var appEvent = $A.get("e.c:donationEvent");
            appEvent.setParams({
            "eventName" : "insert",
            "amount" :donation.Amount__c});
            appEvent.fire();
           $A.util.addClass(spinner, "slds-hide"); 
            $A.util.removeClass(spinner, "slds-show");
        });
        $A.enqueueAction(action); 
    }

})