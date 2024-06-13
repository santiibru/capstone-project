import { Router } from "express";
import User from "../models/user.model.js"
import bcrypt from "bcrypt"

export const registerRoute = Router();

registerRoute.post("/", async (req, res, next) => {
  try {
    let user = await User.create({
      ...req.body, password: await bcrypt.hash(req.body.password, 10)
    })
    res.send(user)
  } catch (error) {
    next(error)
  }
})