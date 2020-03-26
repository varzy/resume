import Showdown from 'showdown';

export const renderMarkdown = (domId, markdownText) => {
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(markdownText);
  document.getElementById(domId).innerHTML = html;
};
