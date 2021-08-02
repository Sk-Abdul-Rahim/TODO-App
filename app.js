// function addElement() {
//     var div = document.createElement("div");
//     var inp = document.createElement("input");
//     var btn1 = document.createElement("Button");
//     var btn2 = document.createElement("Button");
//     var text = document.createTextNode("edit");
//     var text1 = document.createTextNode("delete");
//     div.append(inp);
//     p.appendChild(text);
//     p.appendChild(text1);
//     div.appendChild(btn1);
//     div.appendChild(btn2);
//     //main.appendChild(div)
// }

var inpList = "";
var editBtn;
var list;

function addValue() {
    var inpTask = document.getElementById("txt-inp").value; // get user input value from add task input by ID
    var li = document.createElement("li")
    inpList = document.createElement("input")
    editBtn = document.createElement("button")
    var delBtn = document.createElement("button")
    editBtn.setAttribute("onclick", "editTodo(this)")
    delBtn.setAttribute("onclick", "delTodo(this)")
    inpList.setAttribute("disabled", "disabled")

    // var text = document.createNTextNode("Edit")
    inpList.setAttribute("type", "text") // add ttribute to list input element
    inpList.setAttribute("id", "txt-inp-list")
    inpList.setAttribute("value", inpTask)
    li.appendChild(inpList)
    editBtn.innerText = "Edit"
    li.appendChild(editBtn)
    delBtn.innerText = "Delete"
    li.appendChild(delBtn)
    list = document.getElementById("task-list");
    list.appendChild(li) // ul Class: tex-inp-list
    console.log(list)
    document.getElementById("txt-inp").value = ""
    inpList.style.width = "300px"
}

function delTodo(e) {
    e.parentNode.remove();
}

function editTodo(e) {
    if (e.innerText === "Edit") {
        e.innerText = "Update"
        e.previousSibling.removeAttribute("disabled", "disabled")
            //var oldVal = e.parentNode.firstChild;
            // e.parentNode.firstChild.nodeValue = oldVal;
        var oldVal = e.previousSibling.value
            // //  var newVal = inpList.document.getElementById("txt-inp-list").value
            // console.log("Test" + oldVal)
        console.log("if Block")
            //var pr = prompt('enter the updated value', e.parentNode.previousSibling.nodeValue)
            //e.parentNode.previousSibling.nodeValue = pr
    } else {
        e.innerText = "Edit";
        e.previousSibling.setAttribute("disabled", "disabled")
        console.log("else block")
    }

}

function delAll() {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    // OR list.innerHTML = "";
}