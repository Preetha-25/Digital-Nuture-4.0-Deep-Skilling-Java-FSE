package Code;

public class Main 
{
    static class Logger {
        private static Logger singleObject;
        private Logger() {
            System.out.println("Logger Created");
        }
        public static Logger getInstance() {
            if (singleObject == null) {
                singleObject = new Logger();
            }
            return singleObject;
        }
        public void showMessage(String message) {
            System.out.println("Log: " + message);
        }
    }
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.showMessage("Hello from logger1");
        logger2.showMessage("Hello from logger2");
        if (logger1 == logger2) {
            System.out.println("Same object (Singleton works)");
        } else {
            System.out.println("Different objects (Singleton failed)");
        }
    }
}
