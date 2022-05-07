export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((btc) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (50 / btc.BRL.sell).toFixed(5 );
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
