function fetchCryptoPrice() {
    fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
        .then((result) => result.json())
        .then((data) => {
            const coins = data.map((coin) => {
                return {
                    id: coin.id,
                    symbol: coin.symbol,
                    img: coin.image,
                    name: coin.name,
                    currentPrice: coin.current_price,
                    ath: coin.ath,
                    percent: ((coin.current_price / coin.ath) * 100).toFixed(2),
                };
            });

            const barArea = document.getElementById("barArea");

            coins.forEach((coin) => {
                const li = document.createElement("li");
                li.classList.add("progress", `${coin.symbol}`, `${coin.id}`);
                li.setAttribute("id", coin.id);


                const coinInfo = document.createElement("div");
                coinInfo.classList.add("coinInfo");

                const iconAndName = document.createElement("div");
                iconAndName.classList.add("iconAndName");

                const img = document.createElement("img");
                img.setAttribute("id", `${coin.id}-icon`);
                img.setAttribute("src", coin.img);
                img.setAttribute("alt", `${coin.name}-icon`);
                img.classList.add("coinIcon");

                const h2 = document.createElement("h2");
                h2.setAttribute("id", coin.name);
                h2.textContent = coin.name;

                iconAndName.appendChild(img);
                iconAndName.appendChild(h2);
                coinInfo.appendChild(iconAndName);

                const priceAndPercent = document.createElement("div");
                priceAndPercent.classList.add("priceAndPercent");

                const currentPrice = document.createElement("p");
                currentPrice.setAttribute("id", `${coin.id}-price`);
                currentPrice.classList.add('currentPrice');
                currentPrice.textContent = `$${coin.currentPrice.toLocaleString()}`;

                const percent = document.createElement("p");
                percent.setAttribute("id", `${coin.id}-percent`);
                percent.classList.add('percent')
                percent.textContent = `${coin.percent}%`;

                priceAndPercent.appendChild(currentPrice);
                priceAndPercent.appendChild(percent);
                coinInfo.appendChild(priceAndPercent);

                const athPrice = document.createElement("p");
                athPrice.setAttribute("id", `${coin.id}-ath`);
                athPrice.classList.add("athPrice")
                athPrice.textContent = `ATH:$${coin.ath.toLocaleString()}`;

                li.appendChild(coinInfo);
                li.appendChild(athPrice);

                const statusBar = document.createElement("div");
                statusBar.classList.add("statusBar");

                const statusBarFill = document.createElement("div");
                statusBarFill.classList.add("status-bar-fill");
                statusBarFill.style.width = `${coin.percent}%`;

                statusBar.appendChild(statusBarFill);
                li.appendChild(statusBar);

                barArea.appendChild(li);
            });
        })
        .catch((error) => {
            console.log(error);
        });

}


function searchCoin() {
    const searchInput = document.getElementById('searchInput');
    const listItems = document.querySelectorAll('.progress');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        listItems.forEach(item => {
            const coinName = item.classList;
            if (coinName.contains(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}