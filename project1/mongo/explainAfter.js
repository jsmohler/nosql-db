> db.orders.find({recipe: 1}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2078,
	"executionTimeMillis" : 8,
	"totalKeysExamined" : 2078,
	"totalDocsExamined" : 2078,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2078,
		"executionTimeMillisEstimate" : 0,
		"works" : 2079,
		"advanced" : 2078,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 16,
		"restoreState" : 16,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2078,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2078,
			"executionTimeMillisEstimate" : 0,
			"works" : 2079,
			"advanced" : 2078,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 16,
			"restoreState" : 16,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[1.0, 1.0]"
				]
			},
			"keysExamined" : 2078,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 2}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2036,
	"executionTimeMillis" : 9,
	"totalKeysExamined" : 2036,
	"totalDocsExamined" : 2036,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2036,
		"executionTimeMillisEstimate" : 0,
		"works" : 2037,
		"advanced" : 2036,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2036,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2036,
			"executionTimeMillisEstimate" : 0,
			"works" : 2037,
			"advanced" : 2036,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[2.0, 2.0]"
				]
			},
			"keysExamined" : 2036,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 3}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2040,
	"executionTimeMillis" : 4,
	"totalKeysExamined" : 2040,
	"totalDocsExamined" : 2040,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2040,
		"executionTimeMillisEstimate" : 0,
		"works" : 2041,
		"advanced" : 2040,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2040,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2040,
			"executionTimeMillisEstimate" : 0,
			"works" : 2041,
			"advanced" : 2040,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[3.0, 3.0]"
				]
			},
			"keysExamined" : 2040,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 4}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2002,
	"executionTimeMillis" : 3,
	"totalKeysExamined" : 2002,
	"totalDocsExamined" : 2002,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2002,
		"executionTimeMillisEstimate" : 0,
		"works" : 2003,
		"advanced" : 2002,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2002,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2002,
			"executionTimeMillisEstimate" : 0,
			"works" : 2003,
			"advanced" : 2002,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[4.0, 4.0]"
				]
			},
			"keysExamined" : 2002,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 5}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2005,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2005,
	"totalDocsExamined" : 2005,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2005,
		"executionTimeMillisEstimate" : 0,
		"works" : 2006,
		"advanced" : 2005,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2005,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2005,
			"executionTimeMillisEstimate" : 0,
			"works" : 2006,
			"advanced" : 2005,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[5.0, 5.0]"
				]
			},
			"keysExamined" : 2005,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 6}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1939,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1939,
	"totalDocsExamined" : 1939,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1939,
		"executionTimeMillisEstimate" : 10,
		"works" : 1940,
		"advanced" : 1939,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1939,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1939,
			"executionTimeMillisEstimate" : 0,
			"works" : 1940,
			"advanced" : 1939,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[6.0, 6.0]"
				]
			},
			"keysExamined" : 1939,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 7}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1926,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1926,
	"totalDocsExamined" : 1926,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1926,
		"executionTimeMillisEstimate" : 0,
		"works" : 1927,
		"advanced" : 1926,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1926,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1926,
			"executionTimeMillisEstimate" : 0,
			"works" : 1927,
			"advanced" : 1926,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[7.0, 7.0]"
				]
			},
			"keysExamined" : 1926,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 8}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1950,
	"executionTimeMillis" : 8,
	"totalKeysExamined" : 1950,
	"totalDocsExamined" : 1950,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1950,
		"executionTimeMillisEstimate" : 12,
		"works" : 1951,
		"advanced" : 1950,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 16,
		"restoreState" : 16,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1950,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1950,
			"executionTimeMillisEstimate" : 0,
			"works" : 1951,
			"advanced" : 1950,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 16,
			"restoreState" : 16,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[8.0, 8.0]"
				]
			},
			"keysExamined" : 1950,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 9}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2037,
	"executionTimeMillis" : 3,
	"totalKeysExamined" : 2037,
	"totalDocsExamined" : 2037,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2037,
		"executionTimeMillisEstimate" : 0,
		"works" : 2038,
		"advanced" : 2037,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2037,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2037,
			"executionTimeMillisEstimate" : 0,
			"works" : 2038,
			"advanced" : 2037,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[9.0, 9.0]"
				]
			},
			"keysExamined" : 2037,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 10}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2031,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2031,
	"totalDocsExamined" : 2031,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2031,
		"executionTimeMillisEstimate" : 0,
		"works" : 2032,
		"advanced" : 2031,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2031,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2031,
			"executionTimeMillisEstimate" : 0,
			"works" : 2032,
			"advanced" : 2031,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[10.0, 10.0]"
				]
			},
			"keysExamined" : 2031,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 11}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1972,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1972,
	"totalDocsExamined" : 1972,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1972,
		"executionTimeMillisEstimate" : 0,
		"works" : 1973,
		"advanced" : 1972,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1972,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1972,
			"executionTimeMillisEstimate" : 0,
			"works" : 1973,
			"advanced" : 1972,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[11.0, 11.0]"
				]
			},
			"keysExamined" : 1972,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 12}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1985,
	"executionTimeMillis" : 4,
	"totalKeysExamined" : 1985,
	"totalDocsExamined" : 1985,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1985,
		"executionTimeMillisEstimate" : 0,
		"works" : 1986,
		"advanced" : 1985,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1985,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1985,
			"executionTimeMillisEstimate" : 0,
			"works" : 1986,
			"advanced" : 1985,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[12.0, 12.0]"
				]
			},
			"keysExamined" : 1985,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 13}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1991,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1991,
	"totalDocsExamined" : 1991,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1991,
		"executionTimeMillisEstimate" : 10,
		"works" : 1992,
		"advanced" : 1991,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1991,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1991,
			"executionTimeMillisEstimate" : 0,
			"works" : 1992,
			"advanced" : 1991,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[13.0, 13.0]"
				]
			},
			"keysExamined" : 1991,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 14}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2027,
	"executionTimeMillis" : 5,
	"totalKeysExamined" : 2027,
	"totalDocsExamined" : 2027,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2027,
		"executionTimeMillisEstimate" : 0,
		"works" : 2028,
		"advanced" : 2027,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2027,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2027,
			"executionTimeMillisEstimate" : 0,
			"works" : 2028,
			"advanced" : 2027,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[14.0, 14.0]"
				]
			},
			"keysExamined" : 2027,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 15}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1943,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1943,
	"totalDocsExamined" : 1943,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1943,
		"executionTimeMillisEstimate" : 10,
		"works" : 1944,
		"advanced" : 1943,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1943,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1943,
			"executionTimeMillisEstimate" : 10,
			"works" : 1944,
			"advanced" : 1943,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[15.0, 15.0]"
				]
			},
			"keysExamined" : 1943,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 16}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2015,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2015,
	"totalDocsExamined" : 2015,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2015,
		"executionTimeMillisEstimate" : 0,
		"works" : 2016,
		"advanced" : 2015,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2015,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2015,
			"executionTimeMillisEstimate" : 0,
			"works" : 2016,
			"advanced" : 2015,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[16.0, 16.0]"
				]
			},
			"keysExamined" : 2015,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 17}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1956,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1956,
	"totalDocsExamined" : 1956,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1956,
		"executionTimeMillisEstimate" : 0,
		"works" : 1957,
		"advanced" : 1956,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1956,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1956,
			"executionTimeMillisEstimate" : 0,
			"works" : 1957,
			"advanced" : 1956,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[17.0, 17.0]"
				]
			},
			"keysExamined" : 1956,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 18}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2021,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2021,
	"totalDocsExamined" : 2021,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2021,
		"executionTimeMillisEstimate" : 0,
		"works" : 2022,
		"advanced" : 2021,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2021,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2021,
			"executionTimeMillisEstimate" : 0,
			"works" : 2022,
			"advanced" : 2021,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[18.0, 18.0]"
				]
			},
			"keysExamined" : 2021,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 19}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2017,
	"executionTimeMillis" : 3,
	"totalKeysExamined" : 2017,
	"totalDocsExamined" : 2017,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2017,
		"executionTimeMillisEstimate" : 11,
		"works" : 2018,
		"advanced" : 2017,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2017,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2017,
			"executionTimeMillisEstimate" : 0,
			"works" : 2018,
			"advanced" : 2017,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[19.0, 19.0]"
				]
			},
			"keysExamined" : 2017,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 20}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2020,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2020,
	"totalDocsExamined" : 2020,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2020,
		"executionTimeMillisEstimate" : 0,
		"works" : 2021,
		"advanced" : 2020,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2020,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2020,
			"executionTimeMillisEstimate" : 0,
			"works" : 2021,
			"advanced" : 2020,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[20.0, 20.0]"
				]
			},
			"keysExamined" : 2020,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 21}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1993,
	"executionTimeMillis" : 6,
	"totalKeysExamined" : 1993,
	"totalDocsExamined" : 1993,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1993,
		"executionTimeMillisEstimate" : 10,
		"works" : 1994,
		"advanced" : 1993,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1993,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1993,
			"executionTimeMillisEstimate" : 0,
			"works" : 1994,
			"advanced" : 1993,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[21.0, 21.0]"
				]
			},
			"keysExamined" : 1993,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 22}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1999,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 1999,
	"totalDocsExamined" : 1999,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1999,
		"executionTimeMillisEstimate" : 10,
		"works" : 2000,
		"advanced" : 1999,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1999,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1999,
			"executionTimeMillisEstimate" : 0,
			"works" : 2000,
			"advanced" : 1999,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[22.0, 22.0]"
				]
			},
			"keysExamined" : 1999,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 23}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2010,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2010,
	"totalDocsExamined" : 2010,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2010,
		"executionTimeMillisEstimate" : 0,
		"works" : 2011,
		"advanced" : 2010,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2010,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2010,
			"executionTimeMillisEstimate" : 0,
			"works" : 2011,
			"advanced" : 2010,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[23.0, 23.0]"
				]
			},
			"keysExamined" : 2010,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 24}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 2015,
	"executionTimeMillis" : 2,
	"totalKeysExamined" : 2015,
	"totalDocsExamined" : 2015,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 2015,
		"executionTimeMillisEstimate" : 0,
		"works" : 2016,
		"advanced" : 2015,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 2015,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 2015,
			"executionTimeMillisEstimate" : 0,
			"works" : 2016,
			"advanced" : 2015,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[24.0, 24.0]"
				]
			},
			"keysExamined" : 2015,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
> db.orders.find({recipe: 25}).explain("executionStats").executionStats;
{
	"executionSuccess" : true,
	"nReturned" : 1992,
	"executionTimeMillis" : 3,
	"totalKeysExamined" : 1992,
	"totalDocsExamined" : 1992,
	"executionStages" : {
		"stage" : "FETCH",
		"nReturned" : 1992,
		"executionTimeMillisEstimate" : 0,
		"works" : 1993,
		"advanced" : 1992,
		"needTime" : 0,
		"needYield" : 0,
		"saveState" : 15,
		"restoreState" : 15,
		"isEOF" : 1,
		"invalidates" : 0,
		"docsExamined" : 1992,
		"alreadyHasObj" : 0,
		"inputStage" : {
			"stage" : "IXSCAN",
			"nReturned" : 1992,
			"executionTimeMillisEstimate" : 0,
			"works" : 1993,
			"advanced" : 1992,
			"needTime" : 0,
			"needYield" : 0,
			"saveState" : 15,
			"restoreState" : 15,
			"isEOF" : 1,
			"invalidates" : 0,
			"keyPattern" : {
				"recipe" : 1
			},
			"indexName" : "recipe_1",
			"isMultiKey" : false,
			"multiKeyPaths" : {
				"recipe" : [ ]
			},
			"isUnique" : false,
			"isSparse" : false,
			"isPartial" : false,
			"indexVersion" : 2,
			"direction" : "forward",
			"indexBounds" : {
				"recipe" : [
					"[25.0, 25.0]"
				]
			},
			"keysExamined" : 1992,
			"seeks" : 1,
			"dupsTested" : 0,
			"dupsDropped" : 0,
			"seenInvalidated" : 0
		}
	}
}
