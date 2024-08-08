document.getElementById("fetchProfile").addEventListener("click", function() {
    const apiKey = "46d016033589cb9444fe2ad8867bcd4f"; // Ganti dengan API Key Anda
    const request = "profile";
    const signature = CryptoJS.MD5(apiKey + "Profile").toString();

    fetch("https://api.paydisini.co.id/v1/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: apiKey,
            request: request,
            signature: signature
        })
    })
    .then(response => response.json())
    .then(data => {
        const profileDiv = document.getElementById("profileInfo");
        profileDiv.innerHTML = `
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    })
    .catch(error => {
        console.error("Error fetching profile:", error);
    });
});
