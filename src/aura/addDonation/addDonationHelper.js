({
    createDonation:function(component,donation,event)
    {
        var action = component.get("c.createDonation");
        action.setParams({
          "donation" : donation
      	});
        
        var self = this;
        console.log("Create donation********" + JSON.stringify(donation));
        action.setCallback(this, function(actionResult) {
            var appEvent = $A.get("e.c:donationEvent");
            appEvent.setParams({
            "eventName" : "insert",
            "amount" :donation.Amount__c});
            appEvent.fire();
                
        });
        $A.enqueueAction(action); 
    }
})