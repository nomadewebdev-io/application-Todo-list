// Éléments DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Charger les tâches depuis le localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Sauvegarder dans le localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Mettre à jour le compteur
function updateCount() {
    const completed = tasks.filter(t => t.completed).length;
    taskCount.textContent = `${completed}/${tasks.length} tâche(s) complétée(s)`;
}

// Créer un élément de tâche
function createTaskElement(task, index) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
        <span class="task-text">${task.text}</span>
        <button class="delete-btn" data-index="${index}">Supprimer</button>
    `;

    return li;
}

// Afficher toutes les tâches
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-state">Aucune tâche pour le moment. Ajoutez-en une !</p>';
    } else {
        tasks.forEach((task, index) => {
            taskList.appendChild(createTaskElement(task, index));
        });
    }

    updateCount();
}

// Ajouter une tâche
function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        taskInput.focus();
        return;
    }

    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
}

// Supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Basculer l'état de complétion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Événements
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = parseInt(e.target.dataset.index);
        deleteTask(index);
    } else if (e.target.classList.contains('task-checkbox')) {
        const index = parseInt(e.target.dataset.index);
        toggleTask(index);
    }
});

// Initialisation
renderTasks();