const cheerio = require('cheerio');
const prettier = require('prettier');

const containsCodeChild = $block => {
  return $block.find('code').length > 0;
};

const getCode = $block => {
  let content;  
  if (containsCodeChild($block)) {
    return $('block').find('code').first().text();
  } else {
    content = $block.text();    
  }
  return content;
}

export const parse = (html, opts = {}) => {
  const $ = cheerio.load(html);

  let blocks = [];  
  $('pre').each((index, el) => {
    const $el = $(el);
    const content = getCode($el);
    let prettified = content;
    try {
      blocks.push(prettier.format(prettified, opts));  
    } catch (e) {
      blocks.push(prettified);  
    }
  });

  return blocks;
};
