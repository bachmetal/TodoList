const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const apiURL = "http://localhost:8080/api/todos/"

const getTasks = async () => {
    try {
        let response = await fetch(apiURL, {method: 'GET'});
        let todos = await response.json();

        const todoList = document.getElementById("list-container");
        todoList.innerHTML = ``;
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = todo.item;
            listItem.dataset.id = todo.id;

            let checkbox = document.createElement("img");
            checkbox.src = "images/unchecked.png";
            listItem.prepend(checkbox);

            const spanItem = document.createElement("span");
            spanItem.innerHTML = "X";
            listItem.appendChild(spanItem);
            todoList.appendChild(listItem);

        });
        await clickableX();
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: inputBox.value
            })
        })
            .then(response => {
                if (response.ok) {
                    getTasks();
                    return response.json(); // Handle JSON response here, if needed
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log(data); // Process the data
                inputBox.value = '';
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
        inputBox.value = '';
    }
}

async function deleteTask(id) {
    if (confirm("Are you sure you want to delete?")) {
        // console.log(id);
        fetch(apiURL + id, {method: 'DELETE'})
            .then(r => {
                getTasks();
            });
    }
}

async function clickableX() {
    let lists = document.querySelectorAll("#list-container li");
    lists.forEach(list => {
        list.querySelector("span").addEventListener("click", (e) => {
            deleteTask(e.target.parentElement.dataset.id);
            // console.log("clicked " + e.target.parentElement.dataset.id);
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await getTasks();
});