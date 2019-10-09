Array.prototype.random = function () {return this[Math.floor((Math.random() * this.length))];};

function FindProxyForURL(url, host) {
    let domains = [{url: "ipinfo.io", ip: ["51.89.41.41:3128"], country: ["all"]}];
    for (let i = 0; i < domains.length; i++){
        let domain = domains[i];
        if (host.indexOf(domain.url) !== -1 && (domain.country.indexOf('all')!==-1 || domain.country.indexOf('all')!==-1)) {
            return 'PROXY ' + domain.ip.random();
        }
    }
    return 'DIRECT';
}
