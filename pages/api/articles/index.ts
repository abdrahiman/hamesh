import { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../models/article";
import dbConnect from "../../../utils/db";
export default async function HANDLER(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("good");
  try {
    await dbConnect();
  } catch (er) {
    console.log(er);
  }
  try {
    if (req.method === "GET") {
      // get posts and sort by time
      let lm = req.query.limit || 32;
      let all = req.query.all;
      if (all) {
        const articles = await Article.find({})
          .sort({ createdAt: -1 })
          .limit(+lm);
        return res.status(201).json({ data: articles });
      }
      let tagSearch = req.query.tag;
      if (tagSearch) {
        const articles = await Article.find({
          tags: {
            $in: tagSearch,
          },

          isDraft: false,
        })
          .sort({ createdAt: -1 })
          .limit(+lm);
        console.log(tagSearch);
        return res.status(201).json({ data: articles });
      }
      let querySearch = req.query.q;
      if (querySearch) {
        const articles = await Article.find({
          title: {
            $regex: querySearch,
            $options: "i",
          },

          isDraft: false,
        })
          .sort({ createdAt: -1 })
          .limit(+lm);

        return res.status(201).json({ data: articles });
      }
      const articles = await Article.find({
        isDraft: false,
      })
        .sort({ createdAt: -1 })
        .limit(+lm);
      return res.status(201).json({ data: articles });
    } else if (req.method === "POST") {
      let articleData = req.body;
      let newArticle = new Article({
        ...articleData,
      });
      let article = await newArticle.save();
      return res.status(200).json(article);
    }
    return res.status(404).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}
