import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please add all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    if (user.password === password) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: "Wrong password" });
    }
  } catch (error) {
    res.status(400).json({ error: "User not found" });
  }
}
