/**
 * Created by Administrator on 2019/1/24.
 */
$(function () {
    $('.hd p').click(function () {
        var index = $('.hd p').index(this)
        $('.hd p').removeClass('active')
        $(this).addClass('active')
        $('.bd .aboutadu').removeClass('active')
        $('.bd .aboutadu:eq('+index+')').addClass('active')
    })
})