
let FreeSwiper = async () => {
    let slider="";
    try {
        let data = await fetch("http://localhost:3001/freeswiperslide");
        let res = await data.json();
        slider =res.map((item)=>{
            return `<div class="swiper-slide gap-1 flex flex-col" id="one">
            <div class="bg-no-repeat bg-cover rounded max-h-[220px] h-[100%]  max-w-[165px] w-[100%] brightness-75" style="background-image: url('${item.image}');" id="free-back">
            <div class="rounded-full text-[10px] flex justify-center items-center gap-1" id="free">  
                <img src="./images/icon-play.svg" alt="" style="width: 16px; height: 16px;">
                رایگان
              </div>
            </div>
                    <p class="text-[whitesmoke] text-[11px] font-[700]">${item.sub}</p>
                  </div>`;
        });
        document.querySelector(".swiper-wrapperOne").insertAdjacentHTML("afterbegin", slider.join(""));


    }catch(error){
        console.log(error.message);
    }

    
};
export default FreeSwiper;  