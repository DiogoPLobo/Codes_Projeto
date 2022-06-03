document.addEventListener('DOMContentLoaded', function() {

    main = document.querySelector('.msg-panel');
    botao = document.querySelector('.botao-enviar'); 
    adi = document.querySelector('input[placeholder="Digite sua mensagem"]') 

    
    t = 5
    botao.addEventListener('click', function(event){
        // criando meus elementos
        section = document.createElement('section')
        section.classList.add('msg-usuario')

        div = document.createElement('div')
        div.classList.add ('msg-titulo-invertida') 

        div2 = document.createElement('div')
        div2.classList.add('bolha-usuario')
        div2.style.color = '#8AD4FF' 

        //h2 = document.createElement('h2')
        h3 = document.createElement('h3')
        p = document.createElement('p')
        
        // adicionando seus conteúdos
        //h2.innerHTML = 'Moderador'

       
        h3.innerHTML = '01/06 - 14:0'+ t;
        t+=1

        p.innerHTML = adi.innerHTML
        p.style.color = '#FFFFFF'

        // apendando os filhos
        div.appendChild(h2)
        div.appendChild(h3)

        div2.appendChild(p)

        section.appendChild(div)
        section.appendChild(div2)
       
        main.appendChild(section)
        
        event.preventDefault()
        
        

        

    })


})