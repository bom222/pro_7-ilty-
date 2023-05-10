$(document).ready(function () {
  // 모바일메뉴 열기
  $(".btn_menu a").click(function () {
    $(".m_gnb").show();
    $("body").addClass("active");
  });

  // 모바일메뉴 닫기
  $(".m_gnb button").click(function () {
    $(".m_gnb").hide();
    $("body").removeClass("active");
  });

  // 모바일메뉴 메뉴 토글
  $(".m_gnb .menu > ul > li a").click(function () {
    $(this).parent().toggleClass("on").siblings().removeClass("on");
  });

  // 사이드메뉴 토글(+ 버튼)
  $(".side_nav .plus").click(function () {
    $(this).parent().parent().toggleClass("on");
  });

  // 스크롤시 헤더 고정
  $(function () {
    var pageOffsetTop = $(".sub_wrap header").offset().top;
    pageOffsetTop = 0;

    $(window).resize(function () {
      pageOffsetTop = $(".sub_wrap header").offset().top;
      pageOffsetTop = 0;
    });

    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop() > pageOffsetTop + 400;
      $(".sub_wrap header").toggleClass("fix", scrolled);
      $(".area_counseling .snb").toggleClass("fix", scrolled);
      $(".side_nav").toggleClass("fix", scrolled);
    });
  });

  //
  // sub_01
  $(function () {
    var pageOffsetTop = $(".sub_wrap header").offset().top;
    pageOffsetTop = 0;

    $(window).resize(function () {
      pageOffsetTop = $(".sub_wrap header").offset().top;
      pageOffsetTop = 0;
    });

    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop() > pageOffsetTop + 400;
      $(".sub_wrap header").toggleClass("down", scrolled);
    });

    $(".sub_wrap .lnb.mobile .right span").click(function () {
      $(".sub_wrap .lnb.mobile .right ul").toggle();
    });
  });

  //
  // sub_02
  // title_tab 클릭에따른 하위 content변경
  $("#con1").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $("#con1_").addClass("on");
    $("#con2_").removeClass("on");
  });
  $("#con2").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $("#con2_").addClass("on");
    $("#con1_").removeClass("on");
  });

  // // sub_06
  // // slide 이동
  // let slideImgIdx = $(".slide_inner a").length - 1;
  // let i = 0;
  // let i2 = slideImgIdx;
  // let slideWidth = 1200;
  // let thumbsWidth = 220;

  // function prevSlide() {
  //   if (i2 == 0) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 1) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 2) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 3) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 4) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 5) {
  //     i = slideImgIdx - i2 - 1;
  //     i2++;
  //     $(".slide_inner").css({ left: "-" + (7200 - slideWidth * i2 + "px") });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i2 == 6) {
  //     i2 = 0;
  //     i = slideImgIdx - i2;
  //     $(".slide_inner").css({ left: "-7200px" });
  //     $(".thumbs").css({ left: -1320 + thumbsWidth * i2 + "px" });
  //     console.log(i, i2, slideImgIdx);
  //   }
  // }
  // function nextSlide() {
  //   if (i == 0) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-220px" });
  //     // $(".thumbs button").addClass("on").siblings().removeClass("on");
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 1) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-440px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 2) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-660px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 3) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-880px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 4) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-1100px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 5) {
  //     i++;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "-1320px" });
  //     console.log(i, i2, slideImgIdx);
  //   } else if (i == 6) {
  //     i = 0;
  //     i2 = slideImgIdx - i;
  //     $(".slide_inner").css({ left: i * -1200 + "px" });
  //     $(".thumbs").css({ left: "0px" });
  //     console.log(i, i2, slideImgIdx);
  //   }
  // }

  // $(".btn_next").click(function () {
  //   nextSlide();
  // });

  // $(".btn_prev").click(function () {
  //   prevSlide();
  // });
  //

  // 1600 이상
  function slideRight1_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-1200px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" }); // .slide_inner의 left값을 0으로 바꾸기
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-220px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight2_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-2400px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-440px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight3_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-3600px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-660px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft1_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "1200px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "220px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft2_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "2400px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "440px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft3_pc() {
    $(".slide_inner")
      .stop()
      .animate({ left: "3600px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "660px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }

  $(".area_room.pc .btn_prev, .area_room.pc .thumb3").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft1_pc();
    }
  });
  $(".area_room.pc .btn_next, .area_room.pc .thumb4").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight1_pc();
    }
  });
  $(".area_room.pc .thumb1").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft3_pc();
    }
  });
  $(".area_room.pc .thumb2").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft2_pc();
    }
  });
  $(".area_room.pc .thumb5").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight2_pc();
    }
  });
  $(".thumb6").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight3_pc();
    }
  });

  //
  // 1080 이상 1600미만
  function slideRight1_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-950px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" }); // .slide_inner의 left값을 0으로 바꾸기
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-220px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight2_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-1900px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-440px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight3_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-2850px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-660px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft1_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "950px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "220px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft2_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "1900px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "440px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft3_1600() {
    $(".slide_inner")
      .stop()
      .animate({ left: "2850px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "660px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }

  $(".area_room.w1600 .btn_prev, .area_room.w1600 .thumb3").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft1_1600();
    }
  });
  $(".area_room.w1600 .btn_next, .area_room.w1600 .thumb4").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight1_1600();
    }
  });
  $(".area_room.w1600 .thumb1").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft3_1600();
    }
  });
  $(".area_room.w1600 .thumb2").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft2_1600();
    }
  });
  $(".area_room.w1600 .thumb5").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight2_1600();
    }
  });
  $(".area_room.w1600 .thumb6").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight3_1600();
    }
  });

  //
  //  640이상 1080미만
  function slideRight1_1080() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-550px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" }); // .slide_inner의 left값을 0으로 바꾸기
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-170px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight2_1080() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-1100px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-340px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft1_1080() {
    $(".slide_inner")
      .stop()
      .animate({ left: "550px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "170px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft2_1080() {
    $(".slide_inner")
      .stop()
      .animate({ left: "1100px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "340px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }

  $(".area_room.w1080 .btn_prev, .area_room.w1080 .thumb3").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft1_1080();
    }
  });
  $(".area_room.w1080 .btn_next, .area_room.w1080 .thumb4").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight1_1080();
    }
  });
  $(".area_room.w1080 .thumb2").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft2_1080();
    }
  });
  $(".area_room.w1080 .thumb5").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight2_1080();
    }
  });

  //
  //  640미만
  function slideRight1_640() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-400px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" }); // .slide_inner의 left값을 0으로 바꾸기
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-120px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideRight2_640() {
    $(".slide_inner")
      .stop()
      .animate({ left: "-800px" }, 500, function () {
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        firstImg = $(this).children().eq(0);
        $(this).append(firstImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "-240px" }, 500, function () {
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        fImg = $(this).children().eq(0);
        $(this).append(fImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft1_640() {
    $(".slide_inner")
      .stop()
      .animate({ left: "400px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "120px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }
  function slideLeft2_640() {
    $(".slide_inner")
      .stop()
      .animate({ left: "800px" }, 500, function () {
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        lastImg = $(this).children().eq(8);
        $(this).prepend(lastImg);
        $(this).css({ left: "0px" });
      });
    $(".thumbs")
      .stop()
      .animate({ left: "240px" }, 500, function () {
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        lImg = $(this).children().eq(8);
        $(this).prepend(lImg);
        $(this).css({ left: "0px" });
      });
  }

  $(".area_room.w640 .btn_prev, .area_room.w640 .thumb3").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft1_640();
    }
  });
  $(".area_room.w640 .btn_next, .area_room.w640 .thumb4").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight1_640();
    }
  });
  $(".area_room.w640 .thumb2").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideLeft2_640();
    }
  });
  $(".area_room.w640 .thumb5").click(function () {
    if ($(".slide_inner").css("left") == "0px") {
      slideRight2_640();
    }
  });
}); // 제이쿼리 끝
