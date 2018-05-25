import java.io.* ;
import java.util.Random ;

public class DataGenerator {
  public static void main(String[] args) {

    Random generator = new Random() ;
    int numDoctors = 100;
    int numPatients = 10000;
    int numIllnesses = 1000;
    int numTreatments = 750;
    int doctors[] = new int[numDoctors];
    int patients[] = new int[numPatients];
    String patientDoctors[] = new String[35];
    String treatments[] = new String[numTreatments];
    String illnesses[] = new String[numIllnesses];
    String fullName;
    int nameCount = 0;


    try {
      String tuple = "";      // a tuple/record of attributes
      String userID, email, fname, lname, phone, addrLine1, addrLine2, city, state, zip; 
      File file = null ;
      FileWriter fw = null ;
      BufferedWriter bw = null ;
      
      String names[] = {"Alice", "Ben", "Sam", "Caroline", "Josh", "Candace", "Crystal", "Sage", "Mark", "Steve", "Lorna", "Kylee", "Kylie", "Gerry", "Samantha", "Brian", "Drew", "Tom", "Emory", "Carole", "Meredith", "Cooper", "Ryan", "Jake", "Jacob", "Spencer", "Kiana", "Axel", "Viv", "Jordan", "Cedric", "Dan", "Charlie", "Colman", "Rosie", "Colleen", "Thomas", "James", "Micah", "Melanie", "Mila", "Kelly", "Molly", "Abby", "Jory", "Amanda"};

      String lnames[] = {"Smith", "David", "Fernalld", "Jordan", "McCallister", "Harrilchak", "Norris", "Ferguson", "Green", "Lenley", "Gee", "Zenthoefer", "Armstrong", "Parkintens", "Alamanster", "McElroy", "McVaney", "Walsh", "Sarmey", "Cipoletti", "Lourie", "Wellings", "Cook", "Jordan", "Elens", "Jones", "Kummings", "Clermont", "Boettcher", "Obama"};

      String illnessNames[] = {"Flu", "Stomach Bug", "Cough", "Mono", "Appendicitis", "Strep Throat", " Cancer",
                                "Cold", "Lupis", "Broken Bone", "Swine Flu", "Influenza", "Allergies", "Pancreatitis", "Blindness",
                                "Asthma", "Bladder Infection", "Brain tumor", "Bunions", "Bronchitis", "Pnemonia",
                                "Chicken pox", "Kidney disease", "Chest pain", "Constipation", "Croup", "Infection", "Abcess" };
      String treatmentNames[] = {"Medicine", "Surgery", "Rest", "Better Diet", "Follow up", "Antibiotics", "Physical Therapy",
                                "Psychotherapy", "Rehab", "Prespription drug", "Chemotherapy", "X-rays", "Allergy Medicine", "Lasik", "Blood work", "Counseling", "Vaccine", "EKG", "Specialist"};


    //Generate doctors, output file, keep doctors array
      file = new File("./data_doctors.txt") ;
      fw = new FileWriter(file) ;
      bw = new BufferedWriter(fw);
      String dID;

      for (int i = 1 ; i <= numDoctors; i++) {
        dID = Integer.toString(i) ;// ID
        fname = "Dr. " + names[generator.nextInt(names.length)];// First name
        lname = lnames[generator.nextInt(lnames.length)] ;

	    tuple = dID + "," + fname + "," + lname + "\n" ;

	    doctors[i-1] = i;
	    if (i < (.35 * numDoctors)) {
	        patientDoctors[i-1] = fname + ", " + lname + "\n" ;
	    }
  	
        bw.write(tuple) ;
        if (nameCount == names.length - 1){
                	nameCount = 0;
                } else {
                	nameCount ++;
                }
      }
      bw.close() ;

      // Generate patients, output file, keep patients array
            file = new File("./data_patients.txt") ;
            fw = new FileWriter(file) ;
            bw = new BufferedWriter(fw);
            String pID;

            for (int i = 1 ; i <= numPatients; i++) {
              pID = Integer.toString(i) ;// ID
              fname = names[generator.nextInt(names.length)];// First name
              lname = lnames[generator.nextInt(lnames.length)] ;

      	    tuple = pID + "," + fname + "," + lname + "\n";
      	    patients[i-1] = i;

              bw.write(tuple) ;
            }

            for (int i = 0; i < patientDoctors.length -1; i++){
                pID = Integer.toString(i + numPatients + 1);
                tuple = pID + "," + patientDoctors[i];
                bw.write(tuple);
            }
            bw.close() ;

      // Generate Illnesses
        file = new File("./data_illnesses.txt") ;
        fw = new FileWriter(file) ;
        bw = new BufferedWriter(fw);
        String illness;

        for (int i = 0; i < numIllnesses; i ++){
            illness = illnessNames[generator.nextInt(illnessNames.length)] + Integer.toString(i);
            tuple = illness + "\n";
            bw.write(tuple);
            illnesses[i] = illness;
        }
        bw.close();

    // Generate treatments
        file = new File("./data_treatments.txt") ;
        fw = new FileWriter(file) ;
        bw = new BufferedWriter(fw);
        String treatment;

        for (int i = 0; i < numTreatments; i ++){
            treatment = treatmentNames[generator.nextInt(treatmentNames.length)] + Integer.toString(i);
            tuple = treatment + "\n";
            bw.write(tuple);
            treatments[i] = treatment;
        }
        bw.close();

  // Generate patient - doctor mapping table
         file = new File("./data_pdMap.txt") ;
          fw = new FileWriter(file) ;
          bw = new BufferedWriter(fw);
          //String pID, dID;
          int doc1;
          int doc2;
          int doc3;

          for (int i = 0; i < numPatients + (.35 * numDoctors) -1; i++){
            doc1 = doctors[generator.nextInt(doctors.length)];
            doc2 = doctors[generator.nextInt(doctors.length)];
            doc3 = doctors[generator.nextInt(doctors.length)];

            if (doc1 == doc2) {
                if (doc2 + 1 < doctors.length){
                    doc2 ++;
                } else { doc2 --;}
            }
            if (doc2 == doc3){
                if (doc3 + 2 < doctors.length) {
                    doc3 += 2;
                } else { doc3 -= 2;}
            }

            pID = Integer.toString(i + 1);
            dID = Integer.toString(doc1);
            tuple = pID + "," + dID + "\n";
            bw.write(tuple);

            if (i % 2 == 0) {
                dID = Integer.toString(doc2);
                tuple = pID + "," + dID + "\n";
                bw.write(tuple);
            }

            if (i % 3 == 0 && (i % 2 != 0)){
                dID = Integer.toString(doc2);
                tuple = pID + "," + dID + "\n";
                bw.write(tuple);

                dID = Integer.toString(doc3);
                tuple = pID + "," + dID + "\n";
                bw.write(tuple);
                }
          }
          bw.close();

   // Generate patient illness treatment map
          file = new File("./data_pitMap.txt") ;
          fw = new FileWriter(file) ;
          bw = new BufferedWriter(fw);
          String trt1, trt2, trt3, ill1, ill2, ill3;
          int tran1, tran2, tran3, iran1, iran2, iran3;


          for (int i = 0; i < numPatients + (.35 * numDoctors) -1; i++){
            tran1 = generator.nextInt(treatments.length);
            tran2 = generator.nextInt(treatments.length);
            tran3 = generator.nextInt(treatments.length);
            if (tran1 == tran2) {
                if (tran2 + 1 < treatments.length){
                    tran2 ++;
                } else{ tran2 --; }
            }

            if (tran2 == tran3) {
                if (tran2 + 2 < treatments.length){
                    tran2 += 2;
             } else{ tran2 -= 2; }
            }
            trt1 = treatments[tran1];
            trt2 = treatments[tran2];
            trt3 = treatments[tran3];

            iran1 = generator.nextInt(illnesses.length);
            iran2 = generator.nextInt(illnesses.length);
            iran3 = generator.nextInt(illnesses.length);
            if (iran1 == iran2){
                if (iran2 + 1 < illnesses.length){
                    iran2++;
                } else { iran2 --; }
            }
            if (iran2 == iran3) {
                if (iran2 + 2 < illnesses.length){
                     iran2 += 2;
              } else{ iran2 -= 2; }
            }

            ill1 = illnesses[iran1];
            ill2 = illnesses[iran2];
            ill3 = illnesses[iran3];

            pID = Integer.toString(i + 1);
            tuple = pID + "," + ill1 + "," + trt1 + "\n";
            bw.write(tuple);

            if (i % 2 == 0) {
                tuple = pID + "," + ill2 + "," + trt2 + "\n";
                bw.write(tuple);
            }

            if (i % 3 == 0 && (i % 2 != 0)){
                tuple = pID + "," + ill2 + "," + trt2 + "\n";
                bw.write(tuple);

                tuple = pID + "," + ill3 + "," + trt3 + "\n";
                bw.write(tuple);
                }
          }
          bw.close();

       // Doctors have 35% chance of being a patient



    }
    catch (IOException e) {
      e.printStackTrace() ;
    }
  }
}





