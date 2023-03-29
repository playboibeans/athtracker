window.addEventListener('load', function () {
    btcPrice();
    ethPrice();
    bnbPrice();
    xrpPrice();
    dogePrice();
    adaPrice();
    solPrice();
    shibPrice();
    maticPrice();
    ltcPrice();
    dotPrice();
    avaxPrice()

    // Check if user has set the dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set the dark mode class on the body element if user has set the preference
    if (isDarkMode) {
        document.body.classList.add('darkMode');
    }
});

function switchMode() {
    const element = document.body.classList;
    element.toggle("darkMode");
    // Store the user's preference in localStorage
    localStorage.setItem('darkMode', element.contains('darkMode'));

}

function logoRotate() {
    const logo = document.getElementById('logo').classList;
    logo.toggle("logo-rotate")
}


function fetchCryptoPrice(coin, iconID, statusBarClass, statusBarFillClass, priceID, athID, coinName) {
    axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then((price) => {
            const nameOfCoin = price.data.name;
            document.getElementById(coinName).innerHTML = `${nameOfCoin}`;
            const crypto = price.data.market_data.current_price.usd;
            const crypto_ATH = price.data.market_data.ath.usd;
            const icon = price.data.image.large;
            document.getElementById(iconID).src = icon;
            const athStatusBar = document.querySelector(`.${statusBarClass}`);
            const athStatusBarFill = athStatusBar.querySelector(`.${statusBarFillClass}`);
            const athPercentComplete = crypto / crypto_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById(priceID).innerHTML = `$${crypto.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
            document.getElementById(athID).innerHTML = `$${crypto_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        .catch(error => {
            console.log(error);
        })
}

function btcPrice() {
    fetchCryptoPrice('bitcoin', 'btcIcon', 'btc-status-bar', 'btc-status-bar-fill', 'btc-status-price', 'btcAth', 'btcName');
}

function ethPrice() {
    fetchCryptoPrice('ethereum', 'ethIcon', 'eth-status-bar', 'eth-status-bar-fill', 'eth-status-price', 'ethAth', 'ethName');
}

function bnbPrice() {
    fetchCryptoPrice('binancecoin', 'bnbIcon', 'bnb-status-bar', 'bnb-status-bar-fill', 'bnb-status-price', 'bnbAth', 'bnbName');
}

function xrpPrice() {
    fetchCryptoPrice('ripple', 'xrpIcon', 'xrp-status-bar', 'xrp-status-bar-fill', 'xrp-status-price', 'xrpAth', 'xrpName');
}

function dogePrice() {
    fetchCryptoPrice('dogecoin', 'dogeIcon', 'doge-status-bar', 'doge-status-bar-fill', 'doge-status-price', 'dogeAth', 'dogeName');
}

function adaPrice() {
    fetchCryptoPrice('cardano', 'adaIcon', 'ada-status-bar', 'ada-status-bar-fill', 'ada-status-price', 'adaAth', 'adaName');
}

function solPrice() {
    fetchCryptoPrice('solana', 'solIcon', 'sol-status-bar', 'sol-status-bar-fill', 'sol-status-price', 'solAth', 'solName');
}

function shibPrice() {
    fetchCryptoPrice('shiba-inu', 'shibIcon', 'shib-status-bar', 'shib-status-bar-fill', 'shib-status-price', 'shibAth', 'shibName');
}

function maticPrice() {
    fetchCryptoPrice('matic-network', 'maticIcon', 'matic-status-bar', 'matic-status-bar-fill', 'matic-status-price', 'maticAth', 'maticName');
}

function ltcPrice() {
    fetchCryptoPrice('litecoin', 'ltcIcon', 'ltc-status-bar', 'ltc-status-bar-fill', 'ltc-status-price', 'ltcAth', 'ltcName');
}

function dotPrice() {
    fetchCryptoPrice('polkadot', 'dotIcon', 'dot-status-bar', 'dot-status-bar-fill', 'dot-status-price', 'dotAth', 'dotName');
}

function avaxPrice() {
    fetchCryptoPrice('avalanche-2', 'avaxIcon', 'avax-status-bar', 'avax-status-bar-fill', 'avax-status-price', 'avaxAth', 'avaxName');
}




// window.addEventListener('load', function () {
//     btcPrice();
//     ethPrice();
//     bnbPrice();
//     xrpPrice();
//     dogePrice();
//     adaPrice();
//     solPrice()
// });

// function switchMode() {
//     const element = document.body.classList;
//     element.toggle("darkMode");
// }


// function btcPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
//         .then((price => {
//             const bitcoin = price.data.market_data.current_price.usd;
//             const BITCOIN_ATH = price.data.market_data.ath.usd;
//             const btcIcon = price.data.image.large;
//             document.getElementById('btcIcon').src = btcIcon
//             const athStatusBar = document.querySelector('.btc-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.btc-status-bar-fill');
//             const athPercentComplete = bitcoin / BITCOIN_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("btc-status-price").innerHTML = `$${bitcoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("btcAth").innerHTML = `$${BITCOIN_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

// function ethPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/ethereum")
//         .then((price => {
//             const ethereum = price.data.market_data.current_price.usd;
//             const ethereum_ATH = price.data.market_data.ath.usd;
//             const ethIcon = price.data.image.large;
//             document.getElementById('ethIcon').src = ethIcon
//             const athStatusBar = document.querySelector('.eth-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.eth-status-bar-fill');
//             const athPercentComplete = ethereum / ethereum_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("eth-status-price").innerHTML = `$${ethereum.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("ethAth").innerHTML = `$${ethereum_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

// function bnbPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/binancecoin")
//         .then((price => {
//             const binancecoin = price.data.market_data.current_price.usd;
//             const binancecoin_ATH = price.data.market_data.ath.usd;
//             const bnbIcon = price.data.image.large;
//             document.getElementById('bnbIcon').src = bnbIcon
//             const athStatusBar = document.querySelector('.bnb-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.bnb-status-bar-fill');
//             const athPercentComplete = binancecoin / binancecoin_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("bnb-status-price").innerHTML = `$${binancecoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("bnbAth").innerHTML = `$${binancecoin_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

// function xrpPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/ripple")
//         .then((price => {
//             const ripple = price.data.market_data.current_price.usd;
//             const ripple_ATH = price.data.market_data.ath.usd;
//             const xrpIcon = price.data.image.large;
//             document.getElementById('xrpIcon').src = xrpIcon
//             const athStatusBar = document.querySelector('.xrp-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.xrp-status-bar-fill');
//             const athPercentComplete = ripple / ripple_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("xrp-status-price").innerHTML = `$${ripple.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("xrpAth").innerHTML = `$${ripple_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

// function dogePrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/dogecoin")
//         .then((price => {
//             const dogecoin = price.data.market_data.current_price.usd;
//             const dogecoin_ATH = price.data.market_data.ath.usd;
//             const dogeIcon = price.data.image.large;
//             document.getElementById('dogeIcon').src = dogeIcon
//             const athStatusBar = document.querySelector('.doge-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.doge-status-bar-fill');
//             const athPercentComplete = dogecoin / dogecoin_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("doge-status-price").innerHTML = `$${dogecoin.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("dogeAth").innerHTML = `$${dogecoin_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }


// function adaPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/cardano")
//         .then((price => {
//             const cardano = price.data.market_data.current_price.usd;
//             const cardano_ATH = price.data.market_data.ath.usd;
//             const adaIcon = price.data.image.large;
//             document.getElementById('adaIcon').src = adaIcon
//             const athStatusBar = document.querySelector('.ada-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.ada-status-bar-fill');
//             const athPercentComplete = cardano / cardano_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("ada-status-price").innerHTML = `$${cardano.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("adaAth").innerHTML = `$${cardano_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

// function solPrice() {
//     axios.get("https://api.coingecko.com/api/v3/coins/solana")
//         .then((price => {
//             const sol = price.data.market_data.current_price.usd;
//             const sol_ATH = price.data.market_data.ath.usd;
//             const solIcon = price.data.image.large;
//             document.getElementById('solIcon').src = solIcon
//             const athStatusBar = document.querySelector('.sol-status-bar');
//             const athStatusBarFill = athStatusBar.querySelector('.sol-status-bar-fill');
//             const athPercentComplete = sol / sol_ATH;
//             const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
//             document.getElementById("sol-status-price").innerHTML = `$${sol.toLocaleString()}(${(athPercentComplete * 100).toFixed(2)}%)`;
//             document.getElementById("solAth").innerHTML = `$${sol_ATH.toLocaleString()} `;
//             athStatusBarFill.style.width = athPercentString;
//         })
//         )
//         .catch(error => {
//             console.log(error);
//         })
// }

