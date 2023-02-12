let theEnd = 0;
navbar = document.getElementById('navigation');
    window.addEventListener('scroll',function(){
        var scrollTop = window.pageXOffset || document.
        documentElement.scrollTop;
        if(scrollTop > theEnd){
            navigation.style.top = '-70px';
        }else{
            navigation.style.top = '0';
        }
        theEnd =scrollTop;
    })