// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

import clientPromise from "../../util/mongodb";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await clientPromise;
  let result = await client.db("tests").collection("inventory").findOne({itemID: 12});
  res.status(200).json(result);
}
