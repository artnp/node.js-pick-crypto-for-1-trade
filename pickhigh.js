const axios = require("axios")
const cheerio = require("cheerio")
const open = require('open')

const app = async () => {

  const coinpick = await fetchData('https://bettertrader.io/cryptoscannerdark?exchange=Binance&quote_coin=BUSD&spread_cat=%3E20%25&sort_by=Spread+%28hi-low%29&limit=')
  const result = extractData(coinpick)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}

const extractData = (coinpick) => {
  const $ = cheerio.load(coinpick);
  const coinpick1 = $('body > form > section > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > a').text()
  const coinpick11 = coinpick1.replace("-", "")
  const coinpick2 = $('body > form > section > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').text()
  const coinpick22 = coinpick2.replace("-", "")
  const coinpick3 = $('body > form > section > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > a').text()
  const coinpick33 = coinpick3.replace("-", "")
  const coinpick4 = $('body > form > section > div > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > a').text()
  const coinpick44 = coinpick4.replace("-", "")
  const coinpick5 = $('body > form > section > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a').text()
  const coinpick55 = coinpick5.replace("-", "")
  const coinpick6 = $('body > form > section > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > a').text()
  const coinpick66 = coinpick6.replace("-", "")
  const coinpick7 = $('body > form > section > div > div > table > tbody > tr:nth-child(7) > td:nth-child(2) > a').text()
  const coinpick77 = coinpick7.replace("-", "")
  const coinpick8 = $('body > form > section > div > div > table > tbody > tr:nth-child(8) > td:nth-child(2) > a').text()
  const coinpick88 = coinpick8.replace("-", "")
  const coinpick9 = $('body > form > section > div > div > table > tbody > tr:nth-child(9) > td:nth-child(2) > a').text()
  const coinpick99 = coinpick8.replace("-", "")

  open('https://www.multicoincharts.com/?c='+coinpick11+','+coinpick22+','+coinpick33+','+coinpick44+','+coinpick55+','+coinpick66+','+coinpick77+','+coinpick88+','+coinpick99);


}
app()