public class DonationTracker {
    
    @AuraEnabled
    public static Integer getDonation(){
        
        AggregateResult aggr = [select sum(amount__c) from Donation__c];
        
        return Integer.valueOf(aggr.get('expr0'));
    }
    
    @AuraEnabled
    public static String createDonation(Donation__c donation){
        String msg='';
        try{
        	insert donation;   
            msg= 'success';
        }
        catch(Exception e){
        	msg= e.getStackTraceString();    
        }
        
        return msg;
    }
}