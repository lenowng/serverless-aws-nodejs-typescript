import { APIGatewayProxyHandler } from 'aws-lambda';

export const time: APIGatewayProxyHandler = async (event) => {
  console.debug(event);

  return {
    statusCode: 200,
    body: JSON.stringify(`hello back (the time is: ${new Date()}`),
  };
};
