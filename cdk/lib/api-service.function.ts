import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);
    console.log('We should be able easily acccess the logs in console for debugging');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `hello world from api service ${event.httpMethod} and ${event.path}`,
        }),
    };
};