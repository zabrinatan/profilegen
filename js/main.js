let name;
let age;
let gender;
let build;
let hair;
let animal;
let food;
let nextQuestion = 1;
let questionHide = 0;
let defaultHidden = 1;

let imageSearch;

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
  //51 years and Older images
  if(age==='51 Years and Older' && build === 'Muscular' && hair === 'Light' && gender==="Male" ) {
    $('.left').prepend('<img src="images/50up_grey_man.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Muscular' && hair === 'Light' && gender==="Female" ) {
    $('.left').prepend('<img src="images/50up_grey_woman.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Muscular' && hair ==='Dark' && gender==="Female" ) {
    $('.left').prepend('<img src="images/50up_woman_dark.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Muscular' && hair ==='Dark' && gender==="Male" ) {
    $('.left').prepend('<img src="images/50up_dark_muscular.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Average' && hair === 'Light' && gender==="Male" ) {
    $('.left').prepend('<img src="images/old_normal_male.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Average' && hair === 'Light' && gender==="Female" ) {
    $('.left').prepend('<img src="images/old_female_light.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Average' && hair === 'Dark' && gender==="Female" ) {
    $('.left').prepend('<img src="images/old_dark_woman.jpg">');
  }
  if(age==='51 Years and Older' && build === 'Average' && hair === 'Dark' && gender==="Male" ) {
    $('.left').prepend('<img src="images/old_dark_man_average.jpg">');
}
if(age==='51 Years and Older' && build === 'Overweight' && hair === 'Light' && gender==="Male" ) {
  $('.left').prepend('<img src="images/fat_old_light_man.jpg">');
}
if(age==='51 Years and Older' && build === 'Overweight' && hair === 'Light' && gender==="Female" ) {
  $('.left').prepend('<img src="images/fat_old_woman_light.jpeg">');
}
if(age==='51 Years and Older' && build === 'Overweight' && hair === 'Dark' && gender==="Female" ) {
  $('.left').prepend('<img src="images/fat_old_woman_dark.jpeg">');
}
if(age==='51 Years and Older' && build === 'Overweight' && hair === 'Dark' && gender==="Male" ) {
  $('.left').prepend('<img src="images/fat_old_dark_man.jpg">');
}
//21-50 Years old Images
if(age==='21-50 Years' && build === 'Muscular' && hair === 'Light' && gender==="Male" ) {
  $('.left').prepend('<img src="images/light_21_muscular.jpg">');
}
if(age==='21-50 Years' && build === 'Muscular' && hair === 'Light' && gender==="Female" ) {
  $('.left').prepend('<img src="images/light_woman_muscular_21.jpg">');
}
if(age==='21-50 Years' && build === 'Muscular' && hair ==='Dark' && gender==="Female" ) {
  $('.left').prepend('<img src="images/dark_woman_muscular_21.jpg">');
}
if(age==='21-50 Years' && build === 'Muscular' && hair ==='Dark' && gender==="Male" ) {
  $('.left').prepend('<img src="images/dark_muscular_21.jpg">');
}
if(age==='21-50 Years' && build === 'Average' && hair === 'Light' && gender==="Male" ) {
  $('.left').prepend('<img src="images/normal_light_man_21.jpg">');
}
if(age==='21-50 Years' && build === 'Average' && hair === 'Light' && gender==="Female" ) {
  $('.left').prepend('<img src="images/normal_light_woman_21.jpeg">');
}
if(age==='21-50 Years' && build === 'Average' && hair === 'Dark' && gender==="Female" ) {
  $('.left').prepend('<img src="images/normal_dark_21_woman.jpg">');
}
if(age==='21-50 Years' && build === 'Average' && hair === 'Dark' && gender==="Male" ) {
  $('.left').prepend('<img src="images/normal_dark_man_21.jpg">');
}
if(age==='21-50 Years' && build === 'Overweight' && hair === 'Light' && gender==="Male" ) {
$('.left').prepend('<img src="images/overweight_light_man_21.jpeg">');
}
if(age==='21-50 Years' && build === 'Overweight' && hair === 'Light' && gender==="Female" ) {
$('.left').prepend('<img src="images/overweight_light_woman_21.png">');
}
if(age==='21-50 Years' && build === 'Overweight' && hair === 'Dark' && gender==="Female" ) {
$('.left').prepend('<img src="images/overweight_dark_woman_21.png">');
}
if(age==='21-50 Years' && build === 'Overweight' && hair === 'Dark' && gender==="Male" ) {
$('.left').prepend('<img src="images/overweight_dark_male.jpg">');
}

}

// const searchComplete = function () {
// if (imageSearch.results && imageSearch.results.length > 0) {
//   const imageLocation = $('.left');
//   const results = imageSearch.results;
//           for (var i = 1; i < 2; i++) {
//             $('.left').prepend(results[i]);
//           }
// }
// }
//
// const onLoad = function () {
//    imageSearch = new google.search.ImageSearch();
//    imageSearch.setSearchCompleteCallback(this, searchComplete, null);
//    imageSearch.execute(`${age} ${gender} ${build} ${hair}`);
//    google.search.Search.getBranding('branding');
//
// }

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
  $('#start').on('click', function() {
      $('#0').hide(500);
      $('#1').show(1000);
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

    $(`#${nextQuestion}`).show(500);
    nextQuestion++;


    if(nextQuestion === 9) {
      updateProfile();
      profileImage();
      // google.setOnLoadCallback(OnLoad);
    }



  })

//DETECTS KEYPRESS WHEN ENTERING FROM INPUT. PROBLEM: DONT KNOW HOW TO DO FOR DROP DOWN.
  // $(document).on("keypress", "input", function(e){
  //        if(e.which == 13){
  //          name = $('#1 input').val();
  //          age = $('#q2').find(":selected").text();
  //          gender = $('#q3').find(":selected").text();
  //          build = $('#q4').find(":selected").text();
  //          hair = $('#q5').find(":selected").text();
  //          animal = $('#6 input').val();
  //          food = $('#7 input').val();
  //          $(`#${questionHide}`).hide(); //hides question upon enter
  //          questionHide++;
  //
  //          $(`#${nextQuestion}`).show(500);
  //          nextQuestion++;
  //
  //
  //          if(nextQuestion === 9) {
  //            updateProfile();
  //            profileImage();
  //
  //          }
  //        }
  //
  //
  //
  //    });

})
