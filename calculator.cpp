#include <emscripten/emscripten.h>    // preprocessor directive provided by Emscripten

extern "C" {    // using 'C' linkage instead of 'C++' linkage
    
    /*
     * EMSCRIPTEN_KEEPALIVE: Emscripten-specific Macro
     * to prevent dead code elimination
     * to export function    
    */
    EMSCRIPTEN_KEEPALIVE
    int add(int a, int b) {
        return a + b;
    }

    EMSCRIPTEN_KEEPALIVE
    int subtract(int a, int b) {
        return a - b;
    }

    EMSCRIPTEN_KEEPALIVE
    int multiple(int a, int b) {
        return a * b;
    }

    EMSCRIPTEN_KEEPALIVE
    int mod(int a, int b) {
        return a % b;
    }

}