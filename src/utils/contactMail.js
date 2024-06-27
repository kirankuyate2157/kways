export const sendMail = (toMail, data) => {
    const greeting = "Dear Kiran K. ";
  
    const page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Feedback Contact from Kways page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
        .banner {
          background-image:linear-gradient(to bottom, #960443,#960443, #7c134d,  #7c134d,#601d50,#601d50, #44214b, #44214b, #44214b,#44214b, #44214b);
          color: #ffffff;
          text-align: center;
          padding: 8px;
        }
        .content {
          padding: 18px;
          font-family: Arial, sans-serif;
          border: 1px solid #e0e0e0;
          background-color: #f9f9f9;
        }
        .title {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 16px;
          color: #960443;
          margin-bottom: 15px;
        }
        .details {
          font-size: 10px;
          margin-bottom: 14px;
        }
        .details2 {
          font-size: 10px;
          margin-bottom: 5px;
        }
        .button {
          display: inline-block;
          background-color: #960443;
          color: #ffffff;
          padding: 5px 10px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 10px;
        }
        .link {
          color: #fff;
          text-decoration: none;
        }
        .footer {
          font-size: 8px;
          color: #999;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="banner">
        <h2>New Feedback or Contact Form Kways landing page Submission${
          data.firstName ? ` ${data.firstName}` : ""
        }! </h2>
      </div>
      <div class="content">
        <p class="title">${greeting}</p>
        <p class="details">A new contact form has been submitted on the Kways Company landing page. Here are the details:</p>
  
        <p class="details">Subject: ${data?.subject}</p>
        <p class="details">Person Name: ${data?.firstName} ${data?.lastName}</p>
        <p class="details">Email: <a href="mailto:${data?.email}" class="link">${
      data?.email
    }</a></p>
        <p class="details">Phone Number: ${data?.phoneNumber}</p>
        <p class="details">Company: ${data?.company}</p>
        <p class="details">Country: ${data?.country}</p>
        <p class="details">Message: ${data?.message}</p>
       
        <p class="details">Please review and respond to the users inquiry at your earliest convenience. </p>
        <p class="details2">Best Regard </p>
        <p class="details">kways auto mail api </p>
        <p class="footer">⚠️ This email is sent from an automated API system. Please do not reply to this email as it is not monitored.</p>
      </div>
    </body>
    </html>`;
  
    const url = "https://refine-dashboard-qxpf.onrender.com/api/v1/senttomail";
    const dataInfo = {
      to: toMail,
      subject: "Feedback from Kways landing page..",
      text: greeting,
      html: page,
    };
    const headers = {
      "Content-Type": "application/json",
    };
  
    fetch(url, {
      method: "POST",
      body: JSON.stringify(dataInfo),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          // console.log("Email sent successfully!");
        } else {
          // console.log("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  