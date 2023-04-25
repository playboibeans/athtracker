window.addEventListener('load', function () {
    checkMode();
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
    opPrice();
    astrPrice();
    trxPrice();
    uniPrice();
    linkPrice();
    atomPrice();
    etcPrice();
    xmrPrice();
    pepePrice();
    flokiPrice();
    searchCoin();
});



function switchMode() {
    const element = document.body.classList;
    element.toggle("darkMode");
    const header = document.querySelector('header').classList
    header.toggle('darkHeader')
    const bar = document.querySelectorAll('.statusBar');
    bar.forEach(barColor => { barColor.classList.toggle('statusBarLight') })
    const list = document.querySelectorAll('.progress');
    list.forEach(borderColor => { borderColor.classList.toggle('progressLight') })
    const button = document.querySelectorAll('.sortButtons');
    button.forEach(buttonBorder => { buttonBorder.classList.toggle('sortButtonsLight') })
    if (element.contains('darkMode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    };

    const switchImg = document.getElementById("darkmodeSwitch");
    const currentSrc = switchImg.getAttribute("src");
    if (currentSrc.endsWith("switch.png")) {
        switchImg.setAttribute("src", "light.png");
    } else {
        switchImg.setAttribute("src", "switch.png");
    }
}

function checkMode() {
    const storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark') {
        document.body.classList.add('darkMode');
        document.querySelector('header').classList.add('darkHeader');
        document.querySelectorAll('.statusBar').forEach(barColor => { barColor.classList.add('statusBarLight') });
        document.querySelectorAll('.progress').forEach(borderColor => { borderColor.classList.add('progressLight') });
        document.querySelectorAll('.sortButtons').forEach(buttonBorder => { buttonBorder.classList.add('sortButtonsLight') });
        document.getElementById("darkmodeSwitch").setAttribute("src", "light.png");
    } else {
        document.body.classList.remove('darkMode');
        document.querySelector('header').classList.remove('darkHeader');
        document.querySelectorAll('.statusBar').forEach(barColor => { barColor.classList.remove('statusBarLight') });
        document.querySelectorAll('.progress').forEach(borderColor => { borderColor.classList.remove('progressLight') });
        document.querySelectorAll('.sortButtons').forEach(buttonBorder => { buttonBorder.classList.remove('sortButtonsLight') });
        document.getElementById("darkmodeSwitch").setAttribute("src", "switch.png");
    }
}


function switchList() {
    const element = document.getElementById('barArea').classList;
    element.toggle("barAreaListView");
    const lists = document.querySelectorAll('li');
    lists.forEach(list => { list.classList.toggle('progressLength'); });
    const moreText = document.getElementById('moreText').classList
    moreText.toggle('moreText');
    const tooltip = document.querySelectorAll('.tooltip');
    tooltip.forEach(list => { list.classList.toggle('tooltipListView'); });

}

function logoRotate() {
    const logo = document.getElementById('logo').classList;
    logo.toggle("logo-rotate")
}

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

function searchCoin() {
    const searchInput = document.getElementById('searchInput');
    const listItems = document.querySelectorAll('.progress');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        listItems.forEach(item => {
            const coinName = item.id.toLowerCase();
            if (coinName.includes(searchText)) {
                item.style.display = 'flex';

            } else {
                item.style.display = 'none';
            }
        });
    });

}


function fetchCryptoPrice(coin, iconID, statusBarClass, statusBarFillClass, priceID, percentID, athID, coinName, tooltip) {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(response => response.json())
        .then((data) => {
            const nameOfCoin = data.name;
            document.getElementById(coinName).innerHTML = `${nameOfCoin}`;
            const crypto = data.market_data.current_price.usd;
            const crypto_ATH = data.market_data.ath.usd;
            const icon = data.image.small;
            document.getElementById(iconID).src = icon;
            const athStatusBar = document.querySelector(`.${statusBarClass}`);
            const athStatusBarFill = athStatusBar.querySelector(`.${statusBarFillClass}`);
            const athPercentComplete = crypto / crypto_ATH;
            const athPercentString = `${(athPercentComplete * 100).toFixed(2)}% `;
            document.getElementById(priceID).innerHTML = `$${crypto}`;
            document.getElementById(percentID).innerHTML = `${(athPercentComplete * 100).toFixed(2)}%`;
            document.getElementById(athID).innerHTML = `ATH:$${crypto_ATH} `;
            athStatusBarFill.style.width = athPercentString;
            const marketcap = data.market_data.market_cap.usd;
            const change24h = data.market_data.price_change_percentage_24h
            const change7d = data.market_data.price_change_percentage_7d
            const change30d = data.market_data.price_change_percentage_30d
            document.getElementById(tooltip).textContent = `Market Cap: $${marketcap.toLocaleString()}\n24h price change: ${change24h.toFixed(2)}%\n7d price change: ${change7d.toFixed(2)}%\n30d price change: ${change30d.toFixed(2)}%`;

        })
        .catch(error => {
            console.log(error);
        })
}


function btcPrice() {
    fetchCryptoPrice('bitcoin', 'btc-Icon', 'btc-status-bar', 'btc-status-bar-fill', 'btc-price', 'btc-percent', 'btc-Ath', 'btc-Name', 'btc-tooltip');
}

function ethPrice() {
    fetchCryptoPrice('ethereum', 'eth-Icon', 'eth-status-bar', 'eth-status-bar-fill', 'eth-price', 'eth-percent', 'eth-Ath', 'eth-Name', 'eth-tooltip');
}

function bnbPrice() {
    fetchCryptoPrice('binancecoin', 'bnb-Icon', 'bnb-status-bar', 'bnb-status-bar-fill', 'bnb-price', 'bnb-percent', 'bnb-Ath', 'bnb-Name', 'bnb-tooltip');
}

function xrpPrice() {
    fetchCryptoPrice('ripple', 'xrp-Icon', 'xrp-status-bar', 'xrp-status-bar-fill', 'xrp-price', 'xrp-percent', 'xrp-Ath', 'xrp-Name', 'xrp-tooltip');
}

function dogePrice() {
    fetchCryptoPrice('dogecoin', 'doge-Icon', 'doge-status-bar', 'doge-status-bar-fill', 'doge-price', 'doge-percent', 'doge-Ath', 'doge-Name', 'doge-tooltip');
}

function adaPrice() {
    fetchCryptoPrice('cardano', 'ada-Icon', 'ada-status-bar', 'ada-status-bar-fill', 'ada-price', 'ada-percent', 'ada-Ath', 'ada-Name', 'ada-tooltip');
}

function solPrice() {
    fetchCryptoPrice('solana', 'sol-Icon', 'sol-status-bar', 'sol-status-bar-fill', 'sol-price', 'sol-percent', 'sol-Ath', 'sol-Name', 'sol-tooltip');
}

function shibPrice() {
    fetchCryptoPrice('shiba-inu', 'shib-Icon', 'shib-status-bar', 'shib-status-bar-fill', 'shib-price', 'shib-percent', 'shib-Ath', 'shib-Name', 'shib-tooltip');
}

function maticPrice() {
    fetchCryptoPrice('matic-network', 'matic-Icon', 'matic-status-bar', 'matic-status-bar-fill', 'matic-price', 'matic-percent', 'matic-Ath', 'matic-Name', 'matic-tooltip');
}

function ltcPrice() {
    fetchCryptoPrice('litecoin', 'ltc-Icon', 'ltc-status-bar', 'ltc-status-bar-fill', 'ltc-price', 'ltc-percent', 'ltc-Ath', 'ltc-Name', 'ltc-tooltip');
}

function dotPrice() {
    fetchCryptoPrice('polkadot', 'dot-Icon', 'dot-status-bar', 'dot-status-bar-fill', 'dot-price', 'dot-percent', 'dot-Ath', 'dot-Name', 'dot-tooltip');
}

function avaxPrice() {
    fetchCryptoPrice('avalanche-2', 'avax-Icon', 'avax-status-bar', 'avax-status-bar-fill', 'avax-price', 'avax-percent', 'avax-Ath', 'avax-Name', 'avax-tooltip');
}

function arbPrice() {
    fetchCryptoPrice('arbitrum', 'arb-Icon', 'arb-status-bar', 'arb-status-bar-fill', 'arb-price', 'arb-percent', 'arb-Ath', 'arb-Name', 'arb-tooltip');
}

function opPrice() {
    fetchCryptoPrice('optimism', 'op-Icon', 'op-status-bar', 'op-status-bar-fill', 'op-price', 'op-percent', 'op-Ath', 'op-Name', 'op-tooltip');
}

function astrPrice() {
    fetchCryptoPrice('astar', 'astr-Icon', 'astr-status-bar', 'astr-status-bar-fill', 'astr-price', 'astr-percent', 'astr-Ath', 'astr-Name', 'astr-tooltip');
}

function trxPrice() {
    fetchCryptoPrice('tron', 'trx-Icon', 'trx-status-bar', 'trx-status-bar-fill', 'trx-price', 'trx-percent', 'trx-Ath', 'trx-Name', 'trx-tooltip');
}

function uniPrice() {
    fetchCryptoPrice('uniswap', 'uni-Icon', 'uni-status-bar', 'uni-status-bar-fill', 'uni-price', 'uni-percent', 'uni-Ath', 'uni-Name', 'uni-tooltip');
}
function linkPrice() {
    fetchCryptoPrice('chainlink', 'link-Icon', 'link-status-bar', 'link-status-bar-fill', 'link-price', 'link-percent', 'link-Ath', 'link-Name', 'link-tooltip');
}

function atomPrice() {
    fetchCryptoPrice('cosmos', 'atom-Icon', 'atom-status-bar', 'atom-status-bar-fill', 'atom-price', 'atom-percent', 'atom-Ath', 'atom-Name', 'atom-tooltip');
}

function etcPrice() {
    fetchCryptoPrice('ethereum-classic', 'etc-Icon', 'etc-status-bar', 'etc-status-bar-fill', 'etc-price', 'etc-percent', 'etc-Ath', 'etc-Name', 'etc-tooltip');
}

function xmrPrice() {
    fetchCryptoPrice('monero', 'xmr-Icon', 'xmr-status-bar', 'xmr-status-bar-fill', 'xmr-price', 'xmr-percent', 'xmr-Ath', 'xmr-Name', 'xmr-tooltip');
}

function pepePrice() {
    fetchCryptoPrice('pepe', 'pepe-Icon', 'pepe-status-bar', 'pepe-status-bar-fill', 'pepe-price', 'pepe-percent', 'pepe-Ath', 'pepe-Name', 'pepe-tooltip');
}

function flokiPrice() {
    fetchCryptoPrice('floki', 'floki-Icon', 'floki-status-bar', 'floki-status-bar-fill', 'floki-price', 'floki-percent', 'floki-Ath', 'floki-Name', 'floki-tooltip');
}