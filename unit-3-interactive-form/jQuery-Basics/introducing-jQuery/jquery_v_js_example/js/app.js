const box = document.querySelector('.box'); 
// box.style.display = 'none'; 

// replace with $ sign
jQuery('.box').hide();
// is functionally identical to the above
$('.box').hide(); 
$('.box').show(); 

box.addEventListener('click', function() {
    alert('You clicked me!');
}); 

// $('.box').click(function(){
//     alert('You clicked me with jQuery');
// });