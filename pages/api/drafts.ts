import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../BLOG.config";
import Draft from "../../models/draft";
import dbConnect from "../../utils/db";
import GenerateImage from "../../utils/image-generate";

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
      let slug = req.query.slug;
      if (slug) {
        const draft = await Draft.findOne({ slug });
        return res.status(201).json(draft);
      }
      let { id } = req.query;
      if (id) {
        // cheke session
        let draft = await Draft.findOne({ _id: id });
        if (!draft) {
          return res.status(404).send({ error: "This Draft does not exist" });
        }
        return res.status(200).send(draft);
      }
      return res.status(404).json("the is is not found");
    } else if (req.method === "POST") {
      let DraftData = req.body;
      if (!DraftData) {
        return res.status(404).json("data provided is not valid");
      }
      if (DraftData.coverUrl == "") {
        let image = await GenerateImage();
        if (BLOG.urlCover == "full") {
          DraftData.coverUrl = image.urls.full;
        } else if (BLOG.urlCover == "raw") {
          DraftData.coverUrl = image.urls.raw;
        } else if (BLOG.urlCover == "regular") {
          DraftData.coverUrl = image.urls.regular;
        } else {
          DraftData.coverUrl = BLOG.defaultCover;
        }
      }
      let newDraft = new Draft({
        ...DraftData,
      });
      let draft = await newDraft.save();
      return res.status(200).json(draft);
    } else if (req.method === "PUT") {
      let { id, DraftData } = req.body;
      if (!id || !DraftData) {
        return res.status(404).json("data provided is not valid");
      }
      if (DraftData.coverUrl == "") {
        let image = await GenerateImage();
        if (BLOG.urlCover == "full") {
          DraftData.coverUrl = image.urls.full;
        } else if (BLOG.urlCover == "raw") {
          DraftData.coverUrl = image.urls.raw;
        } else if (BLOG.urlCover == "regular") {
          DraftData.coverUrl = image.urls.regular;
        } else {
          DraftData.coverUrl = BLOG.defaultCover;
        }
      }
      let draft = await Draft.findOneAndUpdate(
        { _id: id },
        { $set: DraftData }
      );
      if (!draft) {
        return res.status(404).send({ error: "This Draft does not exist" });
      }
      return res.status(200).json(draft);
    } else if (req.method === "DELETE") {
      let { id } = req.body;
      if (!id) {
        return res.status(404).json("data provided is not valid");
      }
      let draft = await Draft.findOneAndDelete({ _id: id });
      if (!draft) {
        return res.status(404).send({ error: "This Draft does not exist" });
      }
      return res.status(200).json("the Draft is removed");
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
