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

countries.forEach(country => {
    const btn = document.createElement("button");
    btn.textContent = country;

    btn.addEventListener("click", () => {
        if (country.includes("Kenya")) {
            window.location.href = "https://wa.me/254111559112";
        } else {
            errorBox.textContent = "❌ Sorry, this country is not supported by your number.";
        }
    });

    container.appendChild(btn);
}););
});
