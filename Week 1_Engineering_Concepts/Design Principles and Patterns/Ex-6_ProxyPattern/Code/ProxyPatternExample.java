public class ProxyPatternExample{
    interface Image{
        void display();
    }
    static class RealImage implements Image{
        private String file;
        public RealImage(String file){
            this.file=file;
            load();
        }
        private void load(){
            System.out.println("Loading image from remote server: "+file);
        }
        public void display(){
            System.out.println("Displaying image: "+file);
        }
    }
    static class ProxyImage implements Image{
        private String file;
        private RealImage realImage;
        public ProxyImage(String file){
            this.file=file;
        }
        public void display(){
            if(realImage==null){
                realImage=new RealImage(file);
            }
            realImage.display();
        }
    }
    public static void main(String args[]){
        Image image1=new ProxyImage("First image");
        Image image2=new ProxyImage("Second image");
        System.out.println("\nDisplay photo1:");
        image1.display();
        System.out.println("\nDisplay photo2:");
        image2.display();
    }
}