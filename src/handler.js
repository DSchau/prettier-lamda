import prettier from 'prettier';

export const prettify = async (event, context, callback) => {
  const { body, queryStringParameters: opts = {} } = event;

  if (!body) {
    callback(new Error('A post body is required'));
  }

  const prettified = prettier.format(body, opts);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      prettier: prettified
    })
  };

  callback(null, response);
};
