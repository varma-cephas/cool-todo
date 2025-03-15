const loadComponents = async(id, url)=>{
    const request = await fetch(url);
    const response = await request.text();
    document.getElementById(id).innerHTML = response

    const input_todo_form = document.querySelector("#input_todo_form");
    const input_field = document.querySelector("#input_field");
    
    input_todo_form.addEventListener("submit", e=>{
        e.preventDefault();
        const fd= new FormData(input_todo_form);
        fetch("/", {
            method: "POST",
            body: new URLSearchParams(fd),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        input_field.value="";
    })
}

window.onload=()=>{
    loadComponents('todo_form', "./dist/sections/todo_form.html");
}






