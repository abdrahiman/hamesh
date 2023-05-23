import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../../BLOG.config";
import Article from "../../../models/article";
import Draft from "../../../models/draft";
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
      let lm = req.query.limit || BLOG.postsPerPage;
      let all = req.query.all;
      if (all) {
        const articles = await Article.find({}).sort({ createdAt: -1 });
        const drafts = await Draft.find({}).sort({ createdAt: -1 });
        let all = [...drafts, ...articles];
        return res.status(201).json({ data: all });
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
      let newArticle = new Article({
        ...articleData,
      });
      let article = await newArticle.save();
      return res.status(200).json(article);
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
