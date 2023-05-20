import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../models/user";
import dbConnect from "../../utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../BLOG.config";
export default async function HANDLER(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method == "GET") {
      let session = await getServerSession(req, res, authOptions);
      try {
        await dbConnect();
      } catch (err) {
        return res.status(501).json({ error: err });
      }
      if (!session?.user?.email) {
        return res.status(404).send({ error: "session is not found" });
      }
      let user = await User.findOne({ email: session?.user?.email });
      if (user) {
        return res
          .status(200)
          .send({ isAdmin: user.email == BLOG.email, data: user });
      } else {
        //create a user in the db
        const newuser = new User({
          email: session?.user?.email,
          name: session?.user?.name,
          bio: "",
          avatar: session?.user?.image || "/user.png",
          posts: [],
          liked: [],
          saved: [],
        });
        await newuser.save();
        return res
          .status(200)
          .send({ isAdmin: user.email == BLOG.email, data: newuser });
      }
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
