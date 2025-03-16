const loadComponents = async(id, url)=>{
    const request = await fetch(url);
    const response = await request.text();
    document.getElementById(id).innerHTML = response

    const input_todo_form = document.querySelector("#input_todo_form");
    const input_field = document.querySelector("#input_field");
    
    input_todo_form.addEventListener("submit", e=>{
        e.preventDefault();
        const todo_item=document.createElement("li");

        const fd= new FormData(input_todo_form);
        fetch("/", {
            method: "POST",
            body: new URLSearchParams(fd),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        todo_item.textContent=input_field.value
        document.getElementById("todo_list_item").append(todo_item)
        input_field.value="";
    })
}

window.onload=()=>{
    loadComponents('todo_list', "./dist/sections/todo_list.html");
    loadComponents('todo_form', "./dist/sections/todo_form.html");

    const getTodo= async()=>{
        const request = await fetch("/todo_arr");
        const response = await request.json();
        if(response.length>=1){
            for(const item of response){
                const todo_item=document.createElement("li");
                todo_item.textContent=item;
                document.getElementById("todo_list_item").append(todo_item)
            }
        }
    }
    getTodo()
}






