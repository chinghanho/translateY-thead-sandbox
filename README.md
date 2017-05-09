# 固定 table header 實驗

Dropbox 價格表上面有個 thead 標籤用 translateY 控制，onScroll 時固定在畫面特定位置上。

## 遇到的問題

on scroll 時 translateY 去位移 table thead 會發生跳動，即透過 requestAnimationFrame 去跑還是會 jank，結果是要放一個 position fixed 的元素在它上面，但是只對 Chrome 有作用，Firefox 仍然會 lag。
