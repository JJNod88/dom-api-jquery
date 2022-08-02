/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$("a");

// The long version of the function
jQuery("a");

// Get all elements that contain a class of `card_image`
$(".card_image");

// Get all elements that contain an ID of `logoNav`
$("#logoNav");

// Get all anchors that are direct children of paragraphs
$("p>a");

// Get all anchor elements that are descendants of paragraphs
$("p a");

// Get all list item elements that are direct children of unordered lists
$("ul>li");

// Get all list item elements that are descendants of unordered lists
$("ul li");

// Get the first anchor element from the DOM
$("a:first");

// Get the last anchor element from the DOM
$("a:last");

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");




 /** ALL PREVIOUS CODING FOR TIPS

$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 


//EVENTS-------

//CI version 

$('p').click(function(){
	$('p').css('color', 'red');
});

$('h2').hover(function(){
	$('h2').css('background', 'lightblue');
});

$('.card-panel').mouseenter(function() {
    $('body').css("background-color", "black");
})

$('.card-panel').mouseleave(function() {
    $('body').css("background-color", "#e1e2e2");
})


// CHAINING

$('button').mouseenter(function() {
     $('button').removeClass("make-red").addClass("make-border")
 });
 
 $('button').mouseleave(function() {
     $('button').removeClass("make-border").addClass("make-red")
 });


// My version 

$('#container').on("click", function() {
     $('p').css("color", "red");
 });
 
 $('h2').hover(function() {
     $('h2').addClass("hover-class");
     }, function() {
     $('h2').removeClass("hover-class");
     });
     
 $('.card-panel').mouseenter(function() {
     $('body').css("background-color", "black");
 })
 
 $('.card-panel').mouseleave(function() {
     $('body').css("background-color", "#e1e2e2");
 })


// EFFECTS -----------

 $('#card-panel-1').click(function(){
     $('#card-panel-1').hide('slow');
 });
 
 $('#card-panel-2').click(function(){
     $('#card-panel-2').hide('medium');
 });
 
 $('#card-panel-3').click(function(){
     $('#card-panel-3').hide('fast');
 })
 
 $('#card-panel-4').click(function(){
     $('#card-panel-4').hide('3000');
 })
 

 * $('document').ready(function() {
 * })
 * 
 *$('header').css('background-color', 'red');
 * $('header').html("<h1>New Header</h1>");
 * $('header').text('Change text');
 * $('header').append('<p>New P text</p>);
 
 
 *
 */