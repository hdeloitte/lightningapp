({
	clickCreateDonation : function(component, event, helper) {
		
        var nameField = component.find("donorname");
        var expname = nameField.get("v.value");
        var newDonation = component.get("v.newDonation");
		helper.createDonation(component, newDonation);
	}
})