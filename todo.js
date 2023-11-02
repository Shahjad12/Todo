document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <input type="checkbox" class="complete-checkbox">
                <span>${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                

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
                if (confirm('Are you sure you want to delete this task?')) {
                    listItem.remove();
                }
            });

            const completeCheckbox = listItem.querySelector('.complete-checkbox');
            completeCheckbox.addEventListener('change', function () {
                // Implement mark as completed functionality using checkboxes
                listItem.classList.toggle('completed', completeCheckbox.checked);
            });
        }
    });
});
