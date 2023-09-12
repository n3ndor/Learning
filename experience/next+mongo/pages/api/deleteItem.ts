import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { _id } = req.query;

    const item = await db.collection("items").deleteOne({
      _id: new ObjectId(_id as string),
    });

    res.json(item);
  } catch (e: unknown) {
    if (e instanceof Error) {
        res.status(500).json({ error: e.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
