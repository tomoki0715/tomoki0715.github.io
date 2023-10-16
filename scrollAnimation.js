// scrollAnimation.js
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animate-on-scroll'); // スクロール時にアニメーションを適用する要素を選択

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect(); // 要素の位置を取得

        // もし要素が画面内に表示されたら
        if (position.top < window.innerHeight) {
            element.classList.add('animated'); // CSSで定義されたアニメーションを適用するクラスを追加
        }
    });
});
