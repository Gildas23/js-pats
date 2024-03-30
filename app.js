"use strict";

const UICtrl = (function(){

    const changeText = function(message){
        const element = document.querySelector('h1');
        element.textContent = message;
        console.log(this,' : ',message)
    }

    return {
        callChangeText:changeText
        
    }
})()


UICtrl.callChangeText.bind(this,"haha haha i am a mini god",1,2,3);

