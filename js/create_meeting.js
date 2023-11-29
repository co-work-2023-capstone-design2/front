// 새로 만들기
$(".btn-new").on("click", () => {
  $(".container").addClass("hide");
  $(".container-new").removeClass("hide");
});

// 새로 만들기 -다시 뽑기 버튼
const buildings = [
  "img/buildings/building_1.png",
  "img/buildings/building_2.png",
  "img/buildings/building_3.png",
  "img/buildings/building_4.png",
  "img/buildings/building_5.png",
];
let random;
$(".btn-retry").on("click", () => {
  random = Math.floor(Math.random() * buildings.length);
  $("#img-building-setting").attr("src", buildings[random]);
});

// 새로 만들기 -다음 버튼
$(".btn-new-next").on("click", () => {
  $(".container-new").addClass("hide");
  $(".img-container").removeClass("hide");
  $(".img-new-building").attr("src", buildings[random]);
});

// drag-and-drop event
document
  .querySelector(".img-new-building")
  .addEventListener("dragstart", (event) => {
    const startX = event.offsetX;
    const startY = event.offsetY;
    event.dataTransfer.setData("text/plain", `${startX},${startY}`);
  });

document.querySelector("body").addEventListener("dragover", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

document.querySelector("body").addEventListener("drop", (event) => {
  event.preventDefault();
  event.stopPropagation();

  // put building
  const buildingElement = document.querySelector(".img-new-building");
  const clonedBuildingElement = buildingElement.cloneNode(); // copy
  // copy position setting
  const [startX, startY] = event.dataTransfer.getData("text/plain").split(",");
  const posX = event.offsetX - parseInt(startX);
  const posY = event.offsetY - parseInt(startY);
  clonedBuildingElement.style.left = posX + "px";
  clonedBuildingElement.style.top = posY + "px";
  clonedBuildingElement.style.position = "fixed";
  // input copy to drop container
  let newBuilbing = document
    .querySelector("body")
    .appendChild(clonedBuildingElement);
  newBuilbing.id = "1"; // todo: change to random id
  document.querySelector(".img-new-building").classList.add("hide");

  newBuilbing.onclick = function () {
    $(".container-make-character").removeClass("hide");
  };
  // todo
  // send to server building's position
});

// 초대 코드로 들어가기 클릭
$(".btn-link").on("click", () => {
  $(".container").addClass("hide");
  $(".container-link").removeClass("hide");
});

// 초대 코드 폼 내 입장하기 버튼 클릭
$(".btn-invite-next").on("click", () => {
  $(".container-link").addClass("hide");
  $(".container-make-character").removeClass("hide");
});

// 초대 코드 폼 내 캐릭터 다시 뽑기 버튼
let counter = 3;
$("#retry-character").on("click", () => {
  if (counter > 0) {
    counter--;
    $("#retry-character").html(`&#128472; 다시 뽑기 (${counter}회)`);
    // todo: change character img
  }
});
