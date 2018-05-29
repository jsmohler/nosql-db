HOW TO USE:

There are two ways to build the data base with the given files. Both ways first require that you compelete the following steps:

(1) In the terminal, run the following command: javac DataCreator.java
(2) Run: java DataCreator

This will produce the loadDoctors, loadPatients, loadTreatments, and loadIllnesses, and relations files. the first method then just requires that you directly copy and paste the commands in those files into the neo4j browser interface. However, the simpler option is to run the 5 commands listed in the loadCommands file from the terminal, which will pipe all the commands in each file through the neo4j-shell. Warning, the loadPatients and relations files may take some time to complete. 


FILE DESCTIPTIONS:

(1) DataCreator.java- Builds load scripts for doctors, patients, illnesses, treatments, and relations. 

(2) structure.txt- Describe the labels and relationships that used to represent the data.

(3) extraCredit.txt- Answers the 5 extra credit questions about neo4j. 

(4) loadCommands.txt- Gives terminals commands for loading the .cql files into neo4j.

(5) loadDoctors.cql- Lists commands to create 100 unique doctors, with a 35% chance of those doctors also being a patient. 

(6) loadPatients.cql- Lists commands to create 10000 unique patients. 

(7) loadIllnesses.cql- Lists commands to create 1000 unique illnesses. 

(8) loadTreatments.cql- Lists commands to create 750 unique treatments. 

(9) relations.cql- List commands to build relationships between nodes that meet the following criteria: Every patient should be seeing 1-5 doctors, and should have between 0-3 different illnesses. Any patients that have an illness should be receiving at least one treatment.
