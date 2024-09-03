let karmaniSwiper = async () => {
    let slider="";
    try {
        let data = await fetch("http://localhost:3001/karmaniSwiper");
        let res = await data.json();
        console.log(res);
        slider =res.map((item)=>{
            return `<div class="swiper-slide w-[307px] flex flex-col gap-1" id="Four">

                <div class="flex justify-center items-center  bg-no-repeat bg-cover rounded h-[176px] w-[100%] blury" style="background-image: url('${item.image}')";>
                  <div class="w-[48px] h-[48px] rounded-full flex justify-center items-center backdrop-brightness-50">
                    <img src="./images/icon-lock_fill.png" alt="" style="width: 24px; height: 24px;">
                  </div>
                </div>
                <p class="text-[whitesmoke] text-[11px] font-[700]">${item.sub}</p>

                    </div>`;
        });
        document.querySelector(".swiper-wrapperFour").insertAdjacentHTML("afterbegin", slider.join(""));


    }catch(error){
        console.log(error.message);
    }
};
export default karmaniSwiper;  
