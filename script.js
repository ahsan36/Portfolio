const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let curretBtn = document.querySelectorAll('.active-btn');
            curretBtn[0].className = curretBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Section active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;

        if(id){
            //Remove selected from the other btn

            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other section
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();