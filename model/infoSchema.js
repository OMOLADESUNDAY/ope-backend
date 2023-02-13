const mongoose=require('mongoose')

const infoSchema = new mongoose.Schema({
  phonenumber: {
    type: Number,
    required: [true, "username required"],
    trim: true,
  },
  firstname: {
    type: String,
    required: [true, "password required"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "password required"],
    trim: true,
  },
  surname: {
    type: String,
    required: [true, "password required"],
    trim: true,
  },
  bankname: {
    type: String,
    required: [true, "password required"],
    trim: true,
  },
  bankaddress: {
    type: String,
    required: [true, "password required"],
    trim: true,
  },
});

module.exports=mongoose.model('clientDetails',infoSchema)