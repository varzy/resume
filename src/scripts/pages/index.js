import { renderMarkdown } from '../helpers';
import MarkdownIndex from '../../markdown/index.md';

window.onload= function(){
  registerRenderMarkdown();
  registerDownloadPdf();
}

function registerRenderMarkdown(){
  renderMarkdown('page_index', MarkdownIndex);
}

function registerDownloadPdf() {
  document.getElementById('pdf_downloader').onclick=function() {
    window.print();
  }
}
