import { NextApiRequest, NextApiResponse } from "next";

import { sendEmail, sendEmailtoClient } from "../../utils/sendEmail";

// eslint-disable-next-line import/no-anonymous-default-export
const sendClient = async (name, email) => {
  console.log(name, email);
  await sendEmailtoClient({
    name,
    email,
  });
};
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let resStatus;
  const { email, name, clientEmail, message } = req.body;
  if (req.method === "POST") {
    await sendEmail({
      email,
      name,
      clientEmail,
      message,
    }).then((res) => {
      resStatus = res;
      if (res === 202) {
        sendClient(name, clientEmail);
      }
    });
    return res.status(resStatus).end();
  }
  console.log(res.status);

  return res.status(404).json({
    error: {
      code: "not_found",
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
