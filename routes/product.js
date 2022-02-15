const express = require("express");

const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  productPhoto,
} = require("../controllers/product");

router.param("userId", userById);
router.param("productId", productById);
router.get("/product/:productId", read);

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.post(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.get("/products", list);

router.get("/products/related/:productId", listRelated);

router.get("/products/categories", listCategories);

// route - make sure its post
router.post("/products/by/search", listBySearch);

router.get("/product/photo/:productId", productPhoto);

// router.put(
//   "/product/:productId/:userId",
//   requireSignin,
//   isAuth,
//   isAdmin,
//   update
// );

module.exports = router;
