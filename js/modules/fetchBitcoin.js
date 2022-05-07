export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btc) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (50 / btc.BRL.sell).toFixed(5 );
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
