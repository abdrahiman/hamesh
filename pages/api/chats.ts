import { NextApiRequest, NextApiResponse } from "next";
import BLOG from "../../BLOG.config";
import Chat from "../../models/chat";
import dbConnect from "../../utils/db";

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
        const chat = await Chat.findOne({ slug });
        return res.status(201).json(Chat);
      }
      let { id } = req.query;
      if (id) {
        // cheke session
        let chat = await Chat.findOne({ _id: id });
        if (!Chat) {
          return res.status(404).send({ error: "This Chat does not exist" });
        }
        return res.status(200).send(Chat);
      }
      return res.status(404).json("the is is not found");
    } else if (req.method === "POST") {
      let chatData = req.body;
      if (!chatData) {
        return res.status(404).json("data provided is not valid");
      }

      let newChat = new Chat({
        ...chatData,
      });
      let chat = await newChat.save();
      return res.status(200).json(Chat);
    } else if (req.method === "PUT") {
      let { id, chatData } = req.body;
      if (!id || !chatData) {
        return res.status(404).json("data provided is not valid");
      }

      let chat = await Chat.findOneAndUpdate({ _id: id }, { $set: chatData });
      if (!Chat) {
        return res.status(404).send({ error: "This Chat does not exist" });
      }
      return res.status(200).json(Chat);
    } else if (req.method === "DELETE") {
      let { id } = req.body;
      if (!id) {
        return res.status(404).json("data provided is not valid");
      }
      let chat = await Chat.findOneAndDelete({ _id: id });
      if (!Chat) {
        return res.status(404).send({ error: "This Chat does not exist" });
      }
      return res.status(200).json("the Chat is removed");
    }
    return res.status(404).end();
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
