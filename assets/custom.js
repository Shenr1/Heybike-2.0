// 在页面加载前就要完成像素转变，轮播执行后再转变高度不对
const autoReponsive = (varScale) => {
  const width = document.body.clientWidth || window.innerWidth;
  if(width <= 750){
    const scale = varScale?varScale:width / 750;
    const content = 'width=750, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', viewport-fit=cover';
    $('meta[name="viewport"]').attr("content",content);
  }
}
if (Shopify.designMode) {
  if($("body").width() < 500){
    $("body,html").css("font-size", "13.36px");
  }
}else{autoReponsive()}

$(function(){
  // 动效对象
  const animateFuns = {
    // 动态改变数字方法
    numChange: ($dom ,obj, prop, endValue = 0, duration = 1, fixed = 0, toLocStr = true) =>{
      gsap.to(obj, {
        [prop]: endValue,
        duration: duration,
        onUpdate: function changeNumber() {
          let val = toLocStr ? obj[prop].toFixed(fixed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : obj[prop].toFixed(fixed);
          $dom.text(val);
        }
      });
    }
  }
  // 点击方法对象
  const clickFuns = {
    showMenu: function(){
      var $curA = $(this);
      var $curUl = $curA.next("ul");
      $("[tag-name='main-menu']").not($curA).next("ul").removeClass("active");
      $curUl.toggleClass("active");
      if ($("[tag-name='main-menu']").next("ul.active").length === 0) {
        $("#header_mask").removeClass("!block");
        $("html").removeClass("overflow-hidden");
      } else {
        $("#header_mask").addClass("!block");
        $("html").addClass("overflow-hidden");
      }
    },
    hiddenMenu:function() {
      $("#header").removeClass("active");
      if (!$("#header").hasClass("fadeInDown")) {
        $("#header").removeClass("stickyHeader");
      }
      $("#header_mask").removeClass("!block");
      $("html").removeClass("overflow-hidden");
      $("[tag-name='main-menu'] ~ ul").removeClass("active");
    },
    accordionToggle:function() {
      // $('[tag-name="accordion-content"]').slideUp(500,"linear");
      // $('[tag-name="accordion-arrow"] i:first-child').hidden();
  
      // $(this).parent().find('[tag-name="accordion-content"]').slideToggle(500,"linear");
      // $(this).find('[tag-name="accordion-arrow"] i:first-child').toggle();
  
      var $this = $(this);
      var $content = $this.parent().find('[tag-name="accordion-content"]');
      var $arrows = $('[tag-name="accordion-arrow"] i:first-child');
      var $thisArrows =  $this.find('[tag-name="accordion-arrow"] i:first-child');
    
      $arrows.removeClass('at-minus-r').addClass('at-plus-r');
      if (!$content.is(':visible') ) {
        $thisArrows.removeClass('at-plus-r').addClass('at-minus-r');
      }
  
      $('.accordion [tag-name="accordion-content"]').not($content).slideUp(500, "linear"); // 收起非当前折叠内容
      $content.slideToggle(500, "linear"); // 打开当前折叠内容
  
    },
    localizaToggle:function(){
      $(this).next("div").toggleClass("!block")
    }
  }
  


  // nav触摸出白底
  if($(".template-index").length) {
    const $header = $("#header");
    $header.hover(
      function(){
        if (!$header.hasClass("fadeInDown")) {
          $header.addClass("stickyHeader active");
        }
      },
      function(){
        if(!$("[tag-name='main-menu'] ~ ul").hasClass("active")){
          $header.hasClass("fadeInDown")?
          $header.removeClass("active"):
          $header.removeClass("stickyHeader active");
        }
      }
    );
  }

  // localization国家切换
  $(document).on('click', '#country_select > button',clickFuns.localizaToggle);

  //nav点击出菜单效果
  if($(window).width() > 768){
    $(document).on('click', "[tag-name='main-menu']", clickFuns.showMenu);
    $(document).on('click', '#header_mask', clickFuns.hiddenMenu);
  }
  // 产品页口风琴
  $(document).on('click', '.accordion [tag-name="accordion-header"]', clickFuns.accordionToggle);

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
        const nextEleTop = nextEle.length?nextEle.position().top:scrollPosition+1;
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

    // 移动端头部nav下拉
    $('[tag-name = "product-dropdown"]').on("click", function() {
        $("[tag-name = 'tabs-wrapper']").slideToggle(250,"linear");
        $("[tag-name = 'product-dropdown'] i").toggleClass("rotate-180");
    })
    


  }

  // 数据自增动画
  $("[tag-name='statistic-item'][animation='true']").each(function() {
    const $num = $(this);
    const intervalId = setInterval(() => {
      const iniNum = $num.attr('ini-num') * 1;
      let currentNum = parseInt($num.text().replace(/,/g, "")) * 1;
      const newNum = currentNum + Math.random() + 0.5;
      animateFuns.numChange($num, { var: currentNum }, "var", newNum, 5, 0, true);
      if (iniNum * 1.0001 <= currentNum || iniNum * 1.0001 < 100000) {
        clearInterval(intervalId); 
      }
      currentNum += Math.random() * 0.04 + 0.01; 
    }, 5000);
  });




  







})




 




