public class BuilderPattern{
    static class Computer{
        private String CPU;
        private String RAM;
        private String Storage;
        private String Graphics;
        private String OS;
        private Computer(Builder builder){
            this.CPU=builder.CPU;
            this.RAM=builder.RAM;
            this.Storage=builder.Storage;
            this.Graphics=builder.Graphics;
            this.OS=builder.OS;
        }
        public static class Builder{
            private String CPU;
            private String RAM;
            private String Storage;
            private String Graphics;
            private String OS;
            public Builder(String CPU){
                this.CPU=CPU;
            }
            public Builder setRAM(String RAM){
                this.RAM=RAM;
                return this;
            }
            public Builder setStorage(String Storage){
                this.Storage=Storage;
                return this;
            }
            public Builder setGraphics(String Graphics){
                this.Graphics=Graphics;
                return this;
            }
            public Builder setOS(String OS){
                this.OS=OS;
                return this;
            }
            public Computer build(){
                return new Computer(this);
            }
        }
        public String toString(){
            return "CPU=" + CPU + ", RAM=" + RAM +
                    ", Storage=" + Storage + ", GraphicsCard=" + Graphics +
                    ", OperatingSystem=" + OS;
        }
    }
    public static void main(String args[]){
        Computer basic=new Computer.Builder("Intel i3").setRAM("8GB").setStorage("550GB").setOS("Windows 11").build();
        Computer adv=new Computer.Builder("Intel i9").setRAM("16GB").setStorage("1TB").setGraphics("AMD RADEON").setOS("Windows 11").build();
        System.out.println("Basic Computer: "+basic);
        System.out.println("Advanced Computer: "+adv);
    }
}