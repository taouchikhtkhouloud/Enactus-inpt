function SendMail(){
    var params = {
       
        
        message: document.getElementById("message").value
    }
    emailjs.send("service_9079pwk", "template_riw1k3f", params).then(function(res){
        alert("Success!");
    });
}
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  
  event.preventDefault();

  
  document.getElementById("email").value='';
  
  document.getElementById('message').value="";
  
 
  

  
  
});