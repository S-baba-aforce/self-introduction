
//トップページへ

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0     //ページトップまでスクロール
    }, 1500,"easeInOutQuint");     //ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
    return false;//リンク自体の無効化
});

//カーソル
window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-circle");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});

