const hiddenEl = document.querySelectorAll('.hidden')

const scrollObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
},{})
hiddenEl.forEach((el)=>{
    scrollObserver.observe(el)
})

//nav bar 
document.getElementById('brg').addEventListener('click', (e)=>{
    document.querySelector("ul.mobile").classList.toggle('active')
    document.getElementById('brg').classList.toggle('active')
})

//dark mode
const darkTgl = document.getElementById('drk')

darkTgl.addEventListener('click', (e)=>{
    const dark = localStorage.getItem("state")

    if(!dark){
        localStorage.setItem("state", "dark")
        darkTgl.classList.add("dark")
        document.querySelector('body').classList.add('darkmode')
    }else{
         localStorage.removeItem("state")
        darkTgl.classList.remove("dark")
        document.querySelector('body').classList.remove('darkmode')
    }
})
document.addEventListener('DOMContentLoaded', ()=>{
  const dark = localStorage.getItem("state")

    if(!dark){
        return
    }else{
        darkTgl.classList.add("dark")
        document.querySelector('body').classList.add('darkmode')
}
})