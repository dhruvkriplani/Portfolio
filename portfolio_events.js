
//Responsible for fading in and out effect of vertical navbar
    $(document).ready(function(){
    $(".navbar").hover(function(){
       
        $(".list").fadeToggle();
    });
     $(".html").mouseover(function(){
            $("[src='1.png']").css({"display":"none"});
            $("p.txt1").text("HTML stands for hyper text mark-up language.It is widely used for structuring of webpage.consists of a series of .HTML elements tell the browser how to display the content.");
            $("p.txt1").css("display","block");
            
     });  
     $(".html").mouseout(function(){
        $("[src='1.png']").css({"display":"block"});
        $("p.txt1").css("display","none");
 }); 
 $(".css").mouseover(function(){
    $("[src='2.png']").css({"display":"none"});
    $("p.txt2").text("CSS stands for Cascading Style Sheets.CSS describes how HTML elements are to be displayed on screen, paper, or in other media.CSS saves a lot of work. It can control the layout of multiple web pages all at once.External stylesheets are stored in CSS files.");
    
    $("p.txt2").css("display","block");
    
});  
$(".css").mouseout(function(){
$("[src='2.png']").css({"display":"block"});
$("p.txt2").css("display","none");
}); 
$(".js").mouseover(function(){
    $("[src='6.png']").css({"display":"none"});
    $("p.txt6").text("JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is a lightweight, cross-platform, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, many non-browser environments also use it.");
    $("p.txt6").css("display","block");
    
});  
$(".js").mouseout(function(){
$("[src='6.png']").css({"display":"block"});
$("p.txt6").css("display","none");
}); 
$(".php").mouseover(function(){
    $("[src='3.png']").css({"display":"none"});
    $("p.txt3").text("PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.");
    $("p.txt3").css("display","block");
    
});  
$(".php").mouseout(function(){
$("[src='3.png']").css({"display":"block"});
$("p.txt3").css("display","none");
});     
$(".java").mouseover(function(){
    $("[src='4.png']").css({"display":"none"});
    $("p.txt4").text("Java is a popular programming language, created in 1995.It is one of the most popular programming language in the world.It is open-source and free.It is secure, fast and powerful.");
    $("p.txt4").css("display","block");
    
});  
$(".java").mouseout(function(){
$("[src='4.png']").css({"display":"block"});
$("p.txt4").css("display","none");
}); 
$(".Mysql").mouseover(function(){
    $("[src='5.png']").css({"display":"none"});
    $("p.txt5").text("MySQL is a relational database management system.MySQL is open-source.MySQL is free.MySQL is very fast, reliable, scalable, and easy to use.MySQL is cross-platform.MySQL is compliant with the ANSI SQL standard.");
    $("p.txt5").css("display","block");
    
});  
$(".Mysql").mouseout(function(){
$("[src='5.png']").css({"display":"block"});
$("p.txt5").css("display","none");
}); 
$("[type='submit']").click(function(){
    $(".status").load("form_validate.php",function(statusTxt){
            if(statusTxt=='success')
                alert("Data sent successfully");
            else
                alert("An errror occured");
    });
  
    });
});
   