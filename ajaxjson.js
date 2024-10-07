function getData(){
    console.log("btn clicked");
    // step1
    var xhttp = new XMLHttpRequest();
    // step2
    xhttp.open("GET","data.json",true);
    // step3
    xhttp.send();
    // step4
    xhttp.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            var data = JSON.parse(this.responseText)
            let val="";
            for(let i=0;i<data.length;i++){
                val +=`<li>${data[i].name},${data[i].age}</li>`
                document.getElementById('txt1').innerHTML = val
                       }
         }
    }
}
