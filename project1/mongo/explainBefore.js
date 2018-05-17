> db.orders.find({recipe: 1}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2078,
	"executionTimeMillis" : 27,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 1
			}
		},
		"nReturned" : 2078,
		"executionTimeMillisEstimate" : 21,
		"works" : 50002,
		"advanced" : 2078,
		"needTime" : 47923,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 2}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2036,
	"executionTimeMillis" : 23,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 2
			}
		},
		"nReturned" : 2036,
		"executionTimeMillisEstimate" : 30,
		"works" : 50002,
		"advanced" : 2036,
		"needTime" : 47965,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 3}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2040,
	"executionTimeMillis" : 24,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 3
			}
		},
		"nReturned" : 2040,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 2040,
		"needTime" : 47961,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 4}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2002,
	"executionTimeMillis" : 16,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 4
			}
		},
		"nReturned" : 2002,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 2002,
		"needTime" : 47999,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 5}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2005,
	"executionTimeMillis" : 25,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 5
			}
		},
		"nReturned" : 2005,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 2005,
		"needTime" : 47996,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 6}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1939,
	"executionTimeMillis" : 30,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 6
			}
		},
		"nReturned" : 1939,
		"executionTimeMillisEstimate" : 32,
		"works" : 50002,
		"advanced" : 1939,
		"needTime" : 48062,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 7}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1926,
	"executionTimeMillis" : 22,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 7
			}
		},
		"nReturned" : 1926,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 1926,
		"needTime" : 48075,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 8}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1950,
	"executionTimeMillis" : 23,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 8
			}
		},
		"nReturned" : 1950,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 1950,
		"needTime" : 48051,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 9}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2037,
	"executionTimeMillis" : 17,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 9
			}
		},
		"nReturned" : 2037,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 2037,
		"needTime" : 47964,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 10}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2031,
	"executionTimeMillis" : 23,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 10
			}
		},
		"nReturned" : 2031,
		"executionTimeMillisEstimate" : 22,
		"works" : 50002,
		"advanced" : 2031,
		"needTime" : 47970,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 11}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1972,
	"executionTimeMillis" : 25,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 11
			}
		},
		"nReturned" : 1972,
		"executionTimeMillisEstimate" : 31,
		"works" : 50002,
		"advanced" : 1972,
		"needTime" : 48029,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 12}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1985,
	"executionTimeMillis" : 17,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 12
			}
		},
		"nReturned" : 1985,
		"executionTimeMillisEstimate" : 11,
		"works" : 50002,
		"advanced" : 1985,
		"needTime" : 48016,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 13}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1991,
	"executionTimeMillis" : 20,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 13
			}
		},
		"nReturned" : 1991,
		"executionTimeMillisEstimate" : 11,
		"works" : 50002,
		"advanced" : 1991,
		"needTime" : 48010,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 14}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2027,
	"executionTimeMillis" : 25,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 14
			}
		},
		"nReturned" : 2027,
		"executionTimeMillisEstimate" : 12,
		"works" : 50002,
		"advanced" : 2027,
		"needTime" : 47974,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 15}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1943,
	"executionTimeMillis" : 19,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 15
			}
		},
		"nReturned" : 1943,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 1943,
		"needTime" : 48058,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 16}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2015,
	"executionTimeMillis" : 20,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 16
			}
		},
		"nReturned" : 2015,
		"executionTimeMillisEstimate" : 0,
		"works" : 50002,
		"advanced" : 2015,
		"needTime" : 47986,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 17}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1956,
	"executionTimeMillis" : 27,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 17
			}
		},
		"nReturned" : 1956,
		"executionTimeMillisEstimate" : 24,
		"works" : 50002,
		"advanced" : 1956,
		"needTime" : 48045,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 18}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2021,
	"executionTimeMillis" : 25,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 18
			}
		},
		"nReturned" : 2021,
		"executionTimeMillisEstimate" : 21,
		"works" : 50002,
		"advanced" : 2021,
		"needTime" : 47980,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 19}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2017,
	"executionTimeMillis" : 23,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 19
			}
		},
		"nReturned" : 2017,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 2017,
		"needTime" : 47984,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 20}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2020,
	"executionTimeMillis" : 27,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 20
			}
		},
		"nReturned" : 2020,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 2020,
		"needTime" : 47981,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 21}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1993,
	"executionTimeMillis" : 16,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 21
			}
		},
		"nReturned" : 1993,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 1993,
		"needTime" : 48008,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 22}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1999,
	"executionTimeMillis" : 23,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 22
			}
		},
		"nReturned" : 1999,
		"executionTimeMillisEstimate" : 20,
		"works" : 50002,
		"advanced" : 1999,
		"needTime" : 48002,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 23}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2010,
	"executionTimeMillis" : 24,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 23
			}
		},
		"nReturned" : 2010,
		"executionTimeMillisEstimate" : 31,
		"works" : 50002,
		"advanced" : 2010,
		"needTime" : 47991,
		"needYield" : 0,
		"saveState" : 391,
		"restoreState" : 391,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 24}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2015,
	"executionTimeMillis" : 17,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 24
			}
		},
		"nReturned" : 2015,
		"executionTimeMillisEstimate" : 10,
		"works" : 50002,
		"advanced" : 2015,
		"needTime" : 47986,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
> db.orders.find({recipe: 25}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1992,
	"executionTimeMillis" : 21,
	"totalKeysExamined" : 0,
	"totalDocsExamined" : 50000,
	"executionStages" : {
		"stage" : "COLLSCAN",
		"filter" : {
			"recipe" : {
				"$eq" : 25
			}
		},
		"nReturned" : 1992,
		"executionTimeMillisEstimate" : 21,
		"works" : 50002,
		"advanced" : 1992,
		"needTime" : 48009,
		"needYield" : 0,
		"saveState" : 390,
		"restoreState" : 390,
		"isEOF" : 1,
		"invalidates" : 0,
		"direction" : "forward",
		"docsExamined" : 50000
	}
}
