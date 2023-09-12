// function Sended() {
//     let val = document.getElementById("val");
//     let p = document.createElement("p");
//     let text = document.createtextNode(val.value);
//     p.appendChild(text);
//     console.log(p)
//     let message = document.getElementById("message");
//     message.appendChild(p);
//     p.value = "";
// }

function messagesend() {
    var val = document.getElementById('val');
    let para = document.createElement('p');
    let textnode = document.createTextNode(val.value);
    para.appendChild(textnode);
    var message = document.getElementById('message');
    message.appendChild(para);

    val.value = " ";
}