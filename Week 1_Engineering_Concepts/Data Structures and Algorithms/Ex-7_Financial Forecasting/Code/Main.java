public class Main{
    public static double futureValue(double initialValue,double rate,int years) {
        if(years==0){
            return initialValue;
        }
        return futureValue(initialValue,rate,years-1)*(1+rate);
    }
    public static void main(String args[]) {
        double initialValue=2000.0;
        double rate=0.10;           
        int years=2;                
        double result=futureValue(initialValue,rate,years);
        System.out.printf("Future value after "+years+" years: Rs.%.2f\n", result);
    }
}