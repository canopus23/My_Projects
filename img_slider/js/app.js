// immediate invoked function expression

(function() {

    const pictures = [ "contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3", "contBcg-4"];
    //select both left and right button. Add event listeners
    const buttonLeft = document.querySelector('.btn-left')
    const buttonsRight = document.querySelector('.btn-right')
    const imageDIV = document.querySelector('.img-container')

    let counter = 0

    buttonLeft.addEventListener('click', function(){
        counter--
        if(counter < 0){
            counter = pictures.length -1
        }

        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    })

    buttonsRight.addEventListener('click', function(){
        counter++
        if(counter > pictures.length -1){
            counter = 0 
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    })

  })();