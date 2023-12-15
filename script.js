
let  end= document.getElementById('close')
    end.addEventListener('click',closing)
    
let h4 = document.getElementById('h4')
let btn = document.getElementById('btn')
    btn.addEventListener('click',change)

function change(){
    h4.innerText = "Modal Content"
    btn.style.display = 'none'
    end.style.display = 'block'
    document.querySelector('.container').style.backgroundColor = 'rgba(142,195,233,0.5)'

}


function closing()
{
    h4.innerText = "Modal Project"
    btn.style.display = 'block'
    end.style.display = 'none'
    
    document.querySelector('.container').style.backgroundColor = 'transparent'

}

