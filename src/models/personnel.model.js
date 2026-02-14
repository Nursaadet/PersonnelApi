"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncrypt");

const PersonnelSchema = new mongoose.Schema(
  {
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
 
    },

    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },

    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    phone: {
      type: String,
      trim: true,
      required: true,
      // minlength: 10,
      // match: /^[0-9]+$/
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [(email) => email.includes("@") && email.includes("."),"Email is not valid"],
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    salary: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      trim: true,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isLead: {
      type: Boolean,
      default: false,
    },

    startedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "personnels", timestamps: true,toJSON: { virtuals: true }
}
);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

PersonnelSchema.virtual("fullname").get(function () {
  // return `${this.firstName} ${this.lastName}`;
  return `${capitalize(this.firstName)} ${capitalize(this.lastName)}`;
});


/* ------------------------------------------------------- */
module.exports = mongoose.model("Personnel", PersonnelSchema);
