import cheerio from 'cheerio';

//let $ = cheerio.load('');

let getData = html => {
    var data = [];
    const $ = cheerio.load(html);
    $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
        data.push({
            title : $(elem).text(),
            link : $(elem).find('a.storylink').attr('href')
        });
    });
    console.log(data);
}
getData(response.data)