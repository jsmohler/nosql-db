db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "email", "phone", "address" ],
      properties: {
        name: {
          type: "object",
          required: [ "firstName", "lastName"],
          properties: {
            firstName: {
              type: "string",
              description: "must be a string and is required"
            },
            lastName: {
              type: "string",
              description: "must be a string and is required"
            }
          }
        },
        email: {
          type: "string",
          description: "must be a string and is required"
        },
        phone: {
          type: "string",
          description: "must be a string and is required"
        },
        address: {
          type: "object",
          required: [ "lineOne", "city", "state", "zip"],
          properties: {
            lineOne: {
              type: "string",
              description: "must be a string and is required"
            },
            lineTwo: {
              type: "string",
              description: "must be a string and is not required"
            },
            city: {
              type: "string",
              description: "must be a string and is required"
            },
            state: {
              type: "string",
              description: "must be a string and is required"
            },
            zip: {
              type: "number",
              minimum:10000,
              maximum:99999,
              description: "must be a 5-digit integer and is required"
            }
          }
        }
      }
    }
  },
  validationLevel: "strict"
});

db.createCollection("inventory", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "description", "quantity"],
      properties: {
        name: {
          type: "string",
          description: "must be a string and is required"
        },
        description: {
          type: "string",
          description: "must be a string and is required"
        },
        quantity: {
          type: "number",
          minimum: 1,
          description: "must be a int greater than or equal to 1 and is required"
        },
      }
    }
  },
  validationLevel: "strict"
});

db.createCollection("recipes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "description", "instructions", "ingredients"],
      properties: {
        name: {
          type: "string",
          description: "must be a string and is required"
        },
        "description": {
          type: "string",
          description: "must be a string and is required"
        },
        instructions: {
          bsonType: "array",
          items: {
            type: "string"
          },
          description: "must be an array of strings and is required"
        },
        ingredients: {
          type: "array",
          items: {
            type: "object",
            required: [ "name", "quantity"],
            properties: {
              name: {
                type: "string",
                description: "must be a string and is required"
              },
              quantity: {
                type: "number",
                minimum: 1,
                description: "must be a int greater than or equal to 1 and is required"
              }
            }
          },
          description: "must be an array of strings and is required"
        }
      }
    }
  },
  validationLevel: "strict"
});

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "user", "time", "recipe"],
      properties: {
        user: {
          type: "number",
          minimum: 1,
          description: "must be a number and is required"
        },
        recipe: {
          type: "number",
          minimum: 1,
          description: "must be a number and is required"
        },
        time: {
          type: "string",
          description: "must be a string and is required"
        }
      }
    }
  },
  validationLevel: "strict"
});
