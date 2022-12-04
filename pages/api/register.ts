import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
// @ts-ignore
import User from "../../models/User";

// type Data = {
//   name: string;
//   password: string;
//   email: string;
//   phone: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const { name, password, email, phone } = req.body;
    if (!name || !password || !email || !phone) {
      return res.status(400).json({ error: "Please add all the fields" });
    }
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await User.create({
      name,
      password,
      email,
      phone,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: "There was an error" });
  }
}
