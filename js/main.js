let name;
let age;
let gender;
let build;
let hair;
let animal;
let food;
let nextQuestion = 1;
let questionHide = 1;

const updateProfile = function () {
  $('#p1').html(`Name: ${name}`); // update left-side details depending on input
  $('#p2').html(`Age: ${age}`);
  $('#p3').html(`Gender: ${gender}`);
  $('#p4').html(`Build: ${build}`);
  $('#p5').html(`Hair: ${hair}`);
  $('#p6').html(`Favourite Animal: ${animal}`);
  $('#p7').html(`Favourite Food: ${food}`);
}
const profileImage = function () {
  if(age==='50 Years and Older' && build === 'Muscular' && hair === 'Bald' && gender==="Male" ) {
    $('.left').append('<img src="images/bald_50over_muscular.png">');
  }
  if(age==='50 Years and Older' && build === 'Muscular' && hair !=='Bald' && gender==="Male" ) {
    $('.left').append('<img src="images/50up_hair_muscular.jpg">');
  }
  if(age==='50 Years and Older' && build === 'Muscular' && hair !=='Bald' && gender==="Male" ) {
    $('.left').append('<img src="images/50up_hair_muscular.jpg">');
  }

}

$(document).ready(function() {
  //default hidden

  $('#1').hide();
  $('#2').hide();
  $('#3').hide();
  $('#4').hide();
  $('#5').hide();
  $('#6').hide();
  $('#7').hide();

  //on click of next button
  $('#next').on('click', function() {
    $(`#${nextQuestion}`).show();
    nextQuestion++;
  })

  //on click of enter
  $('.enter').on('click', function() {
    //assigns input to designated variables
    name = $('#1 input').val();
    age = $('#q2').find(":selected").text();
    gender = $('#q3').find(":selected").text();
    build = $('#q4').find(":selected").text();
    hair = $('#q5').find(":selected").text();
    animal = $('#6 input').val();
    food = $('#7 input').val();

    $(`#${questionHide}`).hide(); //hides question upon enter
    questionHide++;

    if(nextQuestion === 8) {
      updateProfile();
      profileImage();
    }

  })


})
