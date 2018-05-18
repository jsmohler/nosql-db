import java.io.* ;
import java.util.Random ;

public class DataGenerator {
  public static void main(String[] args) {

    Random generator = new Random() ;
    int numUsers = 1000 ;
    int numRecipes = 25;
    int numOrders = 50000;

    try {
      String tuple = "";      // a tuple/record of attributes
      String userID, email, fname, lname, phone, addrLine1, addrLine2, city, state, zip; 
      File file = null ;
      FileWriter fw = null ;
      BufferedWriter bw = null ;
      
      String names[] = {"Alice", "Ben", "Sam", "Caroline", "Josh", "Candace", "Crystal", "Sage", "Mark", "Steve", "Lorna", "Kylee", "Kylie", "Gerry", "Samantha", "Brian", "Drew", "Tom", "Emory", "Carole", "Meredith", "Cooper", "Ryan", "Jake", "Jacob", "Spencer", "Kiana", "Axel", "Viv"};

      String lnames[] = {"Smith", "David", "Fernalld", "Jordan", "McCallister", "Harrilchak", "Norris", "Ferguson", "Green", "Lenley", "Gee", "Zenthoefer", "Armstrong", "Parkintens", "Alamanster", "McElroy", "McVaney", "Walsh", "Sarmey", "Cipoletti", "Lourie", "Wellings"};

      String streets[] = {"Chestnut Trail", "Green Lane", "Lindor Court","A Street", "B Street", "C Street","1st Ave", "2nd Ave", "3rd Ave", "4th Ave", "5th Ave", "6th Ave", "High Street", "University Blvd", "Iliff", "Warren Ave", "Loca Place", "Tremont Court"};
      
      String states[] = {"AL", "CO", "AZ", "CA", "GA", "CT", "KS", "IA", "ME", "MD", "FL", "OH", "NJ", "MT", "MS", "HI"};
      int zips[] = {80111, 303920, 920192, 89201, 48739, 80210, 80211, 982012, 90210, 82916, 837281, 930291, 837161, 83940, 565678};
	
	String cities[] = {"Denver", "Highlands Ranch", "Greenwood Village", "Glendale", "Aurora", "Washington Park", "Capitol Hill", "Rino", "The Highlans", "Commerce City"};
  
  
      // create the Users relation
  
      file = new File("./data_users.txt") ;
      fw = new FileWriter(file) ;
      bw = new BufferedWriter(fw) ;
      int streetCount = 0;
      int stateCount = 0;
      int nameCount = 0;
      int zipCount = 0;
	int cityCount = 0;
  
      for (int i = 1 ; i <= numUsers ; i++) {
        userID = Integer.toString(i) ;// ID
        fname = names[nameCount];// First name
        lname = lnames[generator.nextInt(lnames.length)] ;  
        email = fname + "." + lname + i + "@gmail.com";
        phone = Integer.toString(generator.nextInt(900) + 100) + "-" + Integer.toString(generator.nextInt(900) + 100) + "-" 
        		+ Integer.toString(generator.nextInt(9000) + 1000);
        addrLine1 = Integer.toString(generator.nextInt(400)) + " " + streets[streetCount];
        addrLine2 = "Apt #" + i;
       
	city = cities[cityCount];

        state = states[stateCount];
        zip = Integer.toString(zips[zipCount]);
        
        //user, email, fname, lname, phone, addr1, addr2, city, state, zip
        tuple = userID + "," + email + "," + fname + "," + lname + "," + phone + "," +  addrLine1 + "," + addrLine2 + "," + city + "," + state + "," + zip + "\n";
  
        bw.write(tuple) ;
        if (nameCount == names.length - 1){
        	nameCount = 0;
        } else {
        	nameCount ++;
        }
        if (streetCount == streets.length - 1){
        	streetCount = 0;
        } else {
        	streetCount ++;
        }
        if (stateCount == states.length -1){
        	stateCount = 0;
        } else {
        	stateCount ++;
        }
        if (zipCount == zips.length - 1){
        	zipCount = 0; 
        } else {
        	zipCount ++;
        }
	if (cityCount == cities.length - 1){
		cityCount = 0;
	} else {
		cityCount ++;
	}
      }
      bw.close() ;

   
  
      file = new File("./data_recipes.txt") ;
      fw = new FileWriter(file) ;
      bw = new BufferedWriter(fw) ;
      String recipeName;
      String recipeDescr;
  
      for (int i = 1 ; i <= numRecipes ; i++) {
        recipeName = Integer.toString(i) ; 
        recipeDescr = "This recipe is really yummy!" + Integer.toString(i);
        tuple = recipeName + ", " + recipeDescr + "\n";
  
        bw.write(tuple) ;
      }
      bw.close() ;
  
  
      
      file = new File("./data_orders.txt") ;
      fw = new FileWriter(file) ;
      bw = new BufferedWriter(fw) ;
      
      String orderID, orderUserID, timePlaced, orderRecName;

  
      for (int i = 1 ; i <= numOrders ; i++) {
        
        orderID = Integer.toString(i) ;
  
        orderUserID = Integer.toString(generator.nextInt(numUsers)+1 ) ;
  
        timePlaced = "2017-" + Integer.toString(generator.nextInt(12)+1) + 
             "-" + Integer.toString(generator.nextInt(28)+1) ;
	orderRecName = Integer.toString(generator.nextInt(numRecipes)+1 ) ;
  
        tuple = orderID + ", " + orderUserID + ", " + timePlaced + ", " + orderRecName + "\n";
  
        bw.write(tuple) ;
      }
      bw.close() ; 
    }
    catch (IOException e) {
      e.printStackTrace() ;
    }
  }
}
