// Drop zone event listeners
const dropZone = document.getElementById('dropZone');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight);
});

dropZone.addEventListener('drop', handleDrop);

// Drop zone functions
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    dropZone.classList.add('highlight');
}

function unhighlight(e) {
    dropZone.classList.remove('highlight');
}

function handleDrop(e) {
    let files = e.dataTransfer.files;

    Array.from(files).forEach(file => {
        testUpload(file);
    })
}

// File upload functions
function testUpload(file) {
    alert(file.name);
    let url = '/api/rooms';

    fetch(url, {
        method: 'POST',
        body: {
            "keyroom": 1234,
            "hostid": 9999,
            "password": 1234,
            "text": "fucking idiot"
        }
    })

    .then(() =>  {alert('works'); });
}

function uploadFile(file) {
    // Code for uploading a file
}