const parentMenu = document.getElementsByClassName("flow_ttl");

for (let i = 0; i < parentMenu.length; i++){
  parentMenu[i].addEventListener("click", function(){
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  })
}
