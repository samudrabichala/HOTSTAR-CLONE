
document.getElementById("clicked").addEventListener("click",openvideo,false);
  function openvideo(){
  window.open('file:///home/dinakar/Desktop/HTMLS/HOTSTARCLONE/gotintro.html');
  }
      
       url='https://dinakarj78.github.io/cloneapi.github.io/Data.json';
	  var request= new XMLHttpRequest();
	  request.open('GET',url,true);
	  request.send();  
	  request.onreadystatechange=function(){
		  if(this.readyState==4&&this.status==200){
            var myobj=JSON.parse(this.responseText);
          var bg=myobj.baaghi.category;
          var imagesrc=myobj.baaghi.imageurl;
          console.log(bg);
          console.log(imagesrc);
		  }
       
	  }