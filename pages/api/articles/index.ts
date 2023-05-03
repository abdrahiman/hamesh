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
    console.log(er);
  }
  try {
    if (req.method === "GET") {
      // get posts and sort by time
      let lm = req.query.limit || 32;
      const articles = await Article.find({
        isDraft: false,
      })
        .sort({ createdAt: -1 })
        .limit(+lm);
      return res.status(201).send({ data: articles });
    } else if (req.method === "POST") {
      let articleData = req.body;
      let newArticle = new Article({
        ...articleData,
      });

      let article = await newArticle.save();
      return res.status(200).send(article);
    } else {
      return res.status(404).send({ error: "this methode is not allowed" });
    }
  } catch (err) {
    console.log(err);
  }
}
