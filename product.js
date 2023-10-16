// function toggleFeatures(button) {
   
//     // Find the parent section of the clicked button
//     const section = button.closest('.contents-section');
  
//     // Find the features container within the parent section
//     const featuresContainer = section.querySelector('.features-main-container');
//     const showMoreButton = section.querySelector('.show-more');
//     const showLessButtonContainer = section.querySelector('.text-center-showless')
//     const showLessButton = section.querySelector('.show-less');
  
//     // Check the current state of the featuresContainer and toggle accordingly
//     if (featuresContainer.style.display === 'none' || featuresContainer.style.display === '') {
//       featuresContainer.style.display = 'block';
//       showLessButton.style.display = 'block';
//       showLessButtonContainer.style.display='block'
//       showLessButtonContainer.classList.add(' .text-center-showless');
//     } else {
//       featuresContainer.style.display = 'none';
//       showLessButton.style.display = 'none';
//       showLessButtonContainer.classList.remove('.removeBtncontainer');
//       showLessButtonContainer.classList.add('.removeBtncontainer')
//       showMoreButton.style.display = 'block';
//     }
//   }

const showmoreFirstBtn = document.getElementById('section_one_showmore_btn')
const showmoreSectBtn = document.getElementById('section_two_showmore_btn')
const showmoreThirdtBtn = document.getElementById('section_three_showmore_btn')
const showmoreFourthBtn = document.getElementById('section_four_showmore_btn')
const showmoreFifthBtn = document.getElementById('section_five_showmore_btn')
const showmoreSixthBtn = document.getElementById('section_six_showmore_btn')
const showmoreSeventhBtn = document.getElementById('section_seven_showmore_btn')
const showmoreEighthBtn = document.getElementById('section_eight_showmore_btn')

const showMoreBtnDivOne = document.getElementById('section_one_showmorebtn_container')
const showMoreBtnDivSec = document.getElementById('section_two_showmorebtn_container')
const showMoreBtnDivThree = document.getElementById('section_three_showmorebtn_container')
const showMoreBtnDivFour = document.getElementById('section_four_showmorebtn_container')
const showMoreBtnDivFive = document.getElementById('section_five_showmorebtn_container')
const showMoreBtnDivSix = document.getElementById('section_six_showmorebtn_container')
const showMoreBtnDivSeven = document.getElementById('section_seven_showmorebtn_container')
const showMoreBtnDivEight = document.getElementById('section_eight_showmorebtn_container')

const featuresSectionOne = document.getElementById("section_one_feature_conatiner")
const featuresSectionTwo = document.getElementById("section_two_feature_conatiner")
const featuresSectionThree = document.getElementById("section_three_feature_conatiner")
const featuresSectionFour = document.getElementById("section_four_feature_conatiner")
const featuresSectionFive = document.getElementById("section_five_feature_conatiner")
const featuresSectionSix = document.getElementById("section_six_feature_conatiner")
const featuresSectionSeven = document.getElementById("section_seven_feature_conatiner")
const featuresSectionEight = document.getElementById("section_eight_feature_conatiner")


const showlessBtnFirst = document.getElementById('section_one_showless_btn')
const showlessBtnTwo = document.getElementById('section_two_showless_btn')
const showlessBtnThird = document.getElementById('section_three_showless_btn')
const showlessBtnFour = document.getElementById('section_four_showless_btn')
const showlessBtnFive = document.getElementById('section_five_showless_btn')
const showlessBtnSix = document.getElementById('section_six_showless_btn')
const showlessBtnSeven = document.getElementById('section_seven_showless_btn')
const showlessBtnEight = document.getElementById('section_eight_showless_btn')

const showlessBtnDivOne = document.getElementById('section_one_showless_btn_container')
const showlessBtnDivTwo = document.getElementById('section_two_showless_btn_container')
const showlessBtnDivThree = document.getElementById('section_three_showless_btn_container')
const showlessBtnDivFour = document.getElementById('section_four_showless_btn_container')
const showlessBtnDivFive = document.getElementById('section_five_showless_btn_container')
const showlessBtnDivSix = document.getElementById('section_six_showless_btn_container')
const showlessBtnDivSeven = document.getElementById('section_seven_showless_btn_container')
const showlessBtnDivEight = document.getElementById('section_eight_showless_btn_container')


 showmoreFirstBtn.addEventListener('click',()=>{
    featuresSectionOne.classList.remove('displaynone');
    showlessBtnDivOne.classList.remove('displaynone');
    showMoreBtnDivOne.classList.add('displaynone')
 })
 

 showmoreSectBtn.addEventListener('click',()=>{
    featuresSectionTwo.classList.remove('displaynone');
    showlessBtnDivTwo.classList.remove('displaynone');
    showMoreBtnDivSec.classList.add('displaynone')
 })

 showmoreThirdtBtn.addEventListener('click',()=>{
    featuresSectionThree.classList.remove('displaynone');
    showlessBtnDivThree.classList.remove('displaynone')
    showMoreBtnDivThree.classList.add('displaynone')
 })
 showmoreFourthBtn.addEventListener("click",()=>{
    featuresSectionFour.classList.remove('displaynone');
    showlessBtnDivFour.classList.remove('displaynone');
    showMoreBtnDivFour.classList.add('displaynone')
 })
 showmoreFifthBtn.addEventListener("click",()=>{
    featuresSectionFive.classList.remove('displaynone');
    showlessBtnDivFive.classList.remove('displaynone')
    showMoreBtnDivFive.classList.add('displaynone')
 })
 showmoreSixthBtn.addEventListener("click",()=>{
    featuresSectionSix.classList.remove('displaynone');
    showlessBtnDivSix.classList.remove('displaynone')
    showMoreBtnDivSix.classList.add('displaynone')
 })

 showmoreSeventhBtn.addEventListener("click",()=>{
    featuresSectionSeven.classList.remove('displaynone');
    showlessBtnDivSeven.classList.remove('displaynone')
    showMoreBtnDivSeven.classList.add('displaynone')
 })
 showmoreEighthBtn.addEventListener("click",()=>{
    featuresSectionEight.classList.remove('displaynone');
    showlessBtnDivEight.classList.remove('displaynone')
    showMoreBtnDivEight.classList.add('displaynone')
 })
console.log(showlessBtnFirst)

// click on show less button

 showlessBtnFirst.addEventListener('click',()=>{
    
    showMoreBtnDivOne.classList.remove('displaynone')
    featuresSectionOne.classList.add('displaynone');
    showlessBtnDivOne.classList.add('displaynone')
 })

 showlessBtnTwo.addEventListener('click',()=>{
    showMoreBtnDivSec.classList.remove('displaynone')
    featuresSectionTwo.classList.add('displaynone');
    showlessBtnDivTwo.classList.add('displaynone')
 })

 showlessBtnThird.addEventListener('click',()=>{
    showMoreBtnDivThree.classList.remove('displaynone')
    featuresSectionThree.classList.add('displaynone');
    showlessBtnDivThree.classList.add('displaynone')
 })

 showlessBtnFour.addEventListener('click',()=>{
    showMoreBtnDivFour.classList.remove('displaynone')
    featuresSectionFour.classList.add('displaynone');
    showlessBtnDivFour.classList.add('displaynone')
 })

 showlessBtnFive.addEventListener('click',()=>{
    showMoreBtnDivFive.classList.remove('displaynone')
    featuresSectionFive.classList.add('displaynone');
    showlessBtnDivFive.classList.add('displaynone')
 })

 showlessBtnSix.addEventListener('click',()=>{
    showMoreBtnDivSix.classList.remove('displaynone')
    featuresSectionSix.classList.add('displaynone');
    showlessBtnDivSix.classList.add('displaynone')
 })

 showlessBtnSeven.addEventListener('click',()=>{
    showMoreBtnDivSeven.classList.remove('displaynone')
    featuresSectionSeven.classList.add('displaynone');
    showlessBtnDivSeven.classList.add('displaynone')
 })

 showlessBtnEight.addEventListener('click',()=>{
    showMoreBtnDivEight.classList.remove('displaynone')
    featuresSectionEight.classList.add('displaynone');
    showlessBtnDivEight.classList.add('displaynone')
 })
 
 document.addEventListener("DOMContentLoaded", function() {
   const hamburger = document.querySelector(".hamburger");
   const navList = document.querySelector(".navItems ul");

   hamburger.addEventListener("click", function() {
       navList.classList.toggle("active");
   });
});