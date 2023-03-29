window.addEventListener('load', function () {
    btcPrice();
    ethPrice();
    bnbPrice();
    xrpPrice();
    dogePrice();
    adaPrice();
    solPrice()
});

function switchMode() {
    const element = document.body.classList;
    element.toggle("darkMode");
}


function btcPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
        .then((price => {
            const bitcoin = price.data.market_data.current_price.usd;
            const BITCOIN_ATH = price.data.market_data.ath.usd;
            const btcIcon = price.data.image.large;
            document.getElementById('btcIcon').src = btcIcon
            const athStatusBar = document.querySelector('.btc-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.btc-status-bar-fill');
            const athPercentComplete = bitcoin / BITCOIN_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("btc-status-price").innerHTML = `$${bitcoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("btcAth").innerHTML = `$${BITCOIN_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

function ethPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/ethereum")
        .then((price => {
            const ethereum = price.data.market_data.current_price.usd;
            const ethereum_ATH = price.data.market_data.ath.usd;
            const ethIcon = price.data.image.large;
            document.getElementById('ethIcon').src = ethIcon
            const athStatusBar = document.querySelector('.eth-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.eth-status-bar-fill');
            const athPercentComplete = ethereum / ethereum_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("eth-status-price").innerHTML = `$${ethereum.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("ethAth").innerHTML = `$${ethereum_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

function bnbPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/binancecoin")
        .then((price => {
            const binancecoin = price.data.market_data.current_price.usd;
            const binancecoin_ATH = price.data.market_data.ath.usd;
            const bnbIcon = price.data.image.large;
            document.getElementById('bnbIcon').src = bnbIcon
            const athStatusBar = document.querySelector('.bnb-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.bnb-status-bar-fill');
            const athPercentComplete = binancecoin / binancecoin_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("bnb-status-price").innerHTML = `$${binancecoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("bnbAth").innerHTML = `$${binancecoin_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

function xrpPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/ripple")
        .then((price => {
            const ripple = price.data.market_data.current_price.usd;
            const ripple_ATH = price.data.market_data.ath.usd;
            const xrpIcon = price.data.image.large;
            document.getElementById('xrpIcon').src = xrpIcon
            const athStatusBar = document.querySelector('.xrp-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.xrp-status-bar-fill');
            const athPercentComplete = ripple / ripple_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("xrp-status-price").innerHTML = `$${ripple.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("xrpAth").innerHTML = `$${ripple_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

function dogePrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/dogecoin")
        .then((price => {
            const dogecoin = price.data.market_data.current_price.usd;
            const dogecoin_ATH = price.data.market_data.ath.usd;
            const dogeIcon = price.data.image.large;
            document.getElementById('dogeIcon').src = dogeIcon
            const athStatusBar = document.querySelector('.doge-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.doge-status-bar-fill');
            const athPercentComplete = dogecoin / dogecoin_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("doge-status-price").innerHTML = `$${dogecoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("dogeAth").innerHTML = `$${dogecoin_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}


function adaPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/cardano")
        .then((price => {
            const cardano = price.data.market_data.current_price.usd;
            const cardano_ATH = price.data.market_data.ath.usd;
            const adaIcon = price.data.image.large;
            document.getElementById('adaIcon').src = adaIcon
            const athStatusBar = document.querySelector('.ada-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.ada-status-bar-fill');
            const athPercentComplete = cardano / cardano_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("ada-status-price").innerHTML = `$${cardano.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("adaAth").innerHTML = `$${cardano_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

function solPrice() {
    axios.get("https://api.coingecko.com/api/v3/coins/solana")
        .then((price => {
            const sol = price.data.market_data.current_price.usd;
            const sol_ATH = price.data.market_data.ath.usd;
            const solIcon = price.data.image.large;
            document.getElementById('solIcon').src = solIcon
            const athStatusBar = document.querySelector('.sol-status-bar');
            const athStatusBarFill = athStatusBar.querySelector('.sol-status-bar-fill');
            const athPercentComplete = sol / sol_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById("sol-status-price").innerHTML = `$${sol.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById("solAth").innerHTML = `$${sol_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        )
        .catch(error => {
            console.log(error);
        })
}

