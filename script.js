const menus = {
  "Barbeque Nation": [
    {
      name: "Grilled Chicken",
      price: 350,
      img: "https://i0.wp.com/spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg?w=600&ssl=1",
    },
    {
      name: "Paneer Tikka",
      price: 280,
      img: "https://orders.popskitchen.in/storage/2024/09/image-358.png",
    },
    {
      name: "BBQ Veg Platter",
      price: 420,
      img: "https://data.thefeedfeed.com/static/other/15264425775afbaa5190eb8.jpg",
    },
  ],
  "Nalas Aappakadai": [
    {
      name: "Chicken Biryani",
      price: 180,
      img: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
    },
    {
      name: "Veg Meals",
      price: 120,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7Dxa0Yxmm5kStDXPSYr7FZEqTpBRzXfpng&s",
    },
    {
      name: "Parotta & Salna",
      price: 90,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfB-9c8KzO46KQochdfpx0WIZb73NXzVu7dQ&s",
    },
  ],
  A2B: [
    {
      name: "Mini Meals",
      price: 110,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQISI6U46fWFJWlbDU8qwLIze-WRwutT6IQ&s",
    },
    {
      name: "Ghee Roast",
      price: 90,
      img: "https://shrisangeethasrestaurant.com/cdn/shop/files/GheeRoast.webp?v=1743704914",
    },
    {
      name: "Idli & Vada",
      price: 70,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHju6aLENWm_QA_6Mw2XHa3EBZpWsA6ZNAog&s",
    },
  ],
  "Kovai Annapoorna": [
    {
      name: "Onion Uttapam",
      price: 80,
      img: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/02/onion-uthappam.jpg?ssl=1",
    },
    {
      name: "Masala Dosa",
      price: 95,
      img: "https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg",
    },
    {
      name: "Curd Rice",
      price: 60,
      img: "	https://www.indianveggiedelight.com/wp-content/uploads/2022/08/curd-rice-featured.jpg",
    },
  ],
  "Arabian Grill": [
    {
      name: "Shawarma Roll",
      price: 120,
      img: "https://kfoods.com/images1/newrecipeicon/spicy-shawarma-rolls_12878.jpg",
    },
    {
      name: "Grilled Chicken Half",
      price: 260,
      img: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4PPK3YfHMXFSCLnPX7DPRAtZPbnm5-laEQ&sdata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…aUKFABmhRUKYAWlUVCkATGgTQoUAI1UkmhQoARQoUKQH/2Q==",
    },
    {
      name: "Al Faham Chicken",
      price: 320,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQzYIpDLb5qh9tdrfOqHL07ezY3h6K77X6g&s",
    },
  ],
  "Chinese Wok": [
    {
      name: "Veg Fried Rice",
      price: 130,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg",
    },
    {
      name: "Chicken Noodles",
      price: 150,
      img: "https://www.modernhoney.com/wp-content/uploads/2024/01/Homemade-Chicken-Ramen-1-crop-scaled.jpg",
    },
    {
      name: "Paneer Manchurian",
      price: 160,
      img: "https://www.cookclickndevour.com/wp-content/uploads/2015/06/paneer-manchurian-dry-recipe1.jpg",
    },
  ],
  "Paradise Biryani": [
    {
      name: "Hyderabadi Biryani",
      price: 260,
      img: "https://authenticroyal.com/wp-content/uploads/2024/10/royal-rice-may-220461.jpg",
    },
    {
      name: "Chicken 65",
      price: 190,
      img: "https://hemamagesh.com/wp-content/uploads/2021/05/chicken65-featured-image.jpg",
    },
    {
      name: "Kebabs",
      price: 220,
      img: "https://kosherworldkitchen.com/wp-content/uploads/2024/12/Cinnamon-skewered-beef-kebabs.jpg",
    },
  ],
  "Cafe Coffee Day": [
    {
      name: "Cappuccino",
      price: 110,
      img: "	https://assets.beanbox.com/blog_images/8hCpSfagSbiQE1v56ClA.jpeg",
    },
    {
      name: "Blueberry Muffin",
      price: 80,
      img: "https://img.taste.com.au/mDT6P_Gq/taste/2016/11/classic-blueberry-muffins-87882-1.jpeg",
    },
    {
      name: "Veg Sandwich",
      price: 95,
      img: "	https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
    },
  ],
};

let cart = [];

function renderRestaurantList() {
  const listWrap = document.getElementById("restaurantList");
  listWrap.innerHTML = "";
  Object.keys(menus).forEach((name) => {
    const firstImg = menus[name][0].img;
    const div = document.createElement("div");
    div.className = "restaurant-card";
    div.innerHTML = `
      <img src="${firstImg}" alt="${name}">
      <div class="restaurant-body">
        <h3>${name}</h3>
        <p>Popular dishes &middot; 20-40 min</p>
      </div>
      <button class="view-btn" onclick="openMenu('${name}')">View Menu</button>
    `;
    listWrap.appendChild(div);
  });
}

function openMenu(name) {
  document.getElementById("menuPage").style.display = "block";
  document.getElementById("menuTitle").innerText = name;
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";
  (menus[name] || []).forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="meta">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
      </div>
      <div>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      </div>
    `;
    menuList.appendChild(card);
  });

  document.getElementById("menuPage").scrollIntoView({ behavior: "smooth" });
}

function closeMenu() {
  document.getElementById("menuPage").style.display = "none";
}
