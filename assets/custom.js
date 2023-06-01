$(function(){

  $(document).on('click', '.accordion [tag-name="accordion-header"]', function(e) {
    $(this).parent().find('[tag-name="accordion-content"]').slideToggle(500,"linear");
    $(this).find('[tag-name="accordion-arrow"] svg:last-child').fadeToggle(500,"linear");
  });

  // 轮播内嵌模式改写 todo 封装 没用了
  // const iniFlickity = (index) => {
  //   console.log("iniFlickity");
  //   const flickityEles = $("[hb-flickity]");
  //   flickityEles.each(function(i) {

  //     // 如果没传说明全部都初始化
  //     // 如果传了就判断是否和当前的i相同,相同才初始化
  //     if(index != null && index != i){ return }
  //     const optionObj = $.parseJSON($(this).attr('hb-flickity'));
  //     if ($(this).flickity) {
  //       $(this).on( 'ready.flickity', (item) => { 
  //         console.log("ready");
  //         console.log($(this).height());
  //         if($(this).height() < 100){ 
  //           console.log("re"); 
  //           iniFlickity(i) 
  //         }
  //       });
  //       $(this).flickity(optionObj);
  //     } else {
  //       setTimeout(iniFlickity, 300);
  //     }
  //   });
  // }
  // iniFlickity()




  // 移动端轮播处理
  if ( matchMedia('screen and (max-width: 768px)').matches ) {
    $('[section-name = "store-features"] .store-info').flickity( { prevNextButtons: true, pageDots: false } );
  }

  if($(".template-index").length){

    $("#header").mouseenter(function(){
      if(!$(this).hasClass("fadeInDown")){
        $(this).addClass("stickyHeader !absolute !top-auto")
      }
    });

    $("#header").mouseleave(function(){
      if(!$(this).hasClass("fadeInDown")){
        $(this).removeClass("stickyHeader !absolute !top-auto")
      }
    });



  
  }


  // 产品页获取所有锚点链接
  if($(".template-product").length){

    const navLinks = $('[section-name = "product-tabs-nav"] [tag-name = "tabs-wrapper"] a');
    // 产品页的锚点跳转
    $('[section-name = "product-tabs-nav"] [tag-name = "tabs-wrapper"] a').on("click", function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var offset = $(target).offset().top + 1;
      $("html, body").animate({
          scrollTop: offset
        }, 1500);
    })

    $(window).on("scroll", function() {
      const scrollPosition = $(window).scrollTop();
      for (var i = 0; i < navLinks.length; i++) {
        const ele = $(navLinks.eq(i).attr('href'));
        const nextEle = $(navLinks.eq(i+1).attr('href'));
        const eleTop = ele.position().top;
        const nextEleTop = $(navLinks.eq(i+1)).length?nextEle.position().top:scrollPosition+1;
        if ( eleTop <= scrollPosition && nextEleTop > scrollPosition) {
          navLinks.removeClass('active');
          navLinks.eq(i).addClass('active');
        }
      }
    });


    // todo 需求不完整，规格怎么选，确定后掉api
    $('[section-name = "product-tabs-nav"] [tag-name = "atc-btn"]').on("click", function(event) {
        $(".product-action [type='submit']").click();
    })
    


  }





})




 




