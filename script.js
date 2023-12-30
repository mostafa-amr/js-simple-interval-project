var interval
var child
var i
var klam = 'your message will be displayed charachter by charachter:) <br /> few seconds and this window will terminate                   '
var a =[]
a= klam.split('')
// console.log(a[0])
function newwid(){
    i=0
child=window.open('childoo.html','','width=700,height =300');
startInterval()

}


function startInterval(){
    interval = setInterval(function(){
        wala();
        i++
            
    },100)    
            

    
}

function wala(){
    if(i==a.length){
        clearInterval(interval);
        child.close()
    }
    else{
        child.document.write(a[i])
    }

}
