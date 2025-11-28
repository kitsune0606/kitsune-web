
        fetch("./kitsune-parts/header.html")
         .then(res=>res.text())//HTML を取り込む
         .then(html=>document.getElementBuId("site-header").insertAdjacentHTML("beforeend",html))
         //header.html の中身を <header id="site-header"> に追加する
