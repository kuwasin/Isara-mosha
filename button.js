scrollTop('js_scroll',150);

function scrollTop(el,duration){
  let target = document.getElementById(el);
  target.addEventListener('click', function(){
    let currentY = window.pageYOffset;
    let step = duration/currentY > 1 ? 10 :100;
    let timeStep = duration/currentY * step;
    let intervalId = setInterval(scrollUp,timeStep);

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0){
        clearInterval(intervalId);
      }else{
        scrollBy(0, -step);
      }
    }
  });
}



const scrollEvent = function(){
  window.addEventListener('scroll',function(){

    //スクロール量の取得
    let scrollValue = window.pageYOffset;
    //要素の取得
    let scrollEle = document.getElementById("js_scroll");

    //取得した要素のtop値の取得+スクロール量
    let scrollTopAnime = scrollEle.getBoundingClientRect().top + scrollValue;

    //画面の高さを取得
    let windowHeight = window.innerHeight;

    //はみ出させる値

    let value = 500;


    //条件設定
    if(scrollValue > scrollTopAnime - windowHeight + value){
      scrollEle.classList.add("js-fade");
    }


  });
};


scrollEvent();