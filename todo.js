document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="done-checkbox"> <!-- New checkbox -->
                <span>${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            // Add event listeners for edit, delete, and complete
            listItem.querySelector('.edit').addEventListener('click', function () {
                // Implement edit functionality
                const newText = prompt('Edit task:', taskText);
                if (newText !== null && newText.trim() !== '') {
                    listItem.querySelector('span').textContent = newText;
                }
            });

            listItem.querySelector('.delete').addEventListener('click', function () {
                // Implement delete functionality
                listItem.remove();
            });

            listItem.querySelector('.complete').addEventListener('click', function () {
                // Implement mark as completed functionality
                listItem.classList.toggle('completed');
            });

            // Check the "Done" checkbox by default
            listItem.querySelector('.done-checkbox').checked = true;
        }
    });
});
