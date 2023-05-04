import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default function klo(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ hello: "next" });
}
// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "./auth/[...nextauth]";
// import User from "../../models/user";
// import dbConnect from "../../utils/db";
// import { NextApiRequest, NextApiResponse } from "next";

// export async function Handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     if (req.method == "GET") {
//       console.log("i run");
//       let session = await getServerSession(authOptions);
//       await dbConnect();
//       console.log(session?.user?.email);
//       if (!session?.user?.email) {
//         return res.status(404).send({ error: "session is not found" });
//       }
//       let user = await User.findOne({ email: session?.user?.email });
//       if (user) return res.status(200).send(user);
//       else {
//         //create a user in the db
//         const newuser = new User({
//           email: session?.user?.email,
//           name: session?.user?.name,
//           description: "",
//           avatar: session?.user?.image || "/user.png",
//           videos: [],
//           seved: [],
//         });
//         newuser.save();
//         return res.status(200).send(newuser);
//       }
//     } else {
//       return res.status(401).send({ error: "this methode is not exsite" });
//     }
//   } catch (err: any) {
//     return res.status(500).send({ error: err });
//   }
// }
