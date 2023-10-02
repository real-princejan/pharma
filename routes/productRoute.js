import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  createUpdateProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
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

// FILTER PRODUCT || METHOD POST
router.post("/product-filters", productFilterController);

// COUNT PRODUCT || METHOD GET
router.get("/product-count", productCountController);

// PRODUCT PER PAGE || METHOD GET
router.get("/product-list/:page", productListController);

// SEARCH PRODUCT || METHOD GET
router.get("/search/:keyword", searchProductController);

// SIMILAR PRODUCT || METHOD GET
router.get("/related-product/:pid/:c:id", relatedProductController);

export default router;
