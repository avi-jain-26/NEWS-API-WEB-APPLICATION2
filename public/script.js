const API_KEY = "pub_a275d07be0884c6ebf15b87a3b5f600c";

  const messages = [
      "नमस्ते...",
      "BONJOUR...",
      "CIAO...",
      "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ...",
      "HOLA...",
      "নমস্কার...",
      "Hallo..."
    ];

    let index = 0;
    const textElement = document.getElementById("changingText");

    const intervalId = setInterval(() => {
      textElement.textContent = messages[index % messages.length];
      index++;
    }, 800); 

    
    setTimeout(() => {
      clearInterval(intervalId); // Stop changing text
      document.getElementById("intro").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 6000);

 function fetchNews() {
      const country = document.getElementById("country").value;
      const category = document.getElementById("category").value;
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${country}&category=${category}&language=en`;


fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("news-container");
    container.innerHTML = "";
    data.results.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <img src="${article.image_url || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}" alt="News Image"/>
        <h3>${article.title}</h3>
        <a href="${article.link}" target="_blank">Read More</a>`;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching news:", error);
    document.getElementById("news-container").innerText = "Failed to load news.";
});
 }
