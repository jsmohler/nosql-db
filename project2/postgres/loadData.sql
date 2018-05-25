\COPY doctors FROM 'data_doctors.txt' WITH (FORMAT csv);

\COPY patients FROM 'data_patients.txt' WITH (FORMAT csv);

\COPY illnesses FROM 'data_illnesses.txt' WITH (FORMAT csv);

\COPY treatments FROM 'data_treatments.txt' WITH (FORMAT csv);

\COPY pdMap FROM 'data_pdMap.txt' WITH (FORMAT csv);

\COPY pitMap FROM 'data_pitMap.txt' WITH (FORMAT csv);
