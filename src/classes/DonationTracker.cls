public class DonationTracker {
    
    @AuraEnabled
    public static Integer getDonation(){
        
        HttpRequest req = new HttpRequest();
         req.setEndpoint('https://donationtracker.herokuapp.com/getdonation.php');
         req.setMethod('GET');
         
         // Create a new http object to send the request object
         // A response object is generated as a result of the request  
      
         Http http = new Http();
         HTTPResponse res = http.send(req);
         Map<String, Object> returnValue = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
         return Integer.valueOf(returnValue.get('amount'));
    }
    
    @AuraEnabled
    public static String createDonation(Donation__c donation){
        String msg='';
        try{
            
            HttpRequest req = new HttpRequest();
            req.setEndpoint('https://donationtracker.herokuapp.com/insertdonation.php');
            req.setMethod('POST');
            req.setBody(system.json.serialize(donation));
            
            // Create a new http object to send the request object
            // A response object is generated as a result of the request  
            
            Http http = new Http();
            HTTPResponse res = http.send(req);
            Map<String, Object> returnValue = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            
            msg = String.valueOf(returnValue.get('success'));
        }
        catch(Exception e){
        	msg= e.getStackTraceString();    
        }
        
        return msg;
    }
}