const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.sections');
let activeLink = 0;
links.foeEach((Link, i) =>{
    links.addEventListener('click', () =>{
       if(activelink != i){
        links[activelink].classList.remove('active');
        links.classlist.add('active');
        section[activelink].classlist.remove('active');

        setTimeout(() => {
          activeLink = i;
          sections[i].classlist,add('active');
        }, 1000 )
       }
    })
})