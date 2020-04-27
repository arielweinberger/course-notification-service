import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'ariel@codingly.io',
    Destination: {
      ToAddresses: ['ariel@codingly.io'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Codingly!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;