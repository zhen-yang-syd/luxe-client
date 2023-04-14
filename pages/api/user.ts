// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/client";
import { fetchAllUserQuery } from "@/utils/queries/user";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = fetchAllUserQuery();
    const result = await client.fetch(query);
    res.status(200).json(result);
  }
}
