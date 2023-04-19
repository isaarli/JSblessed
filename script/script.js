window.onscroll = () => scrollHeader();


const scrollHeader = () => {
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    document.querySelector("header").classList.add("header-fixed");
  } else {
    document.querySelector("header").classList.remove("header-fixed");
  }
};

// catalog

const data = {
  norma: [
    {
      name: "super burger",
      img: "./images/Norma/IMG_20230405_140142.jpg",
      price: 100,
    },
    {
      name: "pro burger",
      img: "./images/Norma/IMG_20230405_141317.jpg",
      price: 150,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230405_141723.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_160152.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_161239.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_161835.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_163154.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_163555.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_164344.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_165439.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_113541.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_121735.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_122810.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_123515.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_124429.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_125904.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230417_133907.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-13_10-02-22.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-13_10-02-28.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-13_10-09-35.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-13_10-09-41.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-13_10-09-43.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/photo_2022-03-27_11-59-48.jpg",
      price: 180,
    },
    {
      name: "extra burger",
      img: "./images/Norma/IMG_20230406_162635.jpg",
      price: 180,
    },
  ],
  batal: [
    {
      name: "italian pizza",
      img: "./images/Batal/IMG_20230405_142053.jpg",
      price: 300,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-02-29.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-02-31.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-02-32.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-02-35.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-02-34.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal//photo_2022-03-13_10-09-33.jpg",
      price: 400,
    },
    {
      name: "meat pizza",
      img: "./images/Batal/photo_2022-03-13_10-09-32.jpg",
      price: 400,
    },
  ],
  brend: [
    {
      name: "pivo",
      img: "./images/Brend/IMG_20230406_165008_1.jpg",
      price: 500,
    },
    {
      name: "vino",
      img: "./images/Brend/IMG_20230417_141314.jpg",
      price: 1000,
    },
    {
      name: "vodka",
      img: "./images/Brend/IMG_20230417_141924.jpg",
      price: 2000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_142519.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_142854_1.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_143303.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_143533.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_144218.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Brend/IMG_20230417_144734.jpg",
      price: 3000,
    },
  ],
  combo: [
    {
      name: "pivo",
      img: "./images/Combo/IMG_20230405_135653.jpg",
      price: 500,
    },
    {
      name: "vino",
      img: "./images/Combo/IMG_20230405_142314.jpg",
      price: 1000,
    },
    {
      name: "vodka",
      img: "./images/Combo/IMG_20230406_164617.jpg",
      price: 2000,
    },
    {
      name: "tequila",
      img: "./images/Combo/IMG_20230417_140149.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Combo/IMG_20230417_140637.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Combo/photo_2022-03-13_10-09-36.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Combo/photo_2022-03-13_10-09-42.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Combo/photo_2022-03-13_12-08-02.jpg",
      price: 3000,
    },
    {
      name: "tequila",
      img: "./images/Combo/photo_2022-03-13_12-08-16.jpg",
      price: 3000,
    },
  ],
};

const norma = data.norma;
const batal = data.batal;
const brend = data.brend;
const combo = data.combo;
const all = [...norma, ...batal, ...brend, ...combo];

const categories = (data) => {
  console.log(data);
  const output = document.querySelector(".output");
  output.innerHTML = "";
  data.forEach((el) => {
    const col = document.createElement("div");
    const box = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    // const price = document.createElement('p')

    col.className = "col-4";
    box.className = "categories__box";
    name.className = "name__item";

    img.src = el.img;
    name.textContent ="Поло";
    // price.textContent=`${el.price}₽`

    box.addEventListener("click", () => {
      // Remove the existing box content
      output.innerHTML = "";

      // Create a new img element with the image source of the clicked item
      const detailsItem = document.createElement("div");
      const clickedImg = document.createElement("img");

      detailsItem.className = "detailsItem";
      clickedImg.className = "imgDetails";
      clickedImg.src = el.img;

      // Add the new img element to the box
      detailsItem.append(clickedImg);
      output.append(detailsItem);
    });
    box.append(img, name);
    col.append(box);
    output.append(col);
  });
};
categories(all);

const categoryChoise = [
  {
    title: "Все",
    data: all,
  },
  {
    title: "Норма",
    data: norma,
  },
  {
    title: "Батал",
    data: batal,
  },
  {
    title: "Бренд",
    data: brend,
  },
  {
    title: "Комбо",
    data: combo,
  },
];

const clickOnButtonRenderCategory = () => {
  const categoryOutput = document.querySelector(".category__choose");
  categoryChoise.forEach((el) => {
    console.log(el);
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = el.title;
    button.addEventListener("click", () => {
      categories(el.data);
    });

    categoryOutput.append(button);
  });
};
clickOnButtonRenderCategory();
