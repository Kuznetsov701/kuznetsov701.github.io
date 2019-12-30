function runCamera(elementId, constrains = { video: { facingMode: "environment" } }) {
    try {
        var video = document.getElementById(elementId);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constrains).then(function (stream) {
                video.srcObject = stream;
                video.play();
            });
        }
    }
    catch (err) {
        alert(err.Message)
    }
}

function stopStream(elementId) {
    try {
        var video = document.getElementById(elementId);
        if (video !== undefined) {
            if (video.srcObject != null) {
                video.srcObject.getVideoTracks().forEach(track => track.stop());
            }
        }
    } catch (err) {
        alert(err);
    }
}