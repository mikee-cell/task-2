document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove');

      removeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent toggling complete when clicking remove
        taskList.removeChild(listItem);
      });

      listItem.appendChild(removeButton);

      listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
      });

      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  });
});
