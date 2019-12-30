function runCamera(video, constrains = { video: { facingMode: "environment" } }) {
    try {
        //var video = document.getElementById(elementId); // Получили элемент
        if (video !== undefined) { // Если не пусто
            if (video.srcObject != null) { // проверяем src
                video.srcObject.getVideoTracks().forEach(track => track.stop()); // останавливаем старые потоки
            }
        }
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // Получаем доступ к камере
            navigator.mediaDevices.getUserMedia(constrains).then(function (stream) {
                video.srcObject = stream; // задаём src
                video.play(); // проигрываем поток
            });
        }
    }
    catch (err) {
        alert(err.Message);
    }
}

function takePhoto(canvas, video) {
    try {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        return canvas.toDataURL("image/webp"); 
    }
    catch (err) {
        alert(err.Message);
    }
}