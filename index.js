const cardInner = document.querySelectorAll(".flip-card-inner");
const as = document.querySelector(".flip-card");
const frontList = document.querySelectorAll(".flip-card-front");
const backList = document.querySelectorAll(".flip-card-back");
const front = document.querySelector(".flip-card-front");
const back = document.querySelector(".flip-card-back");
const container = document.querySelector(".container");
const imgWin = document.querySelector('.img-win')
let clickButton = [];
let arrForSelectCard = [];
let openCard = 0;

let arr = [
  "cat",
  "cat",
  "cow",
  "cow",
  "dog",
  "dog",
  "horse",
  "horse",
  "lion",
  "lion",
  "pig",
  "pig",
];

arr.sort(() => Math.random() - 0.5);

function createCard() {
  container.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const prm = document.createElement("div");
    prm.className = "vova";
    prm.setAttribute("data-card", arr[i]);
    prm.innerHTML = `
    <div class="flip-card" data-card = "${arr[i]}">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            </div>
          <div class="flip-card-back">
            <img class="im" src="./assets/back/${arr[i]}.png" alt="">
          </div>
        </div>
    </div>
`;

    prm.addEventListener("click", (e) => {
      if (
        arrForSelectCard.length < 2 &&
        e.target.className == "flip-card-front"
      ) {
        arrForSelectCard.push(
          e.target.closest("div.flip-card").getAttribute("data-card")
        );
        open();
        checkOpen();
      }
      function checkOpen() {
        clickButton.push(e.target);
        if (
          arrForSelectCard.length == 2 &&
          arrForSelectCard[0] != arrForSelectCard[1]
        ) {
          setTimeout(() => {
            arrForSelectCard.length = 0;
            clickButton.forEach((el) => {
              el.parentNode.classList.remove("active");
              console.log(el);
            });
          }, 1000);
          console.log(arrForSelectCard);
        } else if (
          arrForSelectCard.length == 2 &&
          arrForSelectCard[0] == arrForSelectCard[1]
        ) {
          openCard += 2;
          arrForSelectCard.length = 0;
          clickButton.length = 0;
        }
      }

      function open() {
        if (
          arrForSelectCard.length != 2 &&
          arrForSelectCard[0] == arrForSelectCard[1]
        ) {
          console.log(1);
        }
        if (e.target.className == "flip-card-front") {
          e.target.parentNode.classList.toggle("active");
        }
      }
      if (openCard == 12) {
        setTimeout(() => {
          showModal();
        }, 2000);
      }
    });



    container.appendChild(prm);
  }
}
createCard();

 function showModal() {
  document.querySelector(".modal").style.display = "block";
  imgWin.style.display='block'
 }
document.querySelector(".modal-bottom").addEventListener("click", (e) => {
  window.location.reload();
});
