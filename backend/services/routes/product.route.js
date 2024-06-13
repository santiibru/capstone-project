import Router from "express";
import Product from "../models/product.model.js";
//import CloudinaryMidd from "../middlewares/multer.js"
import cloudinary from "../cloudinary.js";

export const productRoute = Router();

productRoute.get("/", async (req, res, next) => {
  try {
    let products = await Product.find()
    res.send(products)
  } catch (error) {
    next(error)
  }
});


productRoute.get("/:id", async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id)
    res.send(product)
  } catch (error) {
    next(error)
  }
});

productRoute.put("/:id", async (req, res, next) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.send(product)
  } catch (error) {
    next(error)
    
  }
});

productRoute.patch("/:id/image", async (req, res, next) => {
  try {
    let product = await Product.findByIdAndUpdate(
      req.params.id,
      { image: req.file.path },
      {
        new: true,
      }
    )
    res.send(product)
  } catch (error) {
    next(error)
  }
});

productRoute.delete("/:id", async (req, res, next) => {
  try {
    await Product.deleteOne({
      _id: req.params.id,
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
});

productRoute.post("/", async (req, res, next) => {
  const { title, image, description, price, category } = req.body
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "Gron-products"
      })
      if (uploadRes) {
        const product = new Product({
          title,
          image: uploadRes,
          description,
          price,
          category
        })
        const savedProduct = await product.save()
        res.send(savedProduct)
      }
    }
  } catch (error) {
    next(error)
    console.log(error)
  }
});
