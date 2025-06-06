document.getElementById("reportBtn").addEventListener("click", function () {
    const text = encodeURIComponent("#TD生成エンジン　(開発者はこのタグを不定期に検索することでデバッグに取り掛かります！)");
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, "_blank");
});