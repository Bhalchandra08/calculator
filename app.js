(function(){
    let outscreen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            //console.log(value)
            outscreen.value += value;
        })
    });

    equal.addEventListener('click',function(e){
        if(outscreen.value === ''){
            outscreen.value = "";
        }else{
            let answer = eval(outscreen.value);
            outscreen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        outscreen.value = "";
    })


})();