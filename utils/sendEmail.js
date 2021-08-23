import fetch from "node-fetch";
const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API2 = "https://api.sendgrid.com/v3/marketing/contacts";
const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
const addContact = async (email) => {
  console.log(email);
  await fetch(SENDGRID_API2, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      contacts: [
        {
          address_line_1: "string (optional)",
          address_line_2: "string (optional)",
          alternate_emails: [email],
          city: "string (optional)",
          country: "string (optional)",
          email: email,
          first_name: "string (optional)",
          last_name: "string (optional)",
          postal_code: "string (optional)",
          state_province_region: "string (optional)",
          custom_fields: {},
        },
      ],
    }),
  }).then((res) => {
    //console.log(res);
  });
};
const sendEmailtoClient = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "Email Recieved",
        },
      ],

      from: {
        email: "msigr8@gmail.com",
        name: "Ikan Bilis",
      },
      content: [
        {
          type: "text/html",
          value: `<p>Dear ${name}, your message is recieved successfully we will contact you as soon as possible. </p>
                `,
        },
      ],
    }),
  }).then((res) => {
    //console.log(res);
  });
};

const sendEmail = async ({ email, name, clientEmail, message }) => {
  let resStatus;

  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "Demo success :)",
        },
      ],

      from: {
        email: "msigr8@gmail.com",
        name: "Ikan Bilis",
      },
      content: [
        {
          type: "text/html",
          value: `<p>Client Name:<strong> ${name} </strong></p> \n <p>Client's Email: <strong>${clientEmail}</strong><\p> \n <p>Client's Message: <strong>${message}</strong><\p>
                `,
        },
      ],
    }),
  }).then((res) => {
    addContact(clientEmail);
    // console.log(res.status);
    if (res.status === 202) {
      // sendEmailtoClient(name, clientEmail);
    }
    resStatus = res.status;
  });
  return resStatus;
};

export { sendEmail, sendEmailtoClient };
