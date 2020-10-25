function run() {
    var foo = "Foo";
    let bar = "Bar";
 

    console.log(foo, bar);

    {
        let bar= "Na";
        setTimeout(() => {
            console.log(bar)
        }, 1000);
    }

  

    {
        let baz = "Bazz";
        console.log(bar);
    }

    console.log(baz);

    }


run();