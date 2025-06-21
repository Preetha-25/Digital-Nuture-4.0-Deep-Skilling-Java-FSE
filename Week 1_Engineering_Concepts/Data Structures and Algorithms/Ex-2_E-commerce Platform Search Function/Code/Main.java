import java.util.Arrays;
import java.util.Scanner;
class Product {
    int id;
    String name;

    Product(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
public class Main {
    public static int linearSearch(Product[] products, String target) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].name.equalsIgnoreCase(target)) {
                return i;
            }
        }
        return -1;
    }
    public static int binarySearch(Product[] products, String target) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int result = products[mid].name.compareToIgnoreCase(target);
            if (result == 0) return mid;
            else if (result < 0) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Pen"),
            new Product(2, "Book"),
            new Product(3, "Laptop"),
            new Product(4, "Mobile")
        };
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product name: ");
        String search = sc.nextLine();

        int result1 = linearSearch(products, search);
        if (result1 != -1) {
            System.out.println("Found by Linear Search: " + products[result1].name);
        } else {
            System.out.println("Not found in Linear Search.");
        }
        Arrays.sort(products, (a, b) -> a.name.compareToIgnoreCase(b.name));

        int result2 = binarySearch(products, search);
        if (result2 != -1) {
            System.out.println("Found by Binary Search: " + products[result2].name);
        } else {
            System.out.println("Not found in Binary Search.");
        }

        sc.close();
    }
}
