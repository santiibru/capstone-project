import { Router } from "express";
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { generateJWT } from "../middlewares/userAuth.js";


export const loginRoute = Router();

loginRoute.post("/", async ({ body }, res, next) => {
  try {
    let foundUser = await User.findOne({
      email: body.email,
      id: body._id
    })
    if (foundUser) {
      const isMatching = await bcrypt.compare(body.password, foundUser.password)
      if (isMatching) {
        const token = await generateJWT({
          email: foundUser.password
        })
        res.send({ user: foundUser, token })
        console.log(foundUser, token)
      } else res.status(400).send("Wrong password")
    } else res.status(400).send("User doesn't exist.")
  } catch (error) {
    next(error)
  }
})