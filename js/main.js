$(document).ready(function() {
    
    let i = 0;

    $('.btn-search').click(function() {
        if (i % 2 == 0) {
            $('#show-tab-search-text').html('<i class="fa-solid fa-x"></i>');
            $('.box-search-head').css("display", "block");
        } else {
            $('#show-tab-search-text').html('<i class="fa-solid fa-magnifying-glass"></i>');
            $('.box-search-head').css("display", "none");
        }
        i++;

    })
    $('.get-text-recommend').mouseover(function() {

        $('#txtKeywordSearchHome').attr('placeholder', $(this).text());
    })
    $('.nav-tab-item').click(function(){
        
        $('.nav-tab-item').removeClass("nav-tab-active");
        $(this).addClass("nav-tab-active");
    })
    $('.active-car').click(function(){
        
        $('.active-car').removeClass("tab-btn-active");
        $(this).addClass("tab-btn-active");
    })
    $('.tab-active-car-1').click(function(){
        
        $('.tab-active-car-1').removeClass("tab-btn-active");
        $(this).addClass("tab-btn-active");
    })
    
    // swiper
    
    
    $('.nav-change-select').click(function(){
       
       $('.nav-change-select').removeClass("active-change-select");
       $(this).addClass("active-change-select");
       if($(this).children().hasClass("swap-img-col")){
            $(this).children(".swap-img-col").attr("src","images/listcar/ico-col-active.png");
            $('.nav-change-select').children(".swap-img-list").attr("src","images/listcar/ico-list-none.png") ;
       }
       else{
            $(this).children(".swap-img-list").attr("src","images/listcar/ico-list-active.png") ;
            $('.nav-change-select').children(".swap-img-col").attr("src","images/listcar/ico-col-none.png")  
       }
   })
      //var swiper = new Swiper(".mySwiper-top", {});
    let mn2 = 0;
    $('.drop-menu-lv-2').click(function(){
        if(mn2 ==0 )
        { 
            $(this).parent().children('.sub-menu-lv-2').removeClass("d-none");
            $(this).children('.fa-solid').removeClass("fa-chevron-down");
            $(this).children('.fa-solid').addClass("fa-angle-up");
            mn2 = 1;
        }
        else{
            $(this).parent().children('.sub-menu-lv-2').addClass("d-none");
            $(this).children('.fa-solid').removeClass("fa-angle-up");
            $(this).children('.fa-solid').addClass("fa-chevron-down");
            mn2 = 0;
        }
    })
    $('.drop-menu-lv-3').click(function(){
        if(mn2 ==0 )
        { 
            $(this).parent().children('.sub-menu-lv-3').removeClass("d-none");
            $(this).children('.fa-solid').removeClass("fa-chevron-down");
            $(this).children('.fa-solid').addClass("fa-angle-up");
            mn2 = 1;
        }
        else{
            $(this).parent().children('.sub-menu-lv-3').addClass("d-none");
            $(this).children('.fa-solid').removeClass("fa-angle-up");
            $(this).children('.fa-solid').addClass("fa-chevron-down");
            mn2 = 0;
        }
    })
    $('.nav-link-ntc').click(function(){
        
        $('.nav-link-ntc').removeClass("active-ntc");
        $(this).addClass("active-ntc");
    })
    let checkShowMoreCol = 0;
    $('.show-more-btn').click(function(){
        if(checkShowMoreCol ==0)
        {
            $('.col-show-more').css('display','block');
            $(this).children('.fa-solid').removeClass('fa-angle-down');
            $(this).children('.fa-solid').addClass('fa-angle-up');
            checkShowMoreCol = 1;
        }
        else{
            $('.col-show-more').css('display','none');
            $(this).children('.fa-solid').removeClass('fa-angle-up');
            $(this).children('.fa-solid').addClass('fa-angle-down');
            checkShowMoreCol = 0;
        }
    })
    // swiper
    // var swiper = new Swiper(".SwiperOurPartNers", {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //       },
    //       768: {
    //         slidesPerView: 3,
    //         spaceBetween: 40,
    //       },    
    //       1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //       },
    //     },
    //   });
    $('.hide-show').hide();
    $('.btn-show-more-content').click(function(){
        $('.hide-show').show();
        $('.idot').hide();
        $('.btn-show-more-content').hide();
    });
    $('.btn-show-less-content').click(function(){
        $('.hide-show').hide();
        $('.btn-show-more-content').show();
        $('.idot').hide();
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween:30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    })
    
   
});