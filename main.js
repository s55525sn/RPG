let flag = true;
//戦闘データ
let left = document.getElementById("left");
let right = document.getElementById("right");
left.addEventListener("click", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
  }
});
right.addEventListener("click", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + (eneLv + 1) + ".png";
  }
});
//プレイヤーデータ
let name = prompt("名前を付けよう");
let St = 1;
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 6;
let plyExpNeed = 6;
let plySt = new Array(7);
let plyImg = document.getElementById("plyImg");
for (let i = 0; i < 7; i++) {
  plySt[i] = document.getElementById("plySt[i]");
}
plySt0.textContent = name;
//プレイヤー回復
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC.png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});
//敵のデータ
let j = 0;
let eneLv = 1;
let eneHp = 10;
let eneHpMax = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000];
let eneAtt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25];
let eneKill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let eneExp = [1, 2, 4, 6, 8, 10, 12, 20, 16, 18, 100];
let eneCnt = 5;
let eneCntMax = [5, 5, 5, 5, 4, 3, 4, 4, 5, 6, 10];
let eneSt = new Array(5);
let eneName = [
  "スライム",
  "コウモリ",
  "毒ネズミ",
  "コブラ",
  "フェンリル",
  "ゴブリンの子供",
  "ゴースト",
  "ゾンビ",
  "火の玉",
  "ベアー",
  "アテン",
];
let eneImg = document.getElementById("eneImg");
for (let i = 0; i < 5; i++) {
  eneSt[i] = document.getElementById("eneSt[i]");
}
//敵を攻撃
eneImg.addEventListener("mousedown", () => {
  if (flag) {
    eneImg.src = "img/enemyB" + j + ".png";
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + j + ".png";
    if (eneHp > 1) {
      eneHp -= plyAtt;
    } else {
      eneHp = eneHpMax[j];
      eneKill[j]++;
      eneSt4.textContent = "倒した回数：" + eneKill[j];
      eneSt2.textContent = "HP:" + eneHp;
      //経験値の処理
      plyExp += eneExp[j];
      plySt5.textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp[j];
      //レベルアップの処理
      if (plyExpNext < 1) {
        plyExpNext = plyLv * 10;
        plyLv++;
        plySt1.textContent = "レベル：" + plyLv;
        if (St == 1) {
          plyHpMax = plyLv * 3 + 6;
          plyHp = plyHpMax;
          plyAtt = plyLv * 3;
          plyHeal = 1;
        } else {
          plyHpMax = plyLv * 3 + 6;
          plyHp = plyHpMax;
          plyAtt = plyLv * 3;
          plyHeal = 1;
        }
      }
      if (j == 10) {
        clearInterval(loop);
        eneSec.textContent = "ゲームクリア";
        flag = false;
        eneImg.src = "img/clear.png";
      }
    }
    eneSt2.textContent = "HP:" + eneHp;
    plySt2.textContent = "HP:" + plyHp;
    plySt3.textContent = "攻撃力" + plyAtt;
    plySt4.textContent = "回復魔法：" + plyHeal;
    plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
  }
});
//敵が時間ごとに攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt > 0) {
    eneCnt--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
  } else {
    plyImg.src = "img/playerB.png";
    plyHp -= eneAtt[j];
    if (plyHp > 0) {
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
    } else {
      plyHp = 0;
      clearInterval(loop);
      flag = false;
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "ゲームオーバー";
    }
    setTimeout(() => {
      if (flag) {
        eneCnt = eneCntMax[j];
        plyImg.src = "img/playerA.png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
      }
    }, 500);
  }
}, 1000);
left.addEventListener("click", () => {
  if (flag) {
    if (j > 0) {
      j--;
      eneImg.src = "img/enemyA" + j + ".png";
      eneLv--;
      eneHp = eneHpMax[j];
      eneSt0.textContent = eneName[j];
      eneSt1.textContent = "レベル：" + eneLv;
      eneSt2.textContent = "HP:" + eneHp;
      eneSt3.textContent = "攻撃力" + eneAtt[j];
      eneSt4.textContent = "倒した回数" + eneKill[j];
    }
  }
});
right.addEventListener("click", () => {
  if (flag) {
    if (j < 11) {
      j++;
      eneImg.src = "img/enemyA" + j + ".png";
      eneLv++;
      eneHp = eneHpMax[j];
      eneSt0.textContent = eneName[j];
      eneSt1.textContent = "レベル：" + eneLv;
      eneSt2.textContent = "HP:" + eneHp;
      eneSt3.textContent = "攻撃力" + eneAtt[j];
      eneSt4.textContent = "倒した回数" + eneKill[j];
    }
  }
});
