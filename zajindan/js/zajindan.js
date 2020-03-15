$(function () {
  // 定义抽奖次数
  var Jh_I = 1;
  // 把次数输出到页面
  $("#Jh_I").text(Jh_I);
  // 定义抽奖信息
  var XX = [{
      // 标题
      Tit: '中奖了',
      // 信息
      Xx: '恭喜您获得300积分~',
    },
    {
      // 标题
      Tit: '中奖了',
      // 信息
      Xx: '恭喜您获得800积分~',
    },
    {
      // 标题
      Tit: '中奖了',
      // 信息
      Xx: '恭喜您获得50元优惠券',
    },
    {
      // 标题
      Tit: '中奖了',
      // 信息
      Xx: '恭喜您获得100元优惠券',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    },
    {
      // 标题
      Tit: '未中奖',
      // 信息
      Xx: '调整下姿势再来一次吧',
    }
  ];
  // 设置变量防止用户多次点击
  var JDD_Flag = true;
  // 金蛋蛋点击事件
  $(".JDD").click(function () {
    // 如果为true执行点击事件
    if (JDD_Flag && Jh_I >= 1) {
      // 执行后变为false,该事件禁止触发
      JDD_Flag = false;
      // 页面禁止滚动
      $("body").css("overflow", "hidden");
      // 获得随机数
      var SJX = Math.floor(Math.random() * XX.length);
      // 添加抽奖信息
      // 信息标题
      $(".Xx_Tt").text(XX[SJX].Tit);
      // 信息信息
      $(".Xx_Xx").text(XX[SJX].Xx);
      setTimeout(function () {
        // 更改金蛋蛋图片
        $(".JDD").addClass("JDDS");
        // 点击次数-1
        $("#Jh_I").text(Jh_I -= 1);
        // 显示抽奖信息
        $(".Cj_Ctt").css('transform', 'scale(1.2)');
        // 如果中奖了下方打印信息
        if (XX[SJX].Tit == "中奖了") {
          // 更改下方按钮文字
          $(".Xx_Btn").html('<a id="Z_Sre">去分享</a>');
          //判断是否在前面加0
          function getNow(s) {
            return s < 10 ? '0' + s : s;
          }
          // 获得当前时间
          var Z_myDate = new Date;
          var Z_year = Z_myDate.getFullYear();
          var Z_mon = Z_myDate.getMonth() + 1;
          var Z_date = Z_myDate.getDate();
          var Z_now = Z_year + '.' + getNow(Z_mon) + "." + getNow(Z_date);
          // 打印
          $(".ZJXX").prepend('<div class="XX_Item">' +
            XX[SJX].Xx + '<time>' + Z_now + '</time>' +
            '</div>')
        } else {
          // 底部按钮
          $(".Xx_Btn").text("再来一次");
        }
      }, 400);
      // 更改锤子为砸开动画
      $(".CZ").css('animation', 'CZ_Z 0.5s');
    } else if (Jh_I == 0) {
      // 更改锤子为砸开动画
      $(".CZ").css('animation', 'CZ_Z 0.5s');
      // 信息标题
      $(".Xx_Tt").text("没有砸开");
      // 信息信息
      $(".Xx_Xx").text("次数用完了完成任务再来吧");
      // 底部按钮
      $(".Xx_Btn").text('去做任务');
      setTimeout(function () {
        $(".Cj_Ctt").css('transform', 'scale(1.2)');
      }, 400)
    }
  })
  // 金蛋蛋按钮点击事件
  function GB() {
    // 更改锤子为未砸动画
    $(".CZ").css('animation', 'CZ_WZ 1.8s linear infinite');
    // 更改金蛋蛋图片
    $(".JDD").removeClass("JDDS");
    // 隐藏抽奖信息
    $(".Cj_Ctt").css('transform', 'scale(0)');
    // 更改变量为true,恢复金蛋蛋点击
    JDD_Flag = true;
    // 页面恢复滚动
    $("body").css("overflow", "auto");
  }
  // 关闭按钮点击事件
  $(".Xx_Gb").click(function () {
    GB()
  })
  // 再来一次按钮点击事件
  $(".Xx_Btn").click(function () {
    GB()
  })
  // 公告滚动效果
  // 复制第一个用户信息
  $('.G_Te_Ctt').append($('#Z_G_Te').clone());
  // 创建变量记录当前滚动的位置
  var G_Te = 1
  // 开启定时器3s一次向上滚动
  setInterval(function () {
    // 每次上移-9vw
    $(".G_Te_Ctt").css("top", '-9' * G_Te + 'vw');
    // 判断到了末尾更改部分样式
    if (G_Te == $('.Z_G_Te').length) {
      $(".G_Te_Ctt").css("transition", '0s');
      G_Te = 1;
      $(".G_Te_Ctt").css("top", '0vw');
    }
    // 否则继续滚动 
    else {
      G_Te += 1
      $(".G_Te_Ctt").css("transition", '1.5s');
    }
  }, 3000);
  // 活动规则/中奖信息按钮点击事件
  function C_Btn(TC) {
    // 显示弹窗
    $(TC).css("transform", "scale(1)")
    // 禁止页面滚动
    $("body").css("overflow", "hidden");
  }
  // 活动规则/中奖信息部分关闭按钮点击事件
  function C_Gb(Y_TC) {
    // 隐藏弹窗
    $(Y_TC).css("transform", "scale(0)")
    // 阻止事件冒泡
    event.stopPropagation();
    // 恢复页面滚动
    $("body").css("overflow", "auto");
  }
  // 活动规则点击事件
  $(".C_Btn_L").click(function () {
    C_Btn(".C_L_Ctt");
  })
  // 活动规则关闭按钮点击事件
  $("#Yc_Gb").click(function () {
    C_Gb(".C_L_Ctt");
  })
  // 中奖信息点击事件
  $(".C_Btn_R").click(function () {
    C_Btn(".Zj_Xx_Ctt");
  })
  // 中奖信息关闭按钮点击事件
  $("#Zj_Gb").click(function () {
    C_Gb(".Zj_Xx_Ctt");
  })
  // 去完成按钮点击事件
  $(".Rw_An_Qw").click(function () {
    // 判断是否完成任务
    var Rw = true;
    if (Rw) {
      // 更改按钮为领取样式
      $(this).addClass("Rw_An_Lq");
      // 更改文字为领取
      $(this).text("领取");
    }
  })
  // 领取按钮点击事件(一次)
  $(".Rw_An_Lq").one("click", function () {
    // 添加已完成样式
    $(this).addClass("Rw_An_Wc");
    // 更改文字为已领取
    $(this).text("已领取");
    // 增加砸金蛋次数
    Jh_I += parseInt($(this).attr('data-R'));
    $("#Jh_I").text(Jh_I);
  })
  // 判断是否为新用户,显示弹窗
  // 清除
  if (localStorage.getItem('isNew') == null) {
    $(".Z_New").css("transform", "scale(1)");
    $("body").css("overflow", "hidden");
  }
  // 关注公众号弹窗按钮点击事件
  $(".Z_New_Btn").click(function () {
    // 隐藏关注弹窗
    $(".Z_New").css("transform", "scale(0)");
    $("body").css("overflow", "auto");
    localStorage.setItem('isNew', true);
  })
})