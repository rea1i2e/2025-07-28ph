/**
 * スクロールアニメーション
 * IntersectionObserver API
 */
const fadeinItems = document.querySelectorAll(".js-fadeinup"); // フェードインさせたい要素を全て取得

const fadeinOptions = {
  root: null, // 監視の基準となる要素を指定。nullの場合はビューポートが基準
  rootMargin: "0px 0px -150px", // ビューポートの下から150pxの位置で発火
  threshold: 0 // 要素が1ピクセルでもビューポートに入ったら発火
};

// 交差が発生したときに呼び出される関数（コールバック関数）
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { // 要素がビューポートに入ったかどうかを判定
      entry.target.classList.add("is-show"); // 要素がビューポートに入ったらクラスを追加して表示
    }
  });
};

// IntersectionObserverを作成し、指定したオプションで監視を開始
const fadeinObserver = new IntersectionObserver(handleIntersection, fadeinOptions);

// 各要素に対してIntersectionObserverを設定
fadeinItems.forEach((item) => {
  fadeinObserver.observe(item); // 各要素を監視対象に追加
});
