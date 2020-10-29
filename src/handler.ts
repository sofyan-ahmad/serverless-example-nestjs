import {APIGatewayProxyHandler} from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event) => {
  console.log(event);

  return {
    statusCode: 200,
    body: 'Oke! Received',
  };
};
