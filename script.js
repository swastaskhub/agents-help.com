const countries = [
    "Kenya 🇰🇪",
    "Nigeria 🇳🇬",
    "Ghana 🇬🇭",
    "USA 🇺🇸",
    "UK 🇬🇧",
    "Canada 🇨🇦",
    "India 🇮🇳",
    "Germany 🇩🇪",
    "France 🇫🇷",
    "Brazil 🇧🇷",
    "South Africa 🇿🇦",
    "Italy 🇮🇹",
    "Spain 🇪🇸",
    "Japan 🇯🇵",
    "China 🇨🇳",
    "Mexico 🇲🇽",
    "Turkey 🇹🇷",
    "UAE 🇦🇪",
    "Australia 🇦🇺",
    "Netherlands 🇳🇱"
];

// Shuffle randomly
countries.sort(() => Math.random() - 0.5);

const container = document.getElementById("countryList");
const errorBox = document.getElementById("error");

// Encode message for URL
const message = encodeURIComponent("Hello, I wanted to make payments on my swastask account");

countries.forEach(country => {
    const btn = document.createElement("button");
    btn.textContent = country;

    btn.addEventListener("click", () => {
        if (country.includes("Kenya")) {
            // Redirect with pre-filled WhatsApp message
            window.location.href = `https://wa.me/254111559112?text=${message}`;
        } else {
            errorBox.textContent = "❌ Sorry, this country is not supported.";
        }
    });

    container.appendChild(btn);
});
    container.appendChild(btn);
});
