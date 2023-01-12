const cheerio = require('cheerio');
const fs = require('fs');

// 加载由 Typora 导出的 html
const sourceHtml = fs.readFileSync('./exports/resume.html');
const $ = cheerio.load(sourceHtml);
const $head = $($('head')[0]);
const $body = $('body');

// 修改标题
$('title').text('赵越的简历');

// 设置 favicon
$head.append(`<link ref="icon" type="image/x-icon" href="./favicon.png">`);

// 插入 css
$head.append(`<link rel="stylesheet" href="./index.css">`)

// 插入下载按钮
$body.append(`<a class="pin pdf_downloader" href="./files/resume.pdf" download="赵越-前端-15565252838.pdf">PDF</a>`);
$body.append(`<a class="pin md_downloader" href="./files/resume.md" download="赵越-前端-15565252838.md">MD</a>`);

fs.writeFileSync('index.html', $.root().html());
