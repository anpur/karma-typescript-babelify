class MyClass {
    constructor() {
        const a = 'Hello ';
        let b = a + 'world';
        console.log(b);
    }

    public async foo() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 0);
        });
    }
}

export { MyClass };