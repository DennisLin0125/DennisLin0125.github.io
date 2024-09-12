$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小君君一定會願意~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不說暗話！', A);
    });
});

function A() {
    modal('我愛妳！', B);
}

function B() {
    modal('我知道妳在等我這一句話', C);
}

function C() {
    modal('請君君不要拒絕我嘛~', D);
}

function D() {
    modal('拒絕我，不存在的', E);
}

function E() {
    modal('這輩子都不可能讓妳離開我的!!!', F);
}

function F() {
    modal('跟我走吧君君~', G);
}

function G() {
    modal('房子的持有人是妳的名字', H);
}

function H() {
    modal('我會帶妳出去玩', I);
}
 function I() {
    modal('我會買很多東西給妳', J)
}
function J() {
    modal('會好好疼妳', K)
}
function K() {
    modal('會哄妳睡覺', L)
}
function L() {
    modal('會唱歌給妳聽', M)
}
function M() {
    modal('愛妳。麼麼噠！', N)
}

function N() {
    modal('行，我們去戶政事務所登記吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">確定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
