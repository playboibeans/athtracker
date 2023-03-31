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
    avaxPrice();
    arbPrice();
    opPrice()

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

function switchIcon() {
    const switchImg = document.getElementById("darkmodeSwitch");
    const currentSrc = switchImg.getAttribute("src");

    if (currentSrc.endsWith("switch.png")) {
        switchImg.setAttribute("src", "light.png");
    } else {
        switchImg.setAttribute("src", "switch.png");
    }
}



function switchList() {
    const element = document.getElementById('barArea').classList;
    element.toggle("barAreaListView");
    // Store the user's preference in localStorage
    // localStorage.setItem('darkMode', element.contains('darkMode'));
    const lists = document.querySelectorAll('li');
    lists.forEach(list => { list.classList.toggle('progressLength'); });

    const moreText = document.getElementById('moreText').classList
    moreText.toggle('moreText')
}

function logoRotate() {
    const logo = document.getElementById('logo').classList;
    logo.toggle("logo-rotate")
}


function fetchCryptoPrice(coin, iconID, statusBarClass, statusBarFillClass, priceID, percentID, athID, coinName) {
    axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then((price) => {
            const nameOfCoin = price.data.name;
            document.getElementById(coinName).innerHTML = `${nameOfCoin}`;
            const crypto = price.data.market_data.current_price.usd;
            const crypto_ATH = price.data.market_data.ath.usd;
            const icon = price.data.image.small;
            document.getElementById(iconID).src = icon;
            const athStatusBar = document.querySelector(`.${statusBarClass}`);
            const athStatusBarFill = athStatusBar.querySelector(`.${statusBarFillClass}`);
            const athPercentComplete = crypto / crypto_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById(priceID).innerHTML = `$${crypto.toLocaleString()}`;
            document.getElementById(percentID).innerHTML = `${(athPercentComplete * 100).toFixed(2)}%`;
            document.getElementById(athID).innerHTML = `ATH:$${crypto_ATH.toLocaleString()} `;
            athStatusBarFill.style.width = athPercentString;
        })
        .catch(error => {
            console.log(error);
        })
}

function btcPrice() {
    fetchCryptoPrice('bitcoin', 'btcIcon', 'btc-status-bar', 'btc-status-bar-fill', 'btc-status-price', 'btc-percent', 'btcAth', 'btcName');
}

function ethPrice() {
    fetchCryptoPrice('ethereum', 'ethIcon', 'eth-status-bar', 'eth-status-bar-fill', 'eth-status-price', 'eth-percent', 'ethAth', 'ethName');
}

function bnbPrice() {
    fetchCryptoPrice('binancecoin', 'bnbIcon', 'bnb-status-bar', 'bnb-status-bar-fill', 'bnb-status-price', 'bnb-percent', 'bnbAth', 'bnbName');
}

function xrpPrice() {
    fetchCryptoPrice('ripple', 'xrpIcon', 'xrp-status-bar', 'xrp-status-bar-fill', 'xrp-status-price', 'xrp-percent', 'xrpAth', 'xrpName');
}

function dogePrice() {
    fetchCryptoPrice('dogecoin', 'dogeIcon', 'doge-status-bar', 'doge-status-bar-fill', 'doge-status-price', 'doge-percent', 'dogeAth', 'dogeName');
}

function adaPrice() {
    fetchCryptoPrice('cardano', 'adaIcon', 'ada-status-bar', 'ada-status-bar-fill', 'ada-status-price', 'ada-percent', 'adaAth', 'adaName');
}

function solPrice() {
    fetchCryptoPrice('solana', 'solIcon', 'sol-status-bar', 'sol-status-bar-fill', 'sol-status-price', 'sol-percent', 'solAth', 'solName');
}

function shibPrice() {
    fetchCryptoPrice('shiba-inu', 'shibIcon', 'shib-status-bar', 'shib-status-bar-fill', 'shib-status-price', 'shib-percent', 'shibAth', 'shibName');
}

function maticPrice() {
    fetchCryptoPrice('matic-network', 'maticIcon', 'matic-status-bar', 'matic-status-bar-fill', 'matic-status-price', 'matic-percent', 'maticAth', 'maticName');
}

function ltcPrice() {
    fetchCryptoPrice('litecoin', 'ltcIcon', 'ltc-status-bar', 'ltc-status-bar-fill', 'ltc-status-price', 'ltc-percent', 'ltcAth', 'ltcName');
}

function dotPrice() {
    fetchCryptoPrice('polkadot', 'dotIcon', 'dot-status-bar', 'dot-status-bar-fill', 'dot-status-price', 'dot-percent', 'dotAth', 'dotName');
}

function avaxPrice() {
    fetchCryptoPrice('avalanche-2', 'avaxIcon', 'avax-status-bar', 'avax-status-bar-fill', 'avax-status-price', 'avax-percent', 'avaxAth', 'avaxName');
}

function arbPrice() {
    fetchCryptoPrice('arbitrum', 'arbIcon', 'arb-status-bar', 'arb-status-bar-fill', 'arb-status-price', 'arb-percent', 'arbAth', 'arbName');
}

function opPrice() {
    fetchCryptoPrice('optimism', 'opIcon', 'op-status-bar', 'op-status-bar-fill', 'op-status-price', 'op-percent', 'opAth', 'opName');
}





// function sortDefault() {
//     const ul = document.getElementById('barArea');
//     const originalOrder = Array.from(ul.querySelectorAll('li'));
//     console.log(originalOrder)
//     originalOrder.forEach(li => ul.appendChild(li));
// }


function sortByDes() {
    const ul = document.getElementById('barArea');
    const removes = document.getElementById('moreToCome')
    ul.removeChild(removes)
    const lis = Array.from(ul.querySelectorAll('.progress'));
    lis.sort((a, b) => {
        const aPercent = parseFloat(a.querySelector('.percent').textContent);
        const bPercent = parseFloat(b.querySelector('.percent').textContent);
        return bPercent - aPercent;
    });
    lis.forEach(li => ul.appendChild(li));
    ul.appendChild(removes)
}

function sortByAsc() {
    const ul = document.getElementById('barArea');
    const removes = document.getElementById('moreToCome')
    ul.removeChild(removes)
    const lis = Array.from(ul.querySelectorAll('.progress'));
    lis.sort((a, b) => {
        const aPercent = parseFloat(a.querySelector('.percent').textContent);
        const bPercent = parseFloat(b.querySelector('.percent').textContent);
        return aPercent - bPercent;
    });
    lis.forEach(li => ul.appendChild(li));
    ul.appendChild(removes)

}

// function reset() {
//     alert('I actually do nothing.')
// }