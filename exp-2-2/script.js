var box = document.getElementById("products");

var electronics = [
    "Wireless Headphones - $129.99",
    "Bluetooth Speaker - $89.99"
];

var clothing = [
    "Cotton T-Shirt - $24.99",
    "Denim Jeans - $59.99"
];

function show(list, category) {
    for (var i = 0; i < list.length; i++) {
        var parts = list[i].split(" - ");

        box.innerHTML += `
            <div class="card">
                <h3>${parts[0]}</h3>
                <div class="price">${parts[1]}</div>
                <span class="tag ${category}">${category}</span>
            </div>
        `;
    }
}

function filterProducts() {
    box.innerHTML = "";
    var choice = document.getElementById("categorySelect").value;

    if (choice === "electronics") {
        show(electronics, "electronics");
    } else if (choice === "clothing") {
        show(clothing, "clothing");
    } else {
        show(electronics, "electronics");
        show(clothing, "clothing");
    }
}

filterProducts();
