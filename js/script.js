let likeCount = 0;
let curtido = false; //flag booleana

function curtir() {
  if(curtido== true){
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
  }else{

  likeCount--;
  curtido=false;
  document.getElementById("likeCount").innerText = likeCount;

    
  }



}

document.getElementById("likeBtn").addEventListener("click", curtir);
