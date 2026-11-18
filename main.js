
/*
 * MOdule: js obj used in 'EMSCRIPTEN' glue code
 * onRuntimeInitialized: callback, wait for wesm runtime initiating
 */

var Module = {    // Module is already defined in 'calculator.js', then use 'var' here
    onRuntimeInitialized: function () {
        // update any function in here 
        const add = Module.cwrap("add", "number", ["number", "number"]);
        const minus = Module.cwrap("subtract", "number", ["number", "number"]);
        const multiple = Module.cwrap("multiple", "number", ["number", "number"])
        const mod = Module.cwrap("mod", "number", ["number", "number"])

        // operator button
        const plusButton = document.getElementById("add");
        const subtractButton = document.getElementById("subtract")
        const multipleButton = document.getElementById("multiple")
        const modButton = document.getElementById("mod")

        plusButton.addEventListener("click", function () {
            
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);

            const result = add(a, b);

            document.getElementById("result").textContent = result;
            
            console.log(`result is: ${result}`)
        });

        subtractButton.addEventListener("click", function() {

            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);

            const result = minus(a, b)
            
            document.getElementById("result").textContent = result

            console.log(`result: ${result}`)
        })

        multipleButton.addEventListener("click", function() {

            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);

            const result = multiple(a, b)
            
            document.getElementById("result").textContent = result

            console.log(`result: ${result}`)     
        })

        modButton.addEventListener("click", function() {

            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);

            const result = mod(a, b)
            
            document.getElementById("result").textContent = result

            console.log(`result: ${result}`)     
        })
    }
};