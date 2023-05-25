import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../../BLOG.config";
import Article from "../../../models/article";
import dbConnect from "../../../utils/db";
import GenerateImage from "../../../utils/image-generate";

export default async function HANDLER(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
  } catch (er) {
    return res.status(500).json({ error: er });
  }

  try {
    if (req.method === "GET") {
      // get posts and sort by time
      let { id } = req.query;
      if (id) {
        // cheke session
        let article = await Article.findOne({ _id: id });
        if (!article) {
          return res.status(404).send({ error: "This article does not exist" });
        }
        return res.status(200).send(article);
      }
      let { slug } = req.query;
      let article = await Article.findOne({ slug});
      if (!article) {
        return res.status(404).send({ error: "This article does not exist" });
      }
      return res.status(200).send(article);
    } else if (req.method === "PUT") {
      let { id, articleData } = req.body;
      if (articleData.coverUrl == "") {
        let image = await GenerateImage();
        if (BLOG.urlCover == "full") {
          articleData.coverUrl = image.urls.full;
        } else if (BLOG.urlCover == "raw") {
          articleData.coverUrl = image.urls.raw;
        } else if (BLOG.urlCover == "regular") {
          articleData.coverUrl = image.urls.regular;
        } else {
          articleData.coverUrl = BLOG.defaultCover;
        }
      }
      let article = await Article.findOneAndUpdate(
        { _id: id },
        { $set: articleData }
      );
      if (!article) {
        return res.status(404).send({ error: "This article does not exist" });
      }
      return res.status(200).json(article);
    } else if (req.method === "DELETE") {
      let { id } = req.body;
      let article = await Article.findOneAndDelete({ _id: id });
      if (!article) {
        return res.status(404).send({ error: "This article does not exist" });
      }
      return res.status(200).json("the article is removed");
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
