function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        let baz = "Bazz";
        console.log(bar);
    }

    console.log(baz);

    }


run();