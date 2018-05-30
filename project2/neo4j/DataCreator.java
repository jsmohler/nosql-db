import java.io.*;
import java.util.Random;
import java.lang.StringBuilder;
import java.util.ArrayList;
import java.lang.Math;
import java.util.Collections;
import java.util.List;

class DataCreator {
  public static void main(String[] args) {

    int numDocs = 100;
    int numPats = 10000;
    int numIlls = 1000;
    int numTreats = 750;

    try {
      Random r = new Random();

      File relations = new File("./relations.cql") ;
      FileWriter fw = new FileWriter(relations) ;
      BufferedWriter bw = new BufferedWriter(fw) ;

      File docs = new File("./loadDoctors.cql") ;
      FileWriter fwDocs = new FileWriter(docs) ;
      BufferedWriter bwDocs = new BufferedWriter(fwDocs) ;

      File patients = new File("./loadPatients.cql") ;
      FileWriter fwPats = new FileWriter(patients) ;
      BufferedWriter bwPats = new BufferedWriter(fwPats) ;

      File illnesses = new File("./loadIllnesses.cql") ;
      FileWriter fwIll = new FileWriter(illnesses) ;
      BufferedWriter bwIll = new BufferedWriter(fwIll) ;

      File treatments = new File("./loadTreatments.cql") ;
      FileWriter fwTreat = new FileWriter(treatments) ;
      BufferedWriter bwTreat = new BufferedWriter(fwTreat) ;

      //select 35% of doctors to be patients
      ArrayList<Integer> docPats = new ArrayList<Integer>();
      double patDocs = numDocs * 0.35;
      int selected = (int) Math.ceil(patDocs);

      ArrayList<Integer> allDocs = new ArrayList<Integer>();
      for (int i = 0; i < numDocs; i++) {
        allDocs.add(i+1);
      }
      Collections.shuffle(allDocs);
      List<Integer> list = allDocs.subList(0, selected);

      for (int i = 0; i < list.size(); i++) {
        docPats.add(list.get(i));
      }


      //Build 100 doctors
      //ensure doctor names are unique with CREATE CONSTRAINT ON (d:Doctor) ASSERT d.name IS UNIQUE;
      bwDocs.write("CREATE CONSTRAINT ON (d:Doctor) ASSERT d.name IS UNIQUE;\n");

      //CREATE (d:Doctor {name:"Fake Name", is_patient: "yes"})
      for (int i = 0; i < numDocs; i++) {
        StringBuilder sb = new StringBuilder();
        sb.append("CREATE (d:Doctor {name: \"Doctor");
        sb.append(i+1);
        sb.append("\", is_patient: \"");
        if(docPats.contains(i+1)) {
          sb.append("yes\"});\n");
          docPats.add(i+1);
        } else {
          sb.append("no\"});\n");
        }
        bwDocs.write(sb.toString());
      }
      bwDocs.close();

      //Build 10000 patients
      //ensure patient names are unique with CREATE CONSTRAINT ON (p:Patient) ASSERT p.name IS UNIQUE;
      bwPats.write("CREATE CONSTRAINT ON (p:Patient) ASSERT p.name IS UNIQUE;\n");

      //CREATE (p:Patient {name:"Fake Name"})
      for (int i = 0; i < numPats; i++) {
        StringBuilder sb = new StringBuilder();
        sb.append("CREATE (p:Patient {name: \"Patient");
        sb.append(i+1);
        sb.append("\"});\n");
        bwPats.write(sb.toString());
      }
      bwPats.close();

      //Build 1000 illnesses
      //ensure illness names are unique with CREATE CONSTRAINT ON (i:Illness) ASSERT i.name IS UNIQUE;
      bwIll.write("CREATE CONSTRAINT ON (i:Illness) ASSERT i.name IS UNIQUE;\n");

      //CREATE (i:Illness {name:"Fake Name"})
      for (int i = 0; i < numIlls; i++) {
        StringBuilder sb = new StringBuilder();
        sb.append("CREATE (i:Illness {name: \"Illness");
        sb.append(i+1);
        sb.append("\"});\n");
        bwIll.write(sb.toString());
      }
      bwIll.close();

      //Build 750 Treatments
      //ensure treatment names are unique with CREATE CONSTRAINT ON (t:Treatment) ASSERT t.name IS UNIQUE;
      bw.write("CREATE CONSTRAINT ON (t:Treatment) ASSERT t.name IS UNIQUE;\n");

      //CREATE (t:Treatment {name:"Fake Name"})
      for (int i = 0; i < numTreats; i++) {
        StringBuilder sb = new StringBuilder();
        sb.append("CREATE (t:Treatment {name: \"Treatment");
        sb.append(i+1);
        sb.append("\"});\n");
        bwTreat.write(sb.toString());
      }
      bwTreat.close();

      /*
      Every patient should be seeing 1-5 doctors, and should have
      between 0-3 different illnesses. Any patients that have an
      illness should be receiving at least one treatment. Doctors
      have a 35% chance of being a patient themselves, in which case
      the patient rules apply to them.

      MATCH (p:Publication {name: "Wine Expert Monthly"}),
      (w:Wine {name: "Prancing Wolf", vintage: 2015})
      CREATE (p)-[r:reported_on]->(w)
      */

      //build relationships between patients/doctors and doctors
      int n = numPats + docPats.size();
      for (int i = 0; i < n; i++) {
        int sees = r.nextInt(5)+1;
        StringBuilder sb = new StringBuilder();

        if (i < numPats) {
          for (int j = 0; j < sees; j++) {
            sb.append("MATCH (p:Patient {name: \"Patient");
            sb.append(i+1);
            sb.append("\"}),");
            sb.append("(d:Doctor {name: \"Doctor");
            sb.append(r.nextInt(numDocs)+1);
            sb.append("\"})\n");
            sb.append("CREATE (p)-[r:sees]->(d);\n");
          }
        } else {
          int doc = docPats.get(i-numPats);
          for (int j = 0; j < sees; j++) {
            sb.append("MATCH (a:Doctor {name: \"Doctor");
            sb.append(doc);
            sb.append("\"}),");
            sb.append("(b:Doctor {name: \"Doctor");
            int docsDoc = r.nextInt(numDocs)+1;
            while (docsDoc == doc) {
              docsDoc = r.nextInt(numDocs)+1;
            }
            sb.append(docsDoc);
            sb.append("\"})\n");
            sb.append("CREATE (a)-[r:sees]->(b);\n");
          }
        }
        bw.write(sb.toString());
      }

      //build relationships between patients and illnesses and treatments
      for (int i = 0; i < n; i++) {
        int has = r.nextInt(4);
        int receives = r.nextInt(5)+1;
        StringBuilder sb = new StringBuilder();
        if (has != 0) {
          if (i < numPats) {
            //assign illness(es)
            for (int j = 0; j < has; j++) {
              sb.append("MATCH (p:Patient {name: \"Patient");
              sb.append(i+1);
              sb.append("\"}),");
              sb.append("(i:Illness {name: \"Illness");
              sb.append(r.nextInt(numIlls)+1);
              sb.append("\"})\n");
              sb.append("CREATE (p)-[r:has]->(i);\n");
            }

            //assign treatment(s)
            for (int j = 0; j < receives; j++) {
              sb.append("MATCH (p:Patient {name: \"Patient");
              sb.append(i+1);
              sb.append("\"}),");
              sb.append("(t:Treatment {name: \"Treatment");
              sb.append(r.nextInt(numTreats)+1);
              sb.append("\"})\n");
              sb.append("CREATE (p)-[r:receives]->(t);\n");
            }

          } else {
            int doc = docPats.get(i-numPats);

            //assign illness(es)
            for (int j = 0; j < has; j++) {
              sb.append("MATCH (d:Doctor {name: \"Doctor");
              sb.append(doc);
              sb.append("\"}),");
              sb.append("(i:Illness {name: \"Illness");
              sb.append(r.nextInt(numIlls)+1);
              sb.append("\"})\n");
              sb.append("CREATE (d)-[r:has]->(i);\n");
            }

            //assign treatment(s)
            for (int j = 0; j < receives; j++) {
              sb.append("MATCH (d:Doctor {name: \"Doctor");
              sb.append(doc);
              sb.append("\"}),");
              sb.append("(t:Treatment {name: \"Treatment");
              sb.append(r.nextInt(numTreats)+1);
              sb.append("\"})\n");
              sb.append("CREATE (d)-[r:receives]->(t);\n");
            }
          }
        }
        bw.write(sb.toString());
      }
      bw.close();
    } catch (IOException e) {
      e.printStackTrace() ;
    }
  }
}
