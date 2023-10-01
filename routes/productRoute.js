import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  createUpdateProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
} from "../controllers/productController.js";

const router = express.Router();

// routes

// CREATE PRODUCT || METHOD POST
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// UPDATE PRODUCT || METHOD PUT
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  createUpdateProductController
);

// GET PRODUCT || METHOD GET
router.get("/get-product", getProductController);

// GET SINGLE PRODUCT || METHOD GET
router.get("/get-product/:slug", getSingleProductController);

// GET PHOTO || METHOD GET
router.get("/product-photo/:pid", productPhotoController);

// DELETE PRODUCT || METHOD DELETE
router.delete("/delete-product/:pid", deleteProductController);

export default router;
