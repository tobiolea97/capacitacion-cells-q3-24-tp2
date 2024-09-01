export const AuthMixin = (Superclass) => class extends Superclass {
    method1() {
        console.log('method 1');
    }

    method2() {
        console.log('method 2');
    }
}