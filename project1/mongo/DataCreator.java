import java.io.*;
import java.util.Random;
import java.util.Scanner;
import java.lang.StringBuilder;

class DataCreator {
  public static void main(String[] args) {
    try {
      Random r = new Random();

      File read = new File("userDetails.csv");
      FileInputStream fr = new FileInputStream(read);
      Scanner scan = new Scanner(fr);

      File data = new File("./loadData.js") ;
      FileWriter fw = new FileWriter(data) ;
      BufferedWriter bw = new BufferedWriter(fw) ;

      File users = new File("./loadUsers.js") ;
      FileWriter fwUsers = new FileWriter(users) ;
      BufferedWriter bwUsers = new BufferedWriter(fwUsers) ;

      File inventory = new File("./loadIngredients.js") ;
      FileWriter fwIngredients = new FileWriter(inventory) ;
      BufferedWriter bwIngredients = new BufferedWriter(fwIngredients) ;

      File recipes = new File("./loadRecipes.js") ;
      FileWriter fwRecipes = new FileWriter(recipes) ;
      BufferedWriter bwRecipes = new BufferedWriter(fwRecipes) ;

      File orders = new File("./loadOrders.js") ;
      FileWriter fwOrders = new FileWriter(orders) ;
      BufferedWriter bwOrders = new BufferedWriter(fwOrders) ;

      String[] ingredients = {"Pizza Dough", "Cheese", "ham", "pepperoni", "beef", "salami", "anchovies", "italian sausage", "philly steak", "bacon", "chicken", "shredded parmesan asiago", "banana peppers", "green peppers", "mushrooms", "onions", "spinach", "feta cheese", "shredded provolone", "black olives", "jalapeno peppers", "pineapple", "roasted red peppers", "diced tomatoes", "Classic Tomato Sauce", "Marinara", "BBQ Sauce", "Alfredo", "Garlic Parmesan White Sauce"};

      String[] toppings = {"ham", "pepperoni", "beef", "salami", "anchovies", "italian sausage", "philly steak", "bacon", "chicken", "shredded parmesan asiago", "banana peppers", "green peppers", "mushrooms", "onions", "spinach", "feta cheese", "shredded provolone", "black olives", "jalapeno peppers", "pineapple", "roasted red peppers", "diced tomatoes"};

      String[] sauces = {"Classic Tomato Sauce", "Marinara", "BBQ Sauce", "Alfredo", "Garlic Parmesan White Sauce"};

      //Trash headers
      String header = scan.nextLine();

      //Create users
      int userID = 1;
      while (scan.hasNext()) {
        StringBuilder sb = new StringBuilder();
        String[] line = scan.nextLine().split("[,]");
        sb.append("{_id: ");
        sb.append(userID);
        sb.append(", \"name\": { \"firstName\": \"");
        sb.append(line[0]);
        sb.append("\", \"lastName\": \"");
        sb.append(line[1]);
        sb.append("\"}, \"email\": \"");
        String email = line[0] + line[1] + "@fake.email";
        sb.append(email);
        sb.append("\", \"phone\": \"");
        String phone = String.format("%09d", r.nextInt(1000000000)) + String.format("%01d", r.nextInt(10));
        sb.append(phone);
        sb.append("\", \"address\": {\"lineOne\": \"");
        sb.append(line[2]);
        sb.append("\", \"city\": \"");
        sb.append(line[3]);
        sb.append("\", \"state\": \"");
        sb.append(line[4]);
        sb.append("\", \"zip\":");
        String zip = String.format("%05d", r.nextInt(90000)+10000);
        sb.append(zip);
        sb.append("}}");

        String insert = "db.users.insert(" + sb.toString() + ");\n";
        userID++;
        bwUsers.write(insert);
      }
      scan.close();

      //create ingredients
      for (int i = 0; i < ingredients.length; i++) {
        StringBuilder sb = new StringBuilder();
        sb.append("{_id: ");
        sb.append(i+1);
        sb.append(", \"name\": \"");
        sb.append(ingredients[i]);
        sb.append("\", \"description\": \"description");
        sb.append(r.nextInt(ingredients.length));
        sb.append("\", \"quantity\": ");
        sb.append(150000);

        String insert = "db.inventory.insert(" + sb.toString() + "});\n";
        bwIngredients.write(insert);
      }

      //Create recipes
      for (int i = 0; i < 25; i++) {
        StringBuilder sb = new StringBuilder();
        int num = i + 1;
        String name = "recipe" + num;
        sb.append("{_id: ");
        sb.append(num);
        sb.append(", \"name\": \"");
        sb.append(name);
        sb.append("\", \"description\": \"");
        String description = "description" + r.nextInt(1000);
        sb.append(description);
        sb.append("\", \"instructions\": [");
        int numInst = r.nextInt(10) + 1;
        for (int j = 1; j < numInst; j++) {
          sb.append("\"instruction");
          sb.append(j);
          sb.append("\",");
        }
        sb.append("\"instruction");
        sb.append(numInst);
        sb.append("\"],");
        sb.append("\"ingredients\": [{\"name\": \"Pizza Dough\", \"quantity\": 1},{\"name\": \"Cheese\", \"quantity\": 3}, {\"name\": \"");
        sb.append(sauces[r.nextInt(sauces.length - 1)]);
        sb.append("\", \"quantity\": 2}");

        int numToppings = r.nextInt(5);
        for (int j = numToppings; j > 0; j--) {
          sb.append(", {\"name\": \"");
          sb.append(toppings[r.nextInt(toppings.length-1)]);
          sb.append("\", \"quantity\": ");
          sb.append(r.nextInt(29)+1);
          if (j != 1) {
            sb.append("}");
          } else {
            sb.append("}]}");
          }
        }
        if (numToppings == 0) {
          sb.append("]}");
        }

        String insert = "db.recipes.insert(" + sb.toString() + ");\n";
        bwRecipes.write(insert);
      }

      bwOrders.write("db.loadServerScripts();\n");

      //create orders
      for (int i = 0; i < 50000; i++) {
        String recipe = Integer.toString(r.nextInt(25)+1);
        String user = Integer.toString(r.nextInt(userID-1)+1);

        String insert = "createOrder(" + user + ", " + recipe + ");\n";
        bwOrders.write(insert);
      }

      bw.write("print(\"Loading Users...\");\n");
      bw.write("load(\'loadUsers.js\');\n");
      bw.write("print(\"Users Entered.\");\n");
      bw.write("print(\"Loading Inventory...\");\n");
      bw.write("load(\'loadIngredients.js\');\n");
      bw.write("print(\"Inventory Entered.\");\n");
      bw.write("print(\"Loading Recipes...\");\n");
      bw.write("load(\'loadRecipes.js\');\n");
      bw.write("print(\"Recipes Entered.\");\n");
      bw.write("print(\"Loading Orders...\");\n");
      bw.write("load(\'loadOrders.js\');\n");
      bw.write("print(\"Orders Entered.\");");

      bw.close();
      bwUsers.close();
      bwIngredients.close();
      bwRecipes.close();
      bwOrders.close();
    }
    catch (IOException e) {
      e.printStackTrace() ;
    }


  }
}
