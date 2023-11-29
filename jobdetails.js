
const overView = document.getElementById("overView-header")
const application = document.getElementById("application-header")
const overViewSection = document.getElementById("overview-details")
const applicationSection =document.getElementById("form-details")
overView.addEventListener("click",()=>{
    overViewSection.classList.remove('hide')
    applicationSection.classList.add('hide')
})
application.addEventListener("click",()=>{
    overViewSection.classList.add('hide')
    applicationSection.classList.remove('hide')
})