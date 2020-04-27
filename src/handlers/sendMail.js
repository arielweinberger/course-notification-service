async function sendMail(event, context) {
  console.log(event);
  return event;
}

export const handler = sendMail;


