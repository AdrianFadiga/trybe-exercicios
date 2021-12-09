const url = 'https://api.coincap.io/v2/assets';

const fetchCripto = async () => {
  let criptoArray = await fetch(url)
  .then(response => response.json())
  .then(data => data.data.filter((cripto) => cripto.rank <= 10));
  criptoArray = criptoArray.map((cripto) => `${cripto.id} (${cripto.symbol}): ${cripto.priceUsd}`);
  const criptoList = document.getElementById('criptoList');
    criptoArray.forEach((cripto) => {
      const elementLi = document.createElement('li');
      elementLi.innerHTML = cripto;
      criptoList.appendChild(elementLi);
  });
};

fetchCripto();