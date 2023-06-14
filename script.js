const input = document.querySelector("#inpValue");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const inComplite = document.querySelector(".incomplite");
const compliteUl = document.querySelector(".complite ul");
const c_ul = document.querySelector("#c-ul");
const complite = document.querySelector(".complite ");
const continer = document.querySelector(".continer ");
// function_____________________________________________

// _________________________________________________________
//local storage:_______________________________________
const savelocalStor = (todoSL) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todoSL)
    localStorage.setItem("todos", JSON.stringify(todos))

}
//--------------------
const savelocalStorCom = (todoSL) => {
    let comtodos;
    if (localStorage.getItem("comtodos") === null) {
        comtodos = []
    } else {
        comtodos = JSON.parse(localStorage.getItem("comtodos"));
    }
    comtodos.push(todoSL)
    localStorage.setItem("comtodos", JSON.stringify(comtodos))
}


//get todo
const getTodo = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((todo) => {
        const cli = document.createElement("li");
        const cLable = document.createElement("label");
        const cInput = document.createElement("input");
        cInput.type = "checkbox";
        cLable.innerText = todo;
        cli.appendChild(cInput);
        cli.appendChild(cLable);
        c_ul.append(cli)
    });
    console.log(todos)
}

//removeStore------------------------------------------------
const removetodoIcom = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[1].innerText;
    // console.log(todoIndex)
    todos.splice(todos.indexOf(todoIndex), 1)
    // console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos))
}
// --------------------------------------
const removetodoCom = (todo) => {
    let comtodos;
    if (localStorage.getItem("comtodos") === null) {
        comtodos = []
    } else {
        comtodos = JSON.parse(localStorage.getItem("comtodos"));
    }
    const todoIndex = todo.children[0].innerText;
    console.log(todoIndex)

    comtodos.splice(comtodos.indexOf(todoIndex), 1)
    localStorage.setItem("comtodos", JSON.stringify(comtodos))
}



//--------------
const getTodoCom = () => {
    // console.log("get")
    let comtodos;
    if (localStorage.getItem("comtodos") === null) {
        comtodos = []
    } else {
        comtodos = JSON.parse(localStorage.getItem("comtodos"));
    }
    comtodos.forEach((todo) => {
        const cli = document.createElement("li");
        const cLable = document.createElement("label");
        const cbutton = document.createElement("button");
        cbutton.innerText = "Delete"
        cbutton.classList = "btn2"
        cLable.innerText = todo;
        compliteUl.append(cli);
        cli.appendChild(cLable);
        cli.appendChild(cbutton);
    });
    console.log(comtodos)
}

//____________________________________________________





//EventListener_______________from input______________________
document.addEventListener("DOMContentLoaded", getTodo)
document.addEventListener("DOMContentLoaded", getTodoCom)
btn.addEventListener("click", (event) => {
    event.preventDefault();
    c_ul.append(crElement(input.value));
    input.value = ''
})
// _________________________________________________

//EventListener____________Data tranform_________________________

c_ul.addEventListener("click", (e) => {
    let typ = "checkbox";
    if (e.target.type == typ) {
        let y = e.target.parentElement;
        let text = y.innerText;
        comAppend(text)
        removetodoIcom(y)
        console.log(text, y)
        y.remove()
    }
})
// _________________________________________________

//EventListener______________Delete_______________________
compliteUl.addEventListener("click", (e) => {
    let a = "Delete";
    if (e.target.innerText == a) {
        let y = e.target.parentElement;
        removetodoCom(y)
        y.remove()

    }

})
// _________________________________________________
//funtion_______________createElement-function____________________________
const crElement = (value) => {
    if (value == '') {
        alert("Enter Your Task")
    } else {
        const cli = document.createElement("li");
        const cInput = document.createElement("input");
        const cLable = document.createElement("label");
        cInput.type = "checkbox";
        let s = value[0].toUpperCase() + value.slice(1)
        savelocalStor(s)
        cLable.innerText = s;
        cli.appendChild(cInput);
        cli.appendChild(cLable);
        return cli
    }

}
// _________________________________________________
//funtion_________________Detete-function__________________________

const comAppend = (y) => {
    const cli = document.createElement("li");
    const cLable = document.createElement("label");
    const cbutton = document.createElement("button");
    cbutton.innerText = "Delete"
    cbutton.classList = "btn2"
    cLable.innerText = y;
    savelocalStorCom(y)
    compliteUl.append(cli);
    cli.appendChild(cLable);
    cli.appendChild(cbutton);
}
// _________________________________________________




