(function () {
    const machoFlagBuy = document.getElementById("macho-flag-buy");
    const machoFlagAmount = document.getElementById("macho-flag-amount");
    const machoFlagBank = document.getElementById("macho-flag-bank");
    const machoBadgeBuy = document.getElementById("macho-badge-buy");
    const machoBadgeAmount = document.getElementById("macho-badge-amount");
    const machoBadgeBank = document.getElementById("macho-badge-bank");
    const machoEraserBuy = document.getElementById("macho-eraser-buy");
    const machoEraserAmount = document.getElementById("macho-eraser-amount");
    const machoEraserBank = document.getElementById("macho-eraser-bank");

    machoFlagBuy.addEventListener('click', function () {
        const amount = parseInt(machoFlagAmount.value);
        const bank = parseInt(machoFlagBank.value);

        fetch("/api/buy", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({bank: bank, amount: amount, item: "flag", item_cost: 7 || 0 }),
        })
            .then(async function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
            .then(function (res) {
                if (!res.ok) {
                    alert(res.d.error || "Could not buy a macho flag");
                    return;
                }
                alert("Bought a macho flag!")
    })});

    machoBadgeBuy.addEventListener('click', function () {
        const amount = parseInt(machoBadgeAmount.value);
        const bank = parseInt(machoBadgeBank.value);

        fetch("/api/buy", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({bank: bank, amount: amount, item: "badge", item_cost: 3 || 0 }),
        })
            .then(async function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
            .then(function (res) {
                if (!res.ok) {
                    alert(res.d.error || "Could not buy a macho badge");
                    return;
                }
                alert("Bought a macho badge!")
    })});

    machoEraserBuy.addEventListener('click', function () {
        const amount = parseInt(machoEraserAmount.value);
        const bank = parseInt(machoEraserBank.value);

        fetch("/api/buy", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({bank: bank, amount: amount, item: "eraser", item_cost: 0 || 0 }),
        })
            .then(async function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
            .then(function (res) {
                if (!res.ok) {
                    alert(res.d.error || "Could not buy a macho pink eraser");
                    return;
                }
                alert("Bought a macho pink eraser!")
    })});

})();