// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from "../../../back_end/mongodb";

import { dataAuthInfo } from "../../../back_end/data/authInfo";

// type Data = {
//   message: string
// }

interface Body {
  email: string,
  password: string
}
const isBody = (variableToCheck: any): variableToCheck is Body =>
  (variableToCheck as Body).email !== undefined && (variableToCheck as Body).password !== undefined;



export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  if (!isBody(req.body)) {
    res.status(400).send({ message: "ERROR", reason: "The data doesn't match the expected! Please enter user and password!" });
    return;
  }

  var body: Body = {
    email: req.body.email,
    password: req.body.password
  };

  // Check if we contain login information, return empty error message if we do, otherwise return error message
  for (let userInfo of dataAuthInfo) {
    if (body.email == userInfo.email && body.password == userInfo.password) {
      res.status(200).json({ message: "SUCCESS" });
      return;
    }
  }

  // We didn't find any valid auth info, so we return error message
  res.status(400).json({ message: "ERROR", reason: "Sorry! We couldn't find any email and password with the specified credentials." });
  return;
}
