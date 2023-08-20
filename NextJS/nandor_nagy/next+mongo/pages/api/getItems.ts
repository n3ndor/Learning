import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    const items = await db.collection("items").find({}).toArray();

    res.json(items);
  } catch (e: unknown) {
    if (e instanceof Error) {
        res.status(500).json({ error: e.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
