const clock = () => {
  // 現在の日時・時刻の情報を取得
  const d = new Date();

  // 年を取得
  let year = d.getFullYear();
  // 月を取得
  let month = d.getMonth() + 1;
  // 日を取得
  let date = d.getDate();
  // 曜日を取得
  let dayNum = d.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];
  // 時を取得
  let hour = d.getHours();
  // 分を取得
  let min = d.getMinutes();
  // 秒を取得
  let sec = d.getSeconds();

  // 1桁の場合は0を足して2桁に
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // 日付・時刻の文字列を作成
  let today = `${year}.${month}.${date} ${day}`;
  let time = `${hour}:${min}`;

  // 文字列を出力
  document.querySelector(".clock-date").innerText = today;
  document.querySelector(".clock-time").innerText = time;
};

// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);

$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
      $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
  });


//背景色の変更
// HTMLタグに「theme」属性を追加。valueに「DARK」をいれる
document.documentElement.setAttribute('theme', 'BLUE');

// 「DARK」テーマに切り替わるよ
function changeBlue() {
  document.documentElement.setAttribute('theme', 'BLUE');
}

// 「GREEN」テーマに切り替わるよ
function changeGreen() {
  document.documentElement.setAttribute('theme', 'GREEN');
}

// 「PINK」テーマに切り替わるよ
function changePink() {
  document.documentElement.setAttribute('theme', 'PINK');
}

// 「YELLOW」テーマに切り替わるよ
function changeYellow() {
  document.documentElement.setAttribute('theme', 'YELLOW');
}