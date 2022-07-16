

// function moveToAboutMe(){
//     document.getElementById('about-section').scrollIntoView();
// }

function moveToAboutMe(id){
    //alert(id.id)
    document.getElementById(id.id).scrollIntoView({
        behavior: 'smooth'
    });
}



