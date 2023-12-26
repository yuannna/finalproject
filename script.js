const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() {
  // 給恐龍元素添加 "jump-animation" 類別，用於觸發跳躍動畫
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

// 監聽鍵盤按鍵事件
document.addEventListener('keypress', (event) => {
  // 如果恐龍元素未添加 "jump-animation" 類別，則調用 jump 函式執行跳躍動作
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

// 建立定時器，每 50 毫秒執行一次
setInterval(() => {
  // 取得恐龍元素的頂部位置
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  // 取得障礙物元素的左側位置
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  // 更新分數
  score.innerText++;

  // 如果障礙物離開畫面，隱藏障礙物元素
  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  // 如果障礙物與恐龍碰撞，彈出視窗顯示分數並重新載入頁面
  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("您的分數為: " + score.innerText +
      "\\\\n\\\\n再玩一次？");
    location.reload();
  }
}, 50);
