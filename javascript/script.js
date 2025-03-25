
const myObserver = new IntersectionObserver((entry) =>{
    entry.forEach((eleme) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
});

const elements = document.querySelectorAll(".hedd");

elements.forEach((element) => {
    myObserver.observe(element)
});
