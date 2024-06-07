import { Router } from "express";
import User from "../models/user.model.js"

export const registerRoute = Router();

registerRoute.post("/", async (req, res, next) => {
  try {
    let user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    next(error)
  }
})