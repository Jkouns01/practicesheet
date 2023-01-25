//function(e) is an event handling function. 'e' is the object handler (object is made accessible)
(function() {

    // add query selectors for screen, buttons, clear and equal. attach to matching class
    let buttons = document.addQuerySelector(".btn");
    let screen = document.addQuerySelector(".screen");
    let clear = document.addQuerySelector(".btn-clear");
    let equal = document.addEventListener('.btn-equal');

    //retrieve data from numbers that are clicked
    // use forEach(function(button))
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
          })
        });

   // equal(var) has an addEventListener atteched to it so that when it is 'clicked' function(e) is ran
    equal.addEventListener('click', function(e){
        // if screen.value is strictly equal to '', then say 'Please Enter a Value'
        if(screen.value === ''){
            screen.value = 'Please Enter a Value';
           // or else let the answer evaluate the value and then screen.value is the same as the answer var
        } else{
            let answer= eval(screen.value);
            screen.value = answer;
      }
    })
        //clear has an addEventListener attached to it so when 'clicked' it runs this funtion
    clear.addEventListener('click', function(e){
        screen.value= '';
        })

})();