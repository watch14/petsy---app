const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "Please provide a username"]
        },

        email: { 
            type: String,
            required: [true, "Please provide an email address"],
            unique: true
        },

        password: {   
            type: String,
            required: [true, "Please provide a password"]
        },

        location: {  
            type: String,
            required: [true, "Please provide a location"]
        },

        contact: {   
            type: String,
            required: [true, "Please provide contact information"]
        },

        profilePicture: {  
            type: String,
            required: false,
            default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        },

        biography: {   
            type: String,
            required: false,
            default: "Animal Lover!"
        },

        history: {  
            type: [String],
            required: false
        },

        socialMediaLinks: { 
            type: [String],
            required: false
        },

        // preferences: {   
        //     type: Schema.Types.Mixed,
        //     required: false
        // },

        // privacySettings: {
        //     type: Schema.Types.Mixed,
        //     required: false
        // },



        // notificationPreferences: {    // User preferences for notifications
        //     type: Schema.Types.Mixed,
        //     required: false
        // },

        // savedPets: {    // Array of ObjectIDs referencing saved pets
        //     type: [Schema.Types.ObjectId],
        //     ref: 'Pet',
        //     required: false
        // },

        // reviewsAndRatings: {    // Flexible data type for storing reviews and ratings
        //     type: Schema.Types.Mixed,
        //     required: false
        // },

        adminRole: {    // Indicates whether the user has an admin role
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
);

// Export the user model
const User = mongoose.model("User", UserSchema);
module.exports = User;
