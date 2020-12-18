/*-----------------------------------------onclick home,electronics,sports,clothing-----------------------------*/
function data1_(){
    window.location = "page3.htm";
    localStorage.setItem("username",1);
}
function data2_(){
    window.location = "page3.htm";
    localStorage.setItem("username",2);
}
function data3_(){
    window.location = "page3.htm";
    localStorage.setItem("username",3);
}
function data4_(){
    window.location = "page3.htm";
    localStorage.setItem("username",4);
}
function home(){
    window.location = "page2.htm";
}
/*-------------------------------------------------content of Home page-----------------------------------------------*/
$(document).ready(function(){
     var txt = "";
     $.getJSON("data_web1.json", function(data){
            $.each(data,function(key,value){
                txt+="<div class='carte text-center' id="+value.id+ '@' + value.userId +" onclick=change1(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
            });
     });
     $.getJSON("data_web2.json", function(data){
            $.each(data,function(key,value){
                txt+="<div class='carte text-center' id="+value.id+ '@' + value.userId +" onclick=change2(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
            });
     });
     $.getJSON("data_web3.json", function(data){
            $.each(data,function(key,value){
                txt+="<div class='carte text-center' id="+value.id+ '@' + value.userId +" onclick=change3(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
            });
     });
    $.getJSON("data_web4.json", function(data){
            $.each(data,function(key,value){
                txt+="<div class='carte text-center' id="+value.id+ '@' + value.userId +" onclick=change4(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
            });
            $("#add").append(txt);
     });
});
/*-----------------------------------------------------onclick functions of items of home page------------------------------------*/
function change1(idd,cost){
    localStorage.setItem("username",1);
    $(document).ready(function(){
        $(".carte").click(function(){
            window.location="page4.htm";
            localStorage.setItem("name",idd);
            localStorage.setItem("cost",cost);
        });
    });
}
function change2(idd,cost){
    localStorage.setItem("username",2);
    $(document).ready(function(){
        $(".carte").click(function(){
            window.location="page4.htm";
            localStorage.setItem("name",idd);
            localStorage.setItem("cost",cost);
        });
    });
}
function change3(idd,cost){
    localStorage.setItem("username",3);
    $(document).ready(function(){
        $(".carte").click(function(){
            window.location="page4.htm";
            localStorage.setItem("name",idd);
            localStorage.setItem("cost",cost);
        });
    });
}
function change4(idd,cost){
    localStorage.setItem("username",4);
    $(document).ready(function(){
        $(".carte").click(function(){
            window.location="page4.htm";
            localStorage.setItem("name",idd);
            localStorage.setItem("cost",cost);
        });
    });
}
/*-----------------------------------------------After using price filter onclick functions of items--------------------------------------------*/
function change11(idd,cost){
    localStorage.setItem("username",1);
    localStorage.setItem("name",idd);
    localStorage.setItem("cost",cost);
    window.location="page4.htm";
}
function change22(idd,cost){
    localStorage.setItem("username",2);
    localStorage.setItem("name",idd);
    localStorage.setItem("cost",cost);
    window.location="page4.htm";
}
function change33(idd,cost){
    localStorage.setItem("username",3);
    localStorage.setItem("name",idd);
    localStorage.setItem("cost",cost);
    window.location="page4.htm";
}
function change44(idd,cost){
    localStorage.setItem("username",4);
    localStorage.setItem("name",idd);
    localStorage.setItem("cost",cost);
    window.location="page4.htm";
}
/*--------------------------------------------price filter---------------------------------------------------*/
function filterp1(){
    var zz = $("#add1").html();
    var zzz = $("#demo1").html();
    $(document).ready(function(){
        $.getJSON("data_web1.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 500){
                    var taxt = "";
                    taxt+="<div class='cartee text-center' id="+value.id+" onclick=change11(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(zz == ""){
                        $("#add1").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 1){
                        if(zzz == ""){
                            $("#demo1").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web2.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 500){
                    var taxt = "";
                    taxt+="<div class='cartee text-center' id="+value.id+" onclick=change22(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(zz == ""){
                        $("#add1").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 2){
                        if(zzz == ""){
                            $("#demo1").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web3.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 500){
                    var taxt="";
                    taxt+="<div class='cartee text-center' id="+value.id+" onclick=change33(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(zz == ""){
                        $("#add1").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 3){
                        if(zzz == ""){
                            $("#demo1").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web4.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 500){
                    var taxt = "";
                    taxt+="<div class='cartee text-center' id="+value.id+" onclick=change44(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(zz == ""){
                        $("#add1").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 4){
                        if(zzz == ""){
                            $("#demo1").append(taxt);
                        }
                    }
                }
            });
        });
        $(".carte").hide();
        $(".cartei").hide();
        $(".carten").hide();
        $(".cartex").hide();
        $("#add3").text("");
        $("#add4").text("");
        $("#add2").text("");
        $("#demo2").text("");
        $("#demo3").text("");
        $("#demo4").text("");
    });
}
function filterp2(){
    var yy = $("#add2").html();
    var yyy = $("#demo2").html();
    $(document).ready(function(){
        $.getJSON("data_web1.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 1000 && parseInt(value.cost) > 500){
                    var twt = "";
                    twt+="<div class='cartei text-center' id="+value.id+" onclick=change11(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(yy == ""){
                        $("#add2").append(twt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 1){
                        if(yyy == ""){
                            $("#demo2").append(twt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web2.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 1000 && parseInt(value.cost) > 500){
                    var twt = "";
                    twt+="<div class='cartei text-center' id="+value.id+" onclick=change22(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(yy == ""){
                        $("#add2").append(twt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 2){
                        if(yyy == ""){
                            $("#demo2").append(twt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web3.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 1000 && parseInt(value.cost) > 500){
                    var twt = "";
                    twt+="<div class='cartei text-center' id="+value.id+" onclick=change33(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(yy == ""){
                        $("#add2").append(twt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 3){
                        if(yyy == ""){
                            $("#demo2").append(twt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web4.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 1000 && parseInt(value.cost) > 500){
                    var twt = "";
                    twt+="<div class='cartei text-center' id="+value.id+" onclick=change44(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(yy == ""){
                        $("#add2").append(twt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 4){
                        if(yyy == ""){
                            $("#demo2").append(twt);
                        }
                    }
                }
            });
        });
        $(".carte").hide();
        $(".cartee").hide();
        $(".carten").hide();
        $(".cartex").hide();
        $("#add1").text("");
        $("#add3").text("");
        $("#add4").text("");
        $("#demo1").text("");
        $("#demo3").text("");
        $("#demo4").text("");
    });
}
function filterp3(){
    var xx = $("#add3").html();
    var xxx = $("#demo3").html();
    $(document).ready(function(){
        $.getJSON("data_web1.json", function(data){
            $.each(data,function(key,value){
                if( parseInt(value.cost) < 3000 && parseInt(value.cost) > 1000){
                    var taxt = "";
                    taxt+="<div class='carten text-center' id="+value.id+" onclick=change11(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(xx == ""){
                        $("#add3").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 1){
                        if(xxx == ""){
                            $("#demo3").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web2.json", function(data){
            $.each(data,function(key,value){
                if( parseInt(value.cost) < 3000 && parseInt(value.cost) > 1000){
                    var taxt = "";
                    taxt+="<div class='carten text-center' id="+value.id+" onclick=change22(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(xx == ""){
                        $("#add3").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 2){
                        if(xxx == ""){
                            $("#demo3").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web3.json", function(data){
            $.each(data,function(key,value){
                if( parseInt(value.cost) < 3000 && parseInt(value.cost) > 1000){
                    var taxt = "";
                    taxt+="<div class='carten text-center' id="+value.id+" onclick=change33(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(xx == ""){
                        $("#add3").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 3){
                        if(xxx == ""){
                            $("#demo3").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web4.json", function(data){
            $.each(data,function(key,value){
                if(parseInt(value.cost) < 3000 && parseInt(value.cost) > 1000){
                    var taxt = "";
                    taxt+="<div class='carten text-center' id="+value.id+" onclick=change44(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(xx == ""){
                        $("#add3").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 4){
                        if(xxx == ""){
                            $("#demo3").append(taxt);
                        }
                    }
                }
            });
        });
        $(".carte").hide();
        $(".cartee").hide();
        $(".cartei").hide();
        $(".cartex").hide();
        $("#add1").text("");
        $("#add2").text("");
        $("#add4").text("");
        $("#demo4").text("");
        $("#demo1").text("");
        $("#demo2").text("");
    });
}
function filterp4(){
    var ww = $("#add4").html();
    var www = $("#demo4").html();
    $(document).ready(function(){
        $.getJSON("data_web1.json", function(data){
            $.each(data,function(key,value){
                if(3000 < parseInt(value.cost)){
                    var taxt = "";
                    taxt+="<div class='cartex text-center' id="+value.id+" onclick=change11(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(ww == ""){
                        $("#add4").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 1){
                        if(www == ""){
                            $("#demo4").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web2.json", function(data){
            $.each(data,function(key,value){
                if(3000 < parseInt(value.cost)){
                    var taxt = "";
                    taxt+="<div class='cartex text-center' id="+value.id+" onclick=change22(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(ww == ""){
                        $("#add4").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 2){
                        if(www == ""){
                            $("#demo4").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web3.json", function(data){
            $.each(data,function(key,value){
                if(3000 < parseInt(value.cost)){
                    var taxt = "";
                    taxt+="<div class='cartex text-center' id="+value.id+" onclick=change33(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(ww == ""){
                        $("#add4").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 3){
                        if(www == ""){
                            $("#demo4").append(taxt);
                        }
                    }
                }
            });
        });
        $.getJSON("data_web4.json", function(data){
            $.each(data,function(key,value){
                if(3000 < parseInt(value.cost)){
                    var taxt = "";
                    taxt+="<div class='cartex text-center' id="+value.id+" onclick=change44(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div>";
                    if(ww == ""){
                        $("#add4").append(taxt);
                    }
                    if (parseInt(localStorage.getItem("username")) == 4){
                        if(www == ""){
                            $("#demo4").append(taxt);
                        }
                    }
                }
            });
        });
        $(".carte").hide();
        $(".cartee").hide();
        $(".cartei").hide();
        $(".carten").hide();
        $("#add1").text("");
        $("#add2").text("");
        $("#add3").text("");
        $("#demo1").text("");
        $("#demo2").text("");
        $("#demo3").text("");
    });
}
/*----------------------------------------------------end---------------------------------------------------------------*/
    
      