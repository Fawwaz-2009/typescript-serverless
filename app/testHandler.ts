import { Handler, Context } from 'aws-lambda';

export const getTest: Handler = (event: any, context: Context) => {
    return Promise.resolve({
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Matata from typescript',
          input: event,
        },
        null,
        2
      ),
    });
  };