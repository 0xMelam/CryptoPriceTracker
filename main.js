var btc = document.getElementById("btc");
var eth = document.getElementById("eth");
var sol = document.getElementById("sol");
var ada = document.getElementById("ada");
var near = document.getElementById("near");
var ltc = document.getElementById("ltc");
var magic = document.getElementById("magic");
var dext = document.getElementById("dext");
var buddy = document.getElementById("buddy");
var prophet = document.getElementById("prophet");
var arb = document.getElementById("arb");
var glmr = document.getElementById("glmr");
var time = document.getElementById("getTime")

var liveprice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Csolana%2Cprophet%2Cbuddyai%2Cdextools%2Ccardano%2Cnear%2Cmagic%2Carbitrum%2Cmoonbeam&vs_currencies=usd&include_last_updated_at=true",
  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  sol.innerHTML = response.solana.usd;
  ada.innerHTML = response.cardano.usd;
  near.innerHTML = response.near.usd;
  ltc.innerHTML = response.litecoin.usd;
  magic.innerHTML = response.magic.usd;
  dext.innerHTML = response.dextools.usd;
  buddy.innerHTML = response.buddyai.usd;
  prophet.innerHTML = response.prophet.usd;
  arb.innerHTML = response.arbitrum.usd;
  glmr.innerHTML = response.moonbeam.usd;
  
  
  const timestamp = response.bitcoin.last_updated_at;
  const date = new Date(timestamp * 1000);
  date.setUTCHours(date.getUTCHours() - 5);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day} ${hours}:${minutes}:${seconds}`;
  
  time.innerHTML = formattedDate;
});
