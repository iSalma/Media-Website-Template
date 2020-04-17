//js

//SIDE NAV BAR//////////////////////////////////
let navWidth = $(".navMenu").outerWidth(true);
let drawerWidth = $(".drawer").outerWidth(true);
let sumWidth = navWidth + drawerWidth;

$("#options-container").css("left", `-${navWidth}px`);
$("#home").css("padding-left", `${drawerWidth}px`);

$("#toggleNav").click(function () {
    $(".fa-align-justify").toggleClass("fa-times");

    if ($("#options-container").css("left") == "0px") {
        $("#options-container").animate({ left: `-${navWidth}px` }, 500);
        $(".navMenu li").animate({ opacity: "0", marginTop: "500px" });
        $("#home").animate({paddingLeft: `${drawerWidth}px`},500);
    }
    else {
        $("#options-container").animate({ left: `0px` }, 500);
        $(".navMenu .li1").animate({ opacity: "1", marginTop: "8px" }, 1200);
        $(".navMenu .li2").animate({ opacity: "1", marginTop: "8px" }, 1300);
        $(".navMenu .li3").animate({ opacity: "1", marginTop: "8px" }, 1400);
        $(".navMenu .li4").animate({ opacity: "1", marginTop: "8px" }, 1500);
        $(".navMenu .li5").animate({ opacity: "1", marginTop: "8px" }, 1600);
        $(".navMenu .li6").animate({ opacity: "1", marginTop: "8px" }, 1700);
        $("#home").animate({paddingLeft: `${sumWidth}px`},500);
    }

})
//END SIDE NAV BAR///////////////////////////////////////////////

//BUTTON UP//////////////////////////////////////////////
let searchBarOffset = $("#services").offset().top;

$(window).scroll(function () {

    let winScroll = $(window).scrollTop();

    if (winScroll > searchBarOffset) {

        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function () {

    $("html, body").animate({ scrollTop: '0' }, 1000);
})
//END BUTTON UP//////////////////////////////////////////////

//SLIDER/////////////////////////////////////////////////////////
// $('#slider').on('slide.bs.carousel', function(e) {

//     if(e.relatedTarget.id == 'firstSlide'){
//         var imgSrc = $("#slider #firstSlide img").attr('src');
//         $("#home header").css('background-image', `url(${imgSrc})`);
//     } else if(e.relatedTarget.id == 'secondSlide'){
//         var imgSrc = $("#slider #secondSlide img").attr('src');
//         $("#home header").css('background-image', `url(${imgSrc})`);
//     } else if(e.relatedTarget.id == 'thirdSlide'){
//         var imgSrc = $("#slider #thirdSlide img").attr('src');
//         // $("#home header").animate({backgroundImage: `url(${imgSrc}`}, 500);
//         $("#home header").css('background-image', `url(${imgSrc})`);
//     }
// })



//END SLIDER//////////////////////////////////////////////////////


/*Getting request values*/
var firstName=document.getElementById("firstName");
var secondName=document.getElementById("secondName");
var phone=document.getElementById("phone");
var country=document.getElementById("country");
var email=document.getElementById("email");
var subject=document.getElementById("subject");
var message=document.getElementById("exampleFormControlTextarea1");
/* */
/*Validation*/
var firstNameValid=false;
var secondNameValid=false;
var phoneValid=false;
var countryValid=false;
var emailValid=false;
/*********************/

/*Validate firstName*/
firstName.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z]{3,8}$/;
    var nameP=firstName.value;
    if(nameP=="")
    {
        /*Still empty*/
        firstNameValid=false;
        $("#ErrorFName").css("display","none");
    }
    else if((regEx.test(nameP)==true))
    {
        /*No error*/
        firstNameValid=true;
        $("#ErrorFName").css("display","none");
    }
    else
    {
        /*error*/
        firstNameValid=false;
        $("#ErrorFName").css("display","block");
    }
});
/*********************/

/*Validate secondName*/
secondName.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z]{3,8}$/;
    var nameP=secondName.value;
    if(nameP=="")
    {
        /*Still empty*/
        secondNameValid=false;
        $("#ErrorLName").css("display","none");
    }
    else if((regEx.test(nameP)==true))
    {
        /*No error*/
        secondNameValid=true;
        $("#ErrorLName").css("display","none");
    }
    else
    {
        /*error*/
        secondNameValid=false;
        $("#ErrorLName").css("display","block");
    }
});
/*********************/

/*Validate phone*/
phone.addEventListener("keyup",function()
{
    var regEx = /^[0-9]{8}$/;
    var phoneP=phone.value;
    if(phoneP=="")
    {   /*Still empty*/
        phoneValid=false;
        $("#ErrorPhone").css("display","none");
    }
    else if((regEx.test(phoneP)==true))
    {   /*No error*/
        phoneValid=true;
        $("#ErrorPhone").css("display","none");
    }
    else
    {   /*error*/
        phoneValid=false;
        $("#ErrorPhone").css("display","block");
    }
});
/*********************/

/*Validate email*/
email.addEventListener("keyup",function()
{
    var regEx = /^[a-zA-Z].{5,19}@(gmail|yahoo).com$/;
    var emailP=email.value;
    if(emailP=="")
    {
        /*Still empty*/
        emailValid=false;
        $("#ErrorEmail").css("display","none");
    }
    else if((regEx.test(emailP)==true))
    {   
        /*No error*/
        emailValid=true;
        $("#ErrorEmail").css("display","none");
    }
    else
    {
        /*error*/
        emailValid=false;
        $("#ErrorEmail").css("display","block");
    }
});
/*********************/

/*Validate message*/
message.addEventListener("keyup",function()
{
    var regEx = /^.{10,1000}$/;
    var messageP=message.value;
    if(messageP=="")
    {
        /*Still empty*/
        messageValid=false;
        $("#ErrorMsg").css("display","none");
    }
    else if((regEx.test(messageP)==true))
    {   
        /*No error*/
        messageValid=true;
        $("#ErrorMsg").css("display","none");
    }
    else
    {
        /*error*/
        messageValid=false;
        $("#ErrorMsg").css("display","block");
    }
});
/*********************/


/*Validate subject*/
subject.addEventListener("change",function()
{
    if(subject.value=='Subject')
    {
        $("#ErrorSubject").css("display","block");
    }
   else
    {
        $("#ErrorSubject").css("display","none");
    }
}
)
/*********************/

/*Validate Country*/
country.addEventListener("change",function()
{
    if(country.value=='Country')
    {
        $("#ErrorCountry").css("display","block");
    }
   else
    {
        $("#ErrorCountry").css("display","none");
    }
}
)
/*********************/


/*********************/

$('#submitRequest').click(function()
{
    if(subject.value=='Subject')
    {
        $("#ErrorSubject").css("display","block");
    }
    if(country.value=='Country')
    {
        $("#ErrorCountry").css("display","block");
    }
}
)
;/*********************/

