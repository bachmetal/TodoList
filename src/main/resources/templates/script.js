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
            let checkbox = document.createElement("img");

            listItem.innerHTML = todo.item;
            listItem.dataset.id = todo.id;

            if (todo.completed) {
                listItem.style.textDecoration = "line-through";
                checkbox.src = "images/checked.png";
            } else {
                checkbox.src = "images/unchecked.png";
            }
            listItem.prepend(checkbox);

            const spanItem = document.createElement("span");
            spanItem.innerHTML = "X";
            spanItem.id = "delete";

            const editItem = document.createElement("span");
            editItem.id = "edit";
            editItem.onclick = editTask;

            listItem.appendChild(editItem);
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
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
        inputBox.value = '';
    }
}

async function deleteTask(id) {
    fetch(apiURL + id, {method: 'DELETE'})
        .then(r => {
            getTasks();
            return r.json();
        });
}

async function clearAll() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        fetch(apiURL + "all", {method: 'DELETE'})
            .then(r => {
                getTasks();
                return r.json();
            });
    }
}

async function clickableX() {
    let lists = document.querySelectorAll("#list-container li");
    lists.forEach(list => {
        list.querySelector("#delete").addEventListener("click", (e) => {
            if (confirm(`Are you sure you want to delete "${e.target.parentElement.innerText.replace("\nX", '')}"?`))
                deleteTask(e.target.parentElement.dataset.id);
        });
        list.querySelector("img").addEventListener("click", (e) => {
            fetch(apiURL + e.target.parentElement.dataset.id + "/complete", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
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
                })
                .catch(error => console.error('There has been a problem with your fetch operation:', error));

        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await getTasks();
});

document.addEventListener('click', async (e) => {
    let id = e.target.dataset.id;
    if (e.target.tagName === "LI") {
        fetch(apiURL + id + "/complete", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
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
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }
});

async function editTask(id) {
    id = id.target.parentElement.dataset.id;
    let newTask = prompt("Edit task:");
    if (newTask === null) return;
    await fetch(apiURL + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            item: newTask
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
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

//
// async function editButton(id) {
//     let lists = document.querySelectorAll("#list-container li");
//     lists.forEach(list => {
//         list.querySelector("#edit").addEventListener("click", (e) => {
//             editTask(e.target.parentElement.dataset.id);
//         });
//     });
// }