const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/auth.controller");
const {
  signUpValidator,
  signInValidator,
} = require("../validators/auth.validator");

// //
// app.get("/test", query("search").notEmpty(), (req, res) => {
//   const result = validationResult(req);

//   console.log(req.query.search, result);
//   if (result.errors.length > 0) {
//     res.status(400).json({
//       errors: result.errors,
//     });
//     return;
//   }
//   res.json({
//     message: "ok",
//   });
// });

router.post("/sign-up", signUp);
router.post("/sign-in", signInValidator, signIn);

module.exports = router;
