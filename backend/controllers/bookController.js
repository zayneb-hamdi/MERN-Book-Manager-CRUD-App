import Book from "../models/bookModel.js";
export const createBook = async (req, res) => {
  const book = req.body;
  if (!book.title || !book.price || !book.image)
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });

  const newBook = new Book(book);
  try {
    await newBook.save();
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    console.log(`failed to create a new book ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  console.log("id : " + id);
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(404).json({ success: false, message: "product not found" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    console.log(`Error : ${error.message}`);
    res.status(404).json({ success: false, message: "book not found" });
  }
};
