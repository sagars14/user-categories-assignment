const router = require("express").Router();
const passport = require("passport");
const emailCategoryRouter = require("./emailCategories.routes");
const categoryRouter = require("./category.routes");
const userRouter = require("./user.routes");

router.use("/user", userRouter);

router.use(
  "/category",
  passport.authenticate("jwt", { session: false }),
  categoryRouter
);
router.use(
  '/email',
  passport.authenticate('jwt', { session: false }),
  emailCategoryRouter
)

module.exports = router;
