document.addEventListener("DOMContentLoaded", function() {
    var radius1Input = document.getElementById("radius1");
    var radius2Input = document.getElementById("radius2");
    var calculateButton = document.getElementById("calculate");
    var resultDiv = document.getElementById("result");
    var circleCanvas = document.getElementById("circleCanvas");
    var ctx = circleCanvas.getContext("2d");

    calculateButton.addEventListener("click", function() {
        var r1 = parseFloat(radius1Input.value);
        var r2 = parseFloat(radius2Input.value);

        // Перевірка на допустимість значень радіусів
        if (r1 < 0 || r2 < 0) {
            resultDiv.textContent = "Радіус не може бути менше 0";
            return;
        }

        var area = Math.PI * (Math.pow(r2, 2) - Math.pow(r1, 2));

        resultDiv.textContent = `Площа кільця з радіусами ${r1} і ${r2} дорівнює ${area.toFixed(2)}`;

        // Очистити canvas
        ctx.clearRect(0, 0, circleCanvas.width, circleCanvas.height);

        // Малювати зовнішнє коло
        var centerX = circleCanvas.width / 2;
        var centerY = circleCanvas.height / 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r2, 0, 2 * Math.PI);
        ctx.stroke();

        // Малювати внутрішнє коло
        ctx.beginPath();
        ctx.arc(centerX, centerY, r1, 0, 2 * Math.PI);
        ctx.stroke();

        // Малювати радіуси
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + r2, centerY);
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + r1, centerY);
        ctx.stroke();
    });
});