const obj1 = {
    hello: "hello"
}

const obj2 = {
    by: "by"
}

const objSpred = {...obj1, ...obj2};

const objApply = this.apply(obj1, obj2);

const goDog = () => {
    console.log("go dog");
}

goDog();
