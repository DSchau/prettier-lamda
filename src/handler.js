import { getHtml } from './get-html';
import { parse } from './parse';

export const prettify = async (event, context, callback) => {
  const { queryStringParameters: params = {} } = event;

  const { url, ...opts } = params;

  if (!url) {
    callback(new Error('A url query parameter is required'));
  }

  const html = await getHtml(url);
  
  const blocks = parse(html, opts);   

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      blocks
    })
  };

  callback(null, response);
};
