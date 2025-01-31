import express from "express";

import {
  createBook,
  deleteBook,
  updateBook,
  getBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);

router.delete("/:id", deleteBook);

router.get("/", getBooks);

router.put("/:id", updateBook);

export default router;
