import { Schema, model} from "mongoose";


// Define the schema for the Pet model
const PetSchema = new Schema(
    {
        petName: { 
            type: String,
            required: [true, "Please provide a name for your pet"]
        },

        petType: {   
            type: String,
            required: [true, "Please provide a type for your pet"]
        },

        location: {  
            type: String,
            required: [true, "Please provide a location for your pet"]
        },

        description: {   
            type: String,
            required: false,
            default: "No description provided"
        },

        image: {   
            type: String,
            required: [true, "Please provide at least one photo of your pet"]
        },
        
        petAge: {  
            type: String,
            required: [true, "Please provide the age of your pet"]
        },

        breed: {   
            type: String,
            required: [true, "Please provide the breed of your pet"]
        },

        gender: { 
            type: String,
            required: [true, "Please provide the gender of your pet"]
        },

        size: {   
            type: String,
            required: [true, "Please provide the size of your pet"]
        },

        healthStatus: {     
            type: String,
            required: false,
            default: "hopefully healthy"
        },

        temperament: {  
            type: String,
            required: false,
            default: "hopefully friendly"
        },

        adoptionFee: {    // Adoption fee for the pet (optional)
            type: String,
            required: false,
            default: "Free"
        },

        ownerId: {    // Owner of the pet
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Export the Pet model
export default model("Pet", PetSchema);