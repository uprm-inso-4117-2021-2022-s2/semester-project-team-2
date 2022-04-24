// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
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
        res.status(405).send({ message: "ERROR", reason: "Only POST requests allowed" });
        return;
    }

    if (!isBody(req.body)) {
        res.status(400).send({ message: "ERROR", reason: "The data doesn't match the expected! Please enter user and password!" });
        return;
    }
    console.log("testing");

    var body: Body = {
        email: req.body.email,
        password: req.body.password
    };

    // Check if we don't have any already with that email
    for (let userInfo of dataAuthInfo) {
        if (body.email == userInfo.email && body.password == userInfo.password) {
            res.status(400).json({ message: "ERROR", reason: "An account associated with that email, is already in the system! Please use another one or log in." });
            return false; // Exit of out loop
        }
    }

    // We didn't find any valid auth info, so we add it to authInfo and return success message.
    dataAuthInfo.push(body);
    res.status(200).json({ message: "SUCCESS" });
}
