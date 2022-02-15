const express = require("express");

const router = express.Router();

const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controllers/auth");

const { userById } = require("../controllers/user");

const { create, update , remove , list , categoryById , readCategory } = require("../controllers/category");

router.param("categoryId", categoryById);
router.param("userId", userById);

//Get Category By Id
router.get('/category/:categoryId', readCategory);

//Create Category
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);

//Edit Category
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);

//Delete Category
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);

//Get All Category 
router.get('/categories',list);

module.exports = router;
