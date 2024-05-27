
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Hide sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });
});

// get infor form =input tast and create a new element for end input + enter

document.addEventListener('DOMContentLoaded', function () {
    const inputTask = document.getElementById('input-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');


    const deleteSound = new Audio('./src/assets/sound/sound-bicycle-bell-155622.mp3');

    addTaskBtn.addEventListener('click', function () {
        const taskText = inputTask.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <label class="task">
                    <input type="checkbox">
                    <span>${taskText}</span>
                    <i class="fa-solid fa-trash"></i>
                </label>
            `;
            taskList.appendChild(li);
            // addTaskBtn.click();
            inputTask.value = ''; // Clear input
        }
        addTaskBtn.addEventListener('click', addTask);

    });


    inputTask.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
    
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('fa-trash')) {
            // Phát âm thanh
            deleteSound.play();
            
            // Dừng âm thanh sau 1 giây (1000 ms)
            setTimeout(function() {
                deleteSound.pause();
                deleteSound.currentTime = 0; // Reset âm thanh về đầu
            }, 700); // Thay đổi thời gian này thành thời lượng mong muốn

            // Xóa task
            event.target.parentElement.parentElement.remove();
        } else if (event.target.type === 'checkbox') {
            const taskSpan = event.target.nextElementSibling;
            taskSpan.classList.toggle('task-done'); // Toggle task done
        }
    });


});







