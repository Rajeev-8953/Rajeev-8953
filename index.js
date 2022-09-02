const getHams = document.querySelectorAll('.ham-icon')
const closeBtn = document.querySelectorAll('.close-icon')

getHams.forEach((item)=>{
item.addEventListener("click",()=>{
    document.querySelector(".ham-menu").classList.add("show_menu")
})
})


closeBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        document.querySelector(".ham-menu").classList.remove("show_menu")
    })
    })

