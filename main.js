// ! Date Formatter

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    month: "long",
  }).format(date);
}
console.log(formatDate(today));

//! Find the odd repeat in array
const text = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function findOdd(arr) {
  const oddObj = arr.reduce((sum, item) => {
    if (!sum[item]) {
      sum[item] = 0;
    }
    sum[item]++;
    return sum;
  }, {});
  for (let [key, value] of Object.entries(oddObj)) {
    if (value % 2) {
      return key;
    }
  }
}
console.log(findOdd(text));

//! double click prevent first click !!!!!

//? With this method when we see dog if double click again for a little short time we will see the cat and after than we will see a dog but we don't want that and that leads us to the second method

//* const button = document.querySelector(".change");
//* const image = document.querySelector(".image");
//* button.addEventListener("click", () => {
//*   image.innerHTML = `<img src="${`https://source.unsplash.com/random/300x300/?cat`}" alt="">`;
//* });

//* button.addEventListener("dblclick", () => {
//*   image.innerHTML = `<img src="${`https://source.unsplash.com/random/300x300/?dog`}" alt="">`;
//* });
