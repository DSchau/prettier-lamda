import prettier from 'prettier';

export const prettify = async (event, context, callback) => {
  const { body, queryStringParameters: options = {} } = event;

  if (!body) {
    callback(new Error('A post body is required'));
  }

  try {
    const prettified = prettier.format(body, options);

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(prettified)
    };

    callback(null, response);
  } catch (e) {
    callback(e);
  }

};
