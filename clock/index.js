var mday=[31,28,31,30,31,30,31,31,30,31,30, 31];
var date = new Date();
var m = Number(date.getMonth()) + 1
var day = date.getDate();
var hours = date.getHours();
var mu = date.getMinutes();
var s = date.getSeconds();
var rotateDeg = [0, 0,0,0,0,0];
var rotateS = [360/12, 360/(mday[m]-1), 360/24, 360/60, 360/60];
var startDate = [m, day, hours, mu, s];
var createMonth = function(){
    var mStr = ""
    var r = 360/12;
    for(var i = 0; i < 12; i++){
        mStr+='<div class="month" >'+(i+1)+'月</div>'
    }
    $(".mpage").append(mStr);
    var aniMonth = function(){
        for(var i = 0; i < 12; i++){
            $(".month").eq(i).css("transform", "rotate("+rotateS[0]*i+"deg)");  
        }
    }
    setTimeout(function(){ aniMonth(); }, 100);
}
createMonth();


var createDate = function(){
    var mStr = ""
    var r = 360/(mday[m]-1);
    for(var i = 0; i < (mday[m]-1); i++){
        mStr+='<div class="date" >'+(i+1)+'日</div>'  //style="transform:rotate('+r*i+'deg)"
    }
    $(".dpage").append(mStr);
    var aniDate = function(){
        for(var i = 0; i < (mday[m]-1); i++){
            $(".date").eq(i).css("transform", "rotate("+rotateS[1]*i+"deg)");  
        }
    }
    setTimeout(function(){   aniDate(); }, 1100);
}
createDate();




var createHours = function(){
    var mStr = ""
    var r = 360/24;
    for(var i = 0; i < 24; i++){
        mStr+='<div class="hour" >'+(i)+'时</div>'
    }
    $(".hpage").append(mStr);
    var aniHours = function(){
        for(var i = 0; i < 24; i++){
            $(".hour").eq(i).css("transform", "rotate("+rotateS[2]*i+"deg)");  
        }
    }
    setTimeout(function(){  aniHours(); }, 2100);
}
createHours();

var createMiun = function(){
    var mStr = ""
    var r = 360/60;
    for(var i = 0; i < 60; i++){
        mStr+='<div class="min" >'+(i)+'分</div>' //style="transform:rotate('+r*i+'deg)"
    }
    $(".minpage").append(mStr);
    var aniHours = function(){
        for(var i = 0; i < 60; i++){
            $(".min").eq(i).css("transform", "rotate("+rotateS[3]*i+"deg)");  
        }
    }
    setTimeout(function(){  aniHours(); }, 3100);
}
createMiun();

var createSec = function(){
    var mStr = ""
    var r = 360/60;
    for(var i = 0; i < 60; i++){
        mStr+='<div class="sec" >'+(i)+'s</div>'
    }
    $(".spage").append(mStr);
    var aniHours = function(){
        for(var i = 0; i < 60; i++){
            $(".sec").eq(i).css("transform", "rotate("+rotateS[4]*i+"deg)");  
        }
    }
    setTimeout(function(){  aniHours(); }, 4100);
}
createSec();
setTimeout(function(){  startAuto(); }, 5100);

var startAuto = function(){
    rotateDeg[0] = -(m-1) * rotateS[0];
    rotateDeg[1] = -(day-1) * rotateS[1];
    rotateDeg[2] = -hours * rotateS[2];
    rotateDeg[3] = -mu * rotateS[3];
    rotateDeg[4] = -s * rotateS[4];
    for(var i = 0; i < 5; i++){
        $(".page").eq(i).css("transform", "rotate("+rotateDeg[i]+"deg)");
        $(".sec").eq(startDate[4]%60).css("color", "#fff");
        $(".min").eq(startDate[3]%60).css("color", "#fff");
        $(".hour").eq(startDate[2]%24).css("color", "#fff");
        $(".date").eq(startDate[1]%(mday[m]-1)-1).css("color", "#fff");
        $(".month").eq((startDate[0]-1)%12).css("color", "#fff");
    }
    $(".br").css("transform", "translateX(0%)")
    setInterval(function(){
        rotateDeg[4] = rotateDeg[4]-rotateS[4];  //秒
        $(".sec").eq(startDate[4]%60).css("color", "#333");
        startDate[4] +=1;
        $(".sec").eq(startDate[4]%60).css("color", "#fff");
        $(".page").eq(4).css("transform", "rotate("+rotateDeg[4]+"deg)");
        if(rotateDeg[4]%360 == 0 || startDate[4]%60 == 0){   //秒进分
            rotateDeg[3]=rotateDeg[3]-rotateS[3];
            $(".min").eq(startDate[3]%60).css("color", "#333");
            startDate[3] +=1;
            $(".min").eq(startDate[3]%60).css("color", "#fff");
            $(".page").eq(3).css("transform", "rotate("+rotateDeg[3]+"deg)");
            if(rotateDeg[3]%360 == 0 || startDate[3]%60 == 0){   //分进时
                rotateDeg[2]=rotateDeg[2]-rotateS[2];
                $(".hour").eq(startDate[2]%24).css("color", "#333");
                startDate[2] +=1;
                $(".hour").eq(startDate[2]%24).css("color", "#fff");
                $(".page").eq(2).css("transform", "rotate("+rotateDeg[2]+"deg)");
                if(rotateDeg[2]%360 == 0 || startDate[2]%24 == 0){ //时进日
                    rotateDeg[1]=rotateDeg[1]-rotateS[1];
                    $(".date").eq(startDate[1]%(mday[m]-1)).css("color", "#333");
                    startDate[1] +=1;
                    $(".date").eq(startDate[1]%(mday[m]-1)).css("color", "#333");
                    $(".page").eq(1).css("transform", "rotate("+rotateDeg[1]+"deg)");
                    if(rotateDeg[1]%360 == 0 || startDate[1]%(mday[m]-1) == 0){ //日进月
                        rotateDeg[0]=rotateDeg[0]-rotateS[0];
                        $(".month").eq(startDate[0]%12).css("color", "#333");
                        startDate[0] +=1;
                        $(".month").eq(startDate[0]%12).css("color", "#fff");
                        $(".page").eq(0).css("transform", "rotate("+rotateDeg[0]+"deg)");
                    }

                }
            }
        }
    }, 1000)
}
