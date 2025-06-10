// サービスワーカーがサポートされているか確認
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker 登録成功: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker 登録失敗: ', err);
    });
  });
}
