import { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../models/article";
import dbConnect from "../../../utils/db";

export default async function handle(
  res: NextApiResponse,
  req: NextApiRequest
) {
  try {
    await dbConnect();
  } catch (er) {
    throw er;
  }
  try {
    if (req.method === "GET") {
      // get posts and sort by time
      let { slug } = req.query;
      let article = await Article.findOne({ slug, isDraft: false });
      return res.status(200).send(article);
    }
    if (req.method === "DELETE") {
      let { id } = req.query;
      let article = await Article.findOneAndDelete({ _id: id });
      return res.status(200).send(article);
    }
  } catch (err) {
    console.log(err);
  }
}
