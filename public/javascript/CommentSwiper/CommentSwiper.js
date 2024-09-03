let CommentSwiper = async () => {
    let slider="";
    try {
        let data = await fetch("http://localhost:3001/commentswiperslide");
        let res = await data.json();
        slider =res.map((item)=>{
            return `<div class="swiper-slide"  id="three">
                <div class="flex justify-between items-center w-[100%] h-[34px]">
                  <div class="flex gap-2">
                    <img src="./images/1.png" alt="" class="account">
                  <span class="text-[#868B91] text-[14px]">${item.name}</span>
                  </div><img src="./images/virgol.png" alt="" class="virggo"></div>
                <div class="h-[75px] text-[white] text-[11px] text-wrap text-right">${item.comment}</div>
              </div>`;
        });
        document.querySelector(".swiper-wrapperThree").insertAdjacentHTML("afterbegin", slider.join(""));;


    }catch(error){
        console.log(error.message);
    }
};
export default CommentSwiper;  