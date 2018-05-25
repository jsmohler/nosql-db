CREATE DATABASE hospital;

\c hospital

CREATE TABLE doctors (
	doctorID SERIAL PRIMARY KEY NOT NULL,
	fName varchar(20) NOT NULL,
	lName varchar(20) NOT NULL
);

CREATE TABLE patients (
	patientID SERIAL PRIMARY KEY NOT NULL,
	fName varchar(20) NOT NULL,
	lName varchar(20) NOT NULL
);

CREATE TABLE illnesses (
	illName varchar(30) PRIMARY KEY NOT NULL
);

CREATE TABLE treatments (
	treatName varchar(30) PRIMARY KEY NOT NULL
);

CREATE TABLE pdMap (
	patientID SERIAL REFERENCES patients,
	doctorID SERIAL REFERENCES doctors

);

CREATE TABLE pitMap (
	patientID SERIAL REFERENCES patients, 
	illName varchar(30) REFERENCES illnesses,
	treatName varchar(30) REFERENCES treatments
);

\include loadData.sql
