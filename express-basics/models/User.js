const mongoose = require("mongoose");

// user = { name, email, password, role: ['customer', 'admin', 'super admin', 'accountant']}
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roles: {
    type: [String],
    enum: ["Admin", "Customer"],
    default: "Customer",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// user => basanta
// products => watch(50), ihpone

// orders(userId, products: [ {id,quantity, price }] , totalPrice: 100)
// 