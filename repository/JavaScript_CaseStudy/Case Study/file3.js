/*----------------------------------------details of page 2 and page 3-----------------------------------------------*/
if (parseInt(localStorage.getItem("username")) == 1){
           $(document).ready(function(){
                $.getJSON("data_web1.json", function(data){
                    var txt = "";
                    var txet = "";
                    var brnd = "";
                    $.each(data, function(key, value){
                        txt+="<div class="+value.company+"><div class='carte text-center' id="+value.id+" onclick=change(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div></div>";
                        if(value.id === parseInt(localStorage.getItem("name"))){
                           txet="<div class='col'><div class='row'><div class='col-sm-12 col-lg-6 col-xl-6'><img class='image' src=" + value.url + "></div><div class='col-sm-12 col-lg-6 col-xl-6 value'><p><b>" + value.name + "<br>" + value.rupee + "</b></p><form><label>Quantity</label><input type='number' min='1'><button type='button' class='submit' onclick='add()'>Add</button></form><button type='btn' class='btn btn-primary mt-5 yep' onclick=myfunction()><u>Add to cart</u></button></div></div></div>";
                        }
                        return;
                    });
                    brnd+="<span class='list-group-item listt' onclick='brand1()'>apple</span><span class='list-group-item listt' onclick='brand2()'>dell</span><span class='list-group-item listt' onclick='brand3()'>Sony</span><span class='list-group-item listt' onclick='brand4()'>hp</span>";
                    $("#demo").append(txt);
                    $("#app").append(txet);
                    $("#brand").append(brnd);
                });
            });
}
else if (parseInt(localStorage.getItem("username")) == 2){
           $(document).ready(function(){
                $.getJSON("data_web2.json", function(data){
                    var txt = "";
                    var txet= "";
                    var brnd = "";
                    $.each(data, function(key, value){
                        txt+="<div class="+value.company+"><div class='carte text-center' id="+value.id+" onclick=change(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div></div>";
                        if(value.id === parseInt(localStorage.getItem("name"))){
                           txet="<div class='col'><div class='row'><div class='col-sm-12 col-lg-6 col-xl-6'><img class='image' src=" + value.url + "></div><div class='col-sm-12 col-lg-6 col-xl-6 value'><p><b>" + value.name + "<br>" + value.rupee + "</b></p><form><label>Quantity</label><input type='number' min='1'><button type='button' class='submit' onclick='add()'>Add</button></form><button type='btn' class='btn btn-primary mt-5' onclick=myfunction()><u>Add to cart</u></button></div></div></div>";
                           return;
                        }
                    });
                    brnd+="<span class='list-group-item listt' onclick='brand5()'>HarperCollins</span><span class='list-group-item listt' onclick='brand6()'>jaico</span><span class='list-group-item listt' onclick='brand7()'>arihant</span>";
                    $("#demo").append(txt);
                    $("#app").append(txet);
                    $("#brand").append(brnd);
                });
            });
}
else if (parseInt(localStorage.getItem("username")) == 3){
           $(document).ready(function(){
                $.getJSON("data_web3.json", function(data){
                    var txt = "";
                    var txet= "";
                    $.each(data, function(key, value){
                        txt+="<div class="+value.company+"><div class='carte text-center' id="+value.id+" onclick=change(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div></div>";
                        if(value.id === parseInt(localStorage.getItem("name"))){
                           txet="<div class='col'><div class='row'><div class='col-sm-12 col-lg-6 col-xl-6'><img class='image' src=" + value.url + "></div><div class='col-sm-12 col-lg-6 col-xl-6 value'><p><b>" + value.name + "<br>" + value.rupee + "</b></p><form><label>Quantity</label><input type='number' min='1'><button type='button' class='submit' onclick='add()'>Add</button></form><button type='btn' class='btn btn-primary mt-5' onclick=myfunction()><u>Add to cart</u></button></div></div></div>";
                           return;
                        }
                    });
                    brnd="<span class='list-group-item listt' onclick='brand8()'>Adidas</span><span class='list-group-item listt' onclick='brand9()'>Nike</span><span class='list-group-item listt' onclick='brand10()'>Wilson</span><span class='list-group-item listt' onclick='brand11()'>Puma</span>";
                    $("#demo").append(txt);
                    $("#app").append(txet);
                    $("#brand").append(brnd);
                });
            });
}
else if (parseInt(localStorage.getItem("username")) == 4){
           $(document).ready(function(){
                $.getJSON("data_web4.json", function(data){
                    var txt = "";
                    var txet= "";
                    var text="";
                    $.each(data, function(key, value){
                        txt+="<div class="+value.company+"><div class='carte text-center' id="+value.id+" onclick=change(" + (value.id) + "," + (value.cost) + ")><img class='imag' src=" + value.url + "><p><u class='text-primary'>" + value.name + "</u>" + "<br>" + value.rupee + "</p></div></div>";
                        if(value.id === parseInt(localStorage.getItem("name"))){
                           txet="<div class='col'><div class='row'><div class='col-sm-12 col-lg-6 col-xl-6'><img class='image' src=" + value.url + "></div><div class='col-sm-12 col-lg-6 col-xl-6 value'><p><b>" + value.name + "<br>" + value.rupee + "</b></p><form><label>Quantity</label><input type='number' min='1'><button type='button' class='submit' onclick='add()'>Add</button></form><button type='btn' id='bttn' class='btn btn-primary mt-5' onclick=myfunction()><u>Add to cart</u></button></div></div></div>";
                           return;   
                        }
                    });
                    brnd="<span class='list-group-item listt' onclick='brand12()'>Levis</span><span class='list-group-item listt' onclick='brand13()'>AllenSolly</span><span class='list-group-item listt' onclick='brand14()'>Parada</span>";
                    $("#demo").append(txt);
                    $("#app").append(txet);
                    $("#brand").append(brnd);
                });
            });
}
/*----------------------------------------------onclick (Add to Cart page)--------------------------------------------*/
function change(idd,cost){
    $(document).ready(function(){
        $(".carte").click(function(){
            window.location="page4.htm";
            localStorage.setItem("name",idd);
            localStorage.setItem("cost",cost);
        });
    });
}
function add(){
        var val = $("input").val();
        localStorage.setItem("quantity",val);
}

/*--------------------------------------------------Add to cart button----------------------------------------------*/
var cart_username = [];
var cart_name = [];
var cart_cost = [];
var cart_quantity = [];
function myfunction(){
    var id = parseInt(localStorage.getItem("name"));
    var categoryId = parseInt(localStorage.getItem("username"));
    var kost = parseInt(localStorage.getItem("cost"));
    var quantity = parseInt(localStorage.getItem("quantity"));
    const newcart_name = localStorage.getItem("cart_name");
    const newcart_username = localStorage.getItem("cart_username");
    const newcart_cost = localStorage.getItem("cart_cost");
    const newcart_quantity = localStorage.getItem("cart_quantity");
    if(newcart_name != null && newcart_username != null){
        cart_name = JSON.parse(newcart_name);
        cart_username = JSON.parse(newcart_username);
        cart_cost = JSON.parse(newcart_cost);
        cart_quantity = JSON.parse(newcart_quantity);
    }
    cart_name.push(id);
    cart_username.push(categoryId);
    cart_cost.push(kost);
    cart_quantity.push(quantity);
    localStorage.setItem("cart_name",JSON.stringify(cart_name));
    localStorage.setItem("cart_username",JSON.stringify(cart_username));
    localStorage.setItem("cart_cost",JSON.stringify(cart_cost));
    localStorage.setItem("cart_quantity",JSON.stringify(cart_quantity));
     window.location = "page5.htm";
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
var cart_userId = [];
var cart_password = [];
var cart_email = [];
cart_userId[0] = [1];
cart_password[0] = [1];
cart_email[0] = ["sfsDf@sdgz"];
if(localStorage.getItem("cart_userId") == null || localStorage.getItem("cart_email") == null || localStorage.getItem("cart_password") == null){
  localStorage.setItem("cart_userId",JSON.stringify(cart_userId[0]));
  localStorage.setItem("cart_password",JSON.stringify(cart_password[0]));
  localStorage.setItem("cart_email",JSON.stringify(cart_email[0]));
}
function store(){
    var userId = $("#userId").val();
    var password = $("#password1").val();
    var email = $("#email").val();
    const newcart_userId = localStorage.getItem("cart_userId");
    const newcart_password = localStorage.getItem("cart_password");
    const newcart_email = localStorage.getItem("cart_email");
    if(newcart_userId != null && newcart_password != null && newcart_email != null){
        cart_userId = JSON.parse(newcart_userId);
        cart_password = JSON.parse(newcart_password);
        cart_email = JSON.parse(newcart_email);
    }
    if(userId != "" && password != "" && email != ""){
      cart_userId.push(userId);
      cart_password.push(password);
      cart_email.push(email);
      localStorage.setItem("cart_userId",JSON.stringify(cart_userId));
      localStorage.setItem("cart_password",JSON.stringify(cart_password));
      localStorage.setItem("cart_email",JSON.stringify(cart_email));
    }
}
function login1(){
    var user = $("#user").val();
    var password =  $("#password").val();
    var x = JSON.parse(localStorage.getItem("cart_userId"));
    var y = JSON.parse(localStorage.getItem("cart_email"));
    var z = JSON.parse(localStorage.getItem("cart_password"));
    var i = 0;
    var x1 = false;
    if(x.length != null && y.length != null && z.length != null){
      for(i=0;i<x.length;i++){
          if((x[i] == user || y[i] == user) && z[i] == password){
              x1 = true;
          }
      }
    }
    else{
        window.location = "login_page.htm";
    }
    if(x1){
        window.alert("hello user");
        window.location = "page2.htm";
    }
    else{
        window.alert("Wrong Information");
        window.location = "login_page.htm";
    }
    if(localStorage.getItem("cart_userId") == null || localStorage.getItem("cart_email") == null || localStorage.getItem("cart_password") == null)
        {
            window.location = "login_page.htm";
        }
}
function logout1(){
    var l = JSON.parse(localStorage.getItem("cart_name"));
    var m = JSON.parse(localStorage.getItem("cart_username"));
    var n = JSON.parse(localStorage.getItem("cart_cost"));
    var o = JSON.parse(localStorage.getItem("cart_quantity"));
    if(l == null || m == null || n == null || o == null){
        window.location="login_page.htm";
    }
    else{
    if(l.length != null ){
        l.splice(0);
        localStorage.setItem("cart_name",JSON.stringify(l));
        localStorage.setItem("name",null);
    }
    else if(m.length != null ){
        m.splice(0);
        localStorage.setItem("cart_username",JSON.stringify(m));
        localStorage.setItem("username",null);
    }
    else if(n.length != null ){
        n.splice(0);
        localStorage.setItem("cart_cost",JSON.stringify(n));
        localStorage.setItem("cost",null);
    }
    else if(o.length != null ){
        o.splice(0);
        localStorage.setItem("cart_quantity",JSON.stringify(o));
        localStorage.setItem("quantity",null);
    }
    window.location="login_page.htm";
    }
}
/*-----------------------------------------------------my cart page------------------------------------------------------------------------*/
var sum = 0;
$(document).ready(function(){
    var a = JSON.parse(localStorage.getItem("cart_name"));
    var c = JSON.parse(localStorage.getItem("cart_username"));
    var e = JSON.parse(localStorage.getItem("cart_cost"));
    var f = JSON.parse(localStorage.getItem("cart_quantity"));
    $.getJSON("data_web1.json",function(data){
            $.each(data,function(key,value){
                var i=0;
                for(i=0;i<a.length;i++){
                    if(c[i] == value.userId && a[i] == value.id){
                        var tmt = "";
                        tmt+="<div class='container bord m-5'><button class='float-right' onclick=mfunction(" + (i) + ")>X</button><span class='p-2'><img class='imge' src="+value.url+"><b class='paddng'>"+value.name+"</b><b class='paddng'>"+value.rupee+"</b><b class='paddng'>Quantity: "+f[i]+"</b></span></div><br>";
                        $("#appy1").prepend(tmt);
                        $("#heading1").show();
                    }
                }
            });
    });
    $.getJSON("data_web2.json",function(data){
            $.each(data,function(key,value){
                var i=0;
                for(i=0;i<a.length;i++){
                    if(c[i] == value.userId && a[i] == value.id){
                        var tmt = "";
                        tmt+="<div class='container bord m-5'><button class='float-right' onclick=mfunction(" + (i) + ")>X</button><span class='p-2'><img class='imge' src="+value.url+"><b class='paddng'>"+value.name+"</b><b class='paddng'>"+value.rupee+"</b><b class='paddng'>Quantity: "+f[i]+"</b></span></div><br>";
                        $("#appy2").prepend(tmt);
                        $("#heading2").show();
                    }
                }
            });
    });
    $.getJSON("data_web3.json",function(data){
            $.each(data,function(key,value){
                var i=0;
                for(i=0;i<a.length;i++){
                    if(c[i] == value.userId && a[i] == value.id){
                        var tmt = "";
                        tmt+="<div class='container bord m-5'><button class='float-right' onclick=mfunction(" + (i) + ")>X</button><span class='p-2'><img class='imge' src="+value.url+"><b class='paddng'>"+value.name+"</b><b class='paddng'>"+value.rupee+"</b><b class='paddng'>Quantity: "+f[i]+"</b></span></div><br>";
                        $("#appy3").prepend(tmt);
                        $("#heading3").show();
                    }
                }
            });
    });
    $.getJSON("data_web4.json",function(data){
            $.each(data,function(key,value){
                var i=0;
                for(i=0;i<a.length;i++){
                    if(c[i] == value.userId && a[i] == value.id){
                        var tmt = "";
                        tmt+="<div class='container bord m-5'><button class='float-right' onclick=mfunction(" + (i) + ")>X</button><span class='p-2'><img class='imge' src="+value.url+"><b class='paddng'>"+value.name+"</b><b class='paddng'>"+value.rupee+"</b><b class='paddng'>Quantity: "+f[i]+"</b></span></div><br>";
                        $("#appy4").prepend(tmt);
                        $("#heading4").show();
                    }
                }
            });
    });
    var i = 0;
    for(i=0;i<e.length;i++){
        sum += e[i]*f[i];
    }
    rupe = "<div class='margin1'><b> Total Amount = " + sum + "</b></div>"
    $("#rupe").append(rupe);
});

/*----------------------------------------------button to remove item from cart---------------------------------------------*/
function mfunction(j){
    var p = JSON.parse(localStorage.getItem("cart_name"));
    var q = JSON.parse(localStorage.getItem("cart_username"));
    var r = JSON.parse(localStorage.getItem("cart_cost"));
    var s = JSON.parse(localStorage.getItem("cart_quantity"));
    p.splice(j,1);
    q.splice(j,1);
    r.splice(j,1);
    s.splice(j,1);
    localStorage.setItem("cart_name",JSON.stringify(p));
    localStorage.setItem("cart_username",JSON.stringify(q));
    localStorage.setItem("cart_cost",JSON.stringify(r));
    localStorage.setItem("cart_quantity",JSON.stringify(s));
    window.location="page5.htm";
}
/*------------------------------------------------------------page5 buttons-----------------------------------------------------------------------*/
function shopping(){
    window.location="page2.htm";
}
function cart(){
    window.location = "page5.htm";
}
/*------------------------------------------ brand filter----------------------------------------------------*/
function brand1(){
    if (parseInt(localStorage.getItem("username")) == 1){
           $(document).ready(function(){
                $.getJSON("data_web1.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "apple"){
                            $(".Sony").hide();
                            $(".dell").hide();
                            $(".hp").hide();
                            $(".apple").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
    }
}
function brand2(){
    if (parseInt(localStorage.getItem("username")) == 1){
           $(document).ready(function(){
                $.getJSON("data_web1.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "dell"){
                            $(".Sony").hide();
                            $(".apple").hide();
                            $(".hp").hide();
                            $(".dell").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
    }
}
function brand3(){
    if (parseInt(localStorage.getItem("username")) == 1){
           $(document).ready(function(){
                $.getJSON("data_web1.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Sony"){
                            $(".apple").hide();
                            $(".dell").hide();
                            $(".hp").hide();
                            $(".Sony").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
    }
}
function brand4(){
    if (parseInt(localStorage.getItem("username")) == 1){
           $(document).ready(function(){
                $.getJSON("data_web1.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "hp"){
                            $(".Sony").hide();
                            $(".dell").hide();
                            $(".apple").hide();
                            $(".hp").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
    }
}
function brand5(){
           $(document).ready(function(){
                $.getJSON("data_web2.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "HarperCollins"){
                            $(".jaico").hide();
                            $(".arihant").hide();
                            $(".HarperCollins").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand6(){
           $(document).ready(function(){
                $.getJSON("data_web2.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "jaico"){
                            $(".jaico").show();
                            $(".arihant").hide();
                            $(".HarperCollins").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand7(){
           $(document).ready(function(){
                $.getJSON("data_web2.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "arihant"){
                            $(".jaico").hide();
                            $(".arihant").show();
                            $(".HarperCollins").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand7(){
           $(document).ready(function(){
                $.getJSON("data_web2.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "arihant"){
                            $(".jaico").hide();
                            $(".arihant").show();
                            $(".HarperCollins").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand8(){
           $(document).ready(function(){
                $.getJSON("data_web3.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Adidas"){
                            $(".Nike").hide();
                            $(".Adidas").show();
                            $(".Wilson").hide();
                            $(".Puma").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand9(){
          $(document).ready(function(){
                $.getJSON("data_web3.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Nike"){
                            $(".Nike").show();
                            $(".Adidas").hide();
                            $(".Wilson").hide();
                            $(".Puma").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
                    
}
function brand10(){
           $(document).ready(function(){
                $.getJSON("data_web3.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Wilson"){
                            $(".Nike").hide();
                            $(".Adidas").hide();
                            $(".Wilson").show();
                            $(".Puma").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand11(){
           $(document).ready(function(){
                $.getJSON("data_web3.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Puma"){
                            $(".Nike").hide();
                            $(".Adidas").hide();
                            $(".Wilson").hide();
                            $(".Puma").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand12(){
           $(document).ready(function(){
                $.getJSON("data_web4.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Levis"){
                            $(".AllenSolly").hide();
                            $(".Parada").hide();
                            $(".Levis").show();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand13(){
           $(document).ready(function(){
                $.getJSON("data_web4.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "AllenSolly"){
                            $(".AllenSolly").show();
                            $(".Parada").hide();
                            $(".Levis").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
function brand14(){
           $(document).ready(function(){
                $.getJSON("data_web4.json", function(data){
                    $.each(data,function(key,value){
                        if(value.company == "Parada"){
                            $(".AllenSolly").hide();
                            $(".Parada").show();
                            $(".Levis").hide();
                            $(".carte").show();
                            $(".cartee").hide();
                            $(".cartei").hide();
                            $(".carten").hide();
                            $(".cartex").hide();
                         }
                     });
                    
                });
           });
}
/*--------------------------------------------------------end--------------------------------------------------------------*/