const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 8 })
      .escape()
      .withMessage("Must be at least 8 characters long"),
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .escape()
      .withMessage("Must be alphabetic"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .escape()
      .withMessage("Must be alphabetic"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .escape()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isStrongPassword()
      .escape()
      .withMessage("Must be at least 8 characters long, at least 1 lower and uppercase character (each) and at least 1 symbol"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;
