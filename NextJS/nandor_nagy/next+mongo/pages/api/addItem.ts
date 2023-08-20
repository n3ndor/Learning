import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { name, description } = req.body;

    const item = await db.collection("items").insertOne({
      name,
      description,
    });

    res.json(item);
  } catch (e: unknown) {
    if (e instanceof Error) {
        res.status(500).json({ error: e.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
