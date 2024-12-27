
    const nav = document.querySelector('#nav');
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');

    abrir.addEventListener("click", ()=> {
        nav.classList.add("visible");
    })
   
    cerrar.addEventListener("click", ()=> {
        nav.classList.remove("visible");
    })

    const ocultos = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("reveal")
            }
        })
    },
    {rootMargin: "10px",

    }

    )

    ocultos.forEach((oculto)=>{
        observer.observe(oculto)
    })



    
    