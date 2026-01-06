import Book from "../models/bookModel.js";
const Create = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({
        success: false,
        message: "Tüm alanlar doldurulmalı",
      });
    }
    const book = new Book({
      title,
      author,
      publishYear,
    });
    await book.save();
    return res.status(201).json({
      success: true,
      message: "Kayıt oluşturuldu",
    });
  } catch (error) {
    console.log("BOOKCREATE HATASI", error);
  }
};
const GetBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      success: true,
      message: "GETBOOK Geldi",
      books,
    });
  } catch (error) {
    console.log("GETBOOK HATASI", error);
  }
};

const SpecialGet = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.log("GETBOOK HATASI", error);
    res.status(500).json({ message: "Server error" });
  }
};

const Updatest = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    const upbook = await Book.findByIdAndUpdate(id);
    if (title) {
      upbook.title = title;
    }
    if (author) {
      upbook.author = author;
    }
    if (publishYear) {
      upbook.publishYear = publishYear;
    }
    await upbook.save();
    return res.status(200).json({
        success:true,
        message:"Update oldu"
    })
  } catch (error) {
    console.log("UPDATEST HATASI", error);
  }
};

const Deletetest=async(req,res)=>{
    try {
        const {id} = req.params;
        const book= await Book.findByIdAndDelete(id);
        return res.status(203).json({
            success:true,
            message:"DELETE oldu",
            book
        })
    } catch (error) {
        console.log("DELETE HATASI",error)
    }
}

export { Create, GetBook, SpecialGet,Updatest,Deletetest};
