const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();

  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab bg-gray-200 rounded-sm">${category.category}</a> 
        `;

    tabContainer.appendChild(div);
  });
};

const handleLoadNews = async (categoryId) => {
  const cardContainer = document.getElementById("card-container");
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100">
        <figure>
          <img class="h-48" src=${news?.thumbnail}>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
          <div class="avatar">
                <div class="w-14 rounded-full">
                  <img src=${news?.authors[0].profile_picture}
                </div>
              </div>
            ${news.title}
          </h2>
            <div>
              <h6>${news?.authors[0].profile_name}
              ${news?.authors[0].verified}
              </h6>
              <small>${news?.others.views}</small>
            </div>
        </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
