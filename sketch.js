let textToShow = "TKUET";
let textSizeValue = 32; // 字體大小
let inputBox; // 用於存放文字框
let inputText = ""; // 初始文字內容
let slider; // 滑桿用於調整文字大小
let button; // 按鈕用於切換文字
let isShaking = false; // 是否正在抖動的旗標

function setup() {
  createCanvas(windowWidth,windowHeight); // 設定畫布大小
  textAlign(LEFT, CENTER); // 對齊文字
  textSize(textSizeValue); // 設定文字大小
  // 創建文字輸入框
  inputBox = createInput();
  inputBox.position(10, 10); // 輸入框的位置
  inputBox.size(200); // 設定輸入框的寬度
  inputBox.input(updateText); // 當輸入時觸發函式 updateText
  // 創建滑桿
  slider = createSlider(10, 100, textSizeValue); // 最小值為10，最大值為100，初始值為32
  slider.position(10, 50); // 滑桿的位置
  slider.input(updateTextSize); // 當調整滑桿時更新文字大小
  // 創建按鈕
  button = createButton('切換抖動');
  button.position(slider.x + slider.width + 10, 50); // 設定按鈕位於滑桿右邊
  button.mousePressed(toggleShaking); // 點擊按鈕時切換抖動狀態
}

function draw() {
  background(200); // 背景顏色
  fill(0); // 設定文字顏色
  textSize(textSizeValue); // 更新文字大小
  // let textToShow = "😊❤️🤣💕"; // 要顯示的表情符號
  // for (let x = 0; x < width; x += textWidth(textToShow + " ")) {
  //   text(textToShow, x, height / 2); // 顯示一整排文字
  // }
/*
  let xOffset = frameCount * 2 % textWidth(textToShow + " "); // 計算水平偏移量
  for (let x = -xOffset; x < width; x += textWidth(textToShow + " ")) {
    text(textToShow, x, height / 2); // 連續顯示文字
  }
*/
/*
  // 填滿整個畫布的文字
  for (let y = 80; y < height; y += textAscent() + 10) { // 計算文字高度
    for (let x = 0; x < width; x += textWidth(inputText + " ")) {
      text(inputText, x, y); // 繪製文字
    }
  }
*/
  // 用輸入框的文字填滿畫布
  for (let y = 80; y < height; y += textSizeValue + 10) { // 根據文字大小計算間距
    for (let x = 0; x < width; x += textWidth(inputText + " ")) {
      let xOffset = isShaking ? random(-2, 2) : 0; // 如果抖動，加入水平偏移量
      let yOffset = isShaking ? random(-2, 2) : 0; // 如果抖動，加入垂直偏移量
      text(inputText, x + xOffset, y + yOffset); // 繪製文字
    }
  }
}

// 更新輸入框文字的函式
function updateText() {
  inputText = inputBox.value(); // 取得輸入框中的內容
}

// 更新文字大小的函式
function updateTextSize() {
  textSizeValue = slider.value(); // 根據滑桿更新文字大小
}

// 切換抖動狀態的函式
function toggleShaking() {
  isShaking = !isShaking; // 切換抖動的布林值
}