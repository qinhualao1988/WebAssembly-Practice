
/*
 * MOdule: js obj used in 'EMSCRIPTEN' glue code
 * onRuntimeInitialized: callback, wait for wesm runtime initiating
 */

var Module = {
    onRuntimeInitialized: function () {
        const add = Module.cwrap("add", "number", ["number", "number"]);

        const button = document.getElementById("calculateBtn");

        button.addEventListener("click", function () {
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);

            const result = add(a, b);

            document.getElementById("result").textContent = result;
            
            console.log(`result is: ${result}`)
        });
    }
};