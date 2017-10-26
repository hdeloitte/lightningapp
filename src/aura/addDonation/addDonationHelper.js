({
    createDonation:function(component,donation,event)
    {
        //amount validation
        if(donation.Amount__c>100){
            var inputCmp  = component.find('amount');
            inputCmp.set("v.errors", [{message:"Donation amount should be less than 100"}]);
            return false;
        }
        else
        {
           var inputCmp  = component.find('amount');
            inputCmp.set("v.errors", []);
        }
        
        //date validation
        if(donation.Donation_Date__c==''){
            var inputCmp  = component.find('expdate');
            inputCmp.set("v.errors", [{message:"Please select date"}]);
            return false;
        }
        else
        {
           var inputCmp  = component.find('expdate');
            inputCmp.set("v.errors", []);
        }
        
        return false;
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