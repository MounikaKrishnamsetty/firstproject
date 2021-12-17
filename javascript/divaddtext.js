function addtexttodiv() {
  var maindiv = document.createElement("div");
  maindiv.innerHTML = "this is main div ";
  let head=document.createElement("h1");
  head.innerHTML="first heading";
  maindiv.appendChild(head);
   document.body.appendChild(maindiv);
localstorage.getitem("name");
}