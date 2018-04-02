{
    let imgs=document.querySelectorAll(".imgbox li");
    let pages=document.querySelectorAll(".pagebox li");
    let bannert=document.querySelector(".yiju_banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    // console.log(imgs);
    // console.log(pages);
    pages.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动播放
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
    }
        //手指移入时停下来，即清除轮播
    bannert.onmouseenter=function () {
        clearInterval(t);
    }
    //手指离开时继续   再次开启轮播效果
    bannert.onmouseleave=function () {
        t=setInterval(move,3000);
    }
    //点击事件
    next.onclick=function () {
        move();
    };
    prev.onclick=function () {
        n-=2;
        move();
    }
}


{

	let item=document.querySelectorAll(".yiju_content1_item1");
    let box=document.querySelectorAll(".yiju_content1_item1_dingwei");
    item.forEach(function(ele,index){
        ele.onmouseenter=function(){   
            // box[index].style.display="block";
             box[index].style.opacity="1";
        }
        ele.onmouseleave=function(){
            // box[index].style.display="none";
             box[index].style.opacity="0";
        }
    })

}



{
    const prev=document.querySelector(".yiju_content2_dngwei_kuai1");
    const next=document.querySelector(".yiju_content2_dngwei_kuai2");
    const imgs=document.querySelectorAll(".yiju_content2_left_img");
   
    
    imgs.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                // pages[i].classList.remove("active");
            }
            // this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动播放
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            // pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        // pages[n].classList.add("active");
    }
    //点击事件
    next.onclick=function () {
        move();
    };
    prev.onclick=function () {
        n-=2;
        move();
    }
}

{
    let nav=document.querySelectorAll(".xuanzhong");
    let box=document.querySelectorAll(".anli_wanchenganli_hengtiao");  
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){   
            box[index].style.display="block";
        }
        ele.onmouseleave=function(){
            box[index].style.display="none";
        }
    })
}