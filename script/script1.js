/*광고*/

var si;

function auto() {
    //        var idx=$('.adbox .ad .auAD').index();  //이미지
    var selCircle = $('.adbtn li.auto').index(); //동그라미

    selCircle++; //0-6
    if (selCircle > $('.adbtnul li').length - 1) {
        selCircle = 0
    }
    //        console.log(selCircle)
    sel(selCircle);

}

function sel(getnum) {
    /*동그라미버튼*/
    $('.adbtn ul li.auto').removeClass('auto');
    $('.adbtn ul li').eq(getnum).addClass('auto');

    /*이미지*/
    $('.adbox .ad li').stop().fadeOut(500)
    $('.adbox .ad li').eq(getnum).fadeIn(500)
}


/*광고 E*/


$(document).ready(function () {


    /*상위 알림*/
    $('.topalertX').on('click', function () {
        $('.topinfo').slideUp(200)
    })

    /*상위 알림E*/


    /*언어더보기*/
    $('.langnote').on('click', function () {
        $('.langulbox').toggle();

        $('.langulbox .lang li').each(function () {
            $(this).click(function () {
                var langtxt = $(this).text();

                $(this).parents('.langulbox').siblings('.langnote').find('a').text(langtxt)
                //                console.log($(this).css('backgroundPosition'))
                $(this).parents('.langulbox').siblings('.langnote').find('a').css('backgroundPosition', ($(this).css('backgroundPosition')))

                $(this).parents('.langulbox').hide()
            })
        })
    })
    /*언어더보기E*/


    /*gnb*/
    $('.gnbdepbox  li').on({
        mouseenter: function () {
            $('.gnb2wrap').show();
        },
        mouseleave: function () {
            $('.gnb2wrap').hide();
        }
    })
    $('.gnb2wrap').on({
        mouseenter: function () {
            $('.gnb2wrap').stop().show();
        },
        mouseleave: function () {
            $('.gnb2wrap').stop().hide();
        }
    })

    /*gnb E*/



    /*where can i see penguine?*/
    $('.where').click(function (e) {
        e.preventDefault();
        $('.overlook ul').toggle();
    })

    $('.overlook ul li a').on('click', function (e) {
        e.preventDefault();
        //        console.log($(this).text())
        $('.overlook .where a').text($(this).text())
        $('.overlook .where a').css({
            'font-size': '16px'
        })
        $('.overlook ul').hide();
    })

    $('.overlook ul li:eq(4) a').on('click', function (e) {
        e.preventDefault();
        $('.overlook .where a').text($(this).text())
        $('.overlook .where a').css({
            'font-size': '11px'
        })
        $('.overlook ul').hide();
    })
    $('.overlook ul li:eq(2) a').on('click', function (e) {
        e.preventDefault();
        $('.overlook .where a').text($(this).text())
        $('.overlook .where a').css({
            'font-size': '11px'
        })
        $('.overlook ul').hide();
    })
    $('.overlook ul li:eq(0) a').on('click', function (e) {
        e.preventDefault();
        $('.overlook .where a').text($(this).text())
        $('.overlook .where a').css({
            'font-size': '13px'
        })
        $('.overlook ul').hide();
    })

    /*where can i see penguine? E*/


    /*광고*/
    si = setInterval(auto, 2500)

    $('.adbtnul li').mouseenter(function () {
        clearInterval(si)
        var givnum = $(this).index()
        if ($(this).hasClass('auto') == false) {
            sel(givnum);
        }
    })
    $('.adbtnul li').mouseleave(function () {
        clearInterval(si)
        si = setInterval(auto, 2500)
    })
    /*광고*/





    /*information*/

    var log = [];
    log[0] = ['1019 Ventnor Rd,<br/> Summerlands VIC 3922'] //펭귄
    log[1] = ['1320 Ventnor Road, Summerlands Victoria, 3922'] //남극
    log[2] = ['11-13 The Esplanade, The Jetty Triangle, Cowes VIC 3922'] // 에코보트
    log[3] = ['1820 Phillip Island Tourist Rd, Cowes VIC 3922'] //코알라
    log[4] = ['246 Samuel Amess Drive, Churchill Island, Newhaven 3925'] //처칠



    $('.information ul li:eq(5)').show();
    $('.location .loc_infobox').hide();

    $('.Penguin').click(function (e) {
        e.preventDefault();
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(4)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '100px',
            left: '310px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[0] + '</a></span>')

        console.log($('.texbox a p').index())
    })
    $('.Antarctic').click(function (e) {
        e.preventDefault();
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(3)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '130px',
            left: '110px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[1] + '</a></span>')
    })

    $('.EcoBoat').click(function (e) {
        e.preventDefault();
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(2)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '40px',
            left: '190px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[2] + '</a></span>')
    })
    $('.Koala').click(function (e) {
        e.preventDefault();
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(1)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '140px',
            left: '220px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[3] + '</a></span>')
    })

    $('.Churchill').click(function (e) {
        e.preventDefault();
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(0)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '200px',
            left: '290px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[4] + '</a></span>')
    })



    /*지도아이콘들*/
    $('.pen').click(function () {
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(4)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '100px',
            left: '310px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[0] + '</a></span>')
    })
    $('.wave').click(function () {
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(3)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '130px',
            left: '110px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[1] + '</a></span>')
    })
    $('.seal').click(function () {
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(2)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '40px',
            left: '190px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[2] + '</a></span>')
    })
    $('.koal').click(function () {
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(1)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '140px',
            left: '220px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[3] + '</a></span>')
    })
    $('.cow').click(function () {
        $('.information ul li').fadeOut(400)
        $('.information ul li:eq(0)').fadeIn(400)

        $('.location .loc_infobox').css({
            top: '200px',
            left: '290px'
        })
        $('.location .loc_infobox').hide().fadeIn(400);
        $('.location .loc_infobox .loc').remove()
        $('.location .loc_infobox').append('<span class=\"loc\"><a href=\"#\">' + log[4] + '</a></span>')
    })



    // calculate left hours for penguine
    var leftTime = HourCalculate();
//    arrayyed[0]
    $('.hour span:eq(0)').text(leftTime[0])
    $('.hour span:eq(1)').text(' ' + leftTime[1])

    
});



function HourCalculate() {
    var date = new Date();

    var hour = 19,
        minute = 0,
        nowHours = date.getHours(),
        nowMinutes = date.getMinutes(),
        leftHours,
        leftTimes;


    if (nowHours > 12) {
        hour += 24;
        leftHours = hour - nowHours;
        leftTimes = minuteCalculate(leftHours, nowMinutes);
//        console.log(leftTimes);
        return leftTimes;

    } else {
        leftHours = hour - nowHours;
        leftTimes = minuteCalculate(leftHours, nowMinutes);
//        console.log(leftTimes);
        return leftTimes;
    }


}

function minuteCalculate(leftHours, nowMinutes) {
    var leftMinutes,
        leftTimeArr;

    if (nowMinutes > 0) {
        leftHours -= 1
        leftMinutes = 60 - nowMinutes;
        leftTimeArr = [leftHours, leftMinutes]
        return leftTimeArr;
    } else {
        leftMinutes = 0;
        leftTimeArr = [leftHours, leftMinutes]
        return leftTimeArr;
    }
}
