import fetch from 'isomorphic-fetch';

export const getHtml = async url => {
  const html = await fetch(url)
    .then(response => response.text());

  return html;
};
