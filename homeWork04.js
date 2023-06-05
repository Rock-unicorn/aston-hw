//Ex.1 Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JS динамически хранят данные. Они не имеют определенной длины. Также массивы совмещают в себе атрибуты очереди и стека. 

//Ex.2 context binding
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);

logger.apply(obj);

const loggerBind = logger.bind(obj);
loggerBind();
// or
logger.bind(obj)()

//Ex.bonus 
function handMadeBind(func, context, ...rest) {
    return function (...arg) {
        const uniqKey = Math.random().toString();
        context[uniqKey] = func;
        const res = context[uniqKey](...rest.concat(arg));
        delete context[uniqKey];
        return res;
    };
};

// use apply
function handMadeBind1(func, context, ...rest) {
    return function (...arg) {
        return func.apply(context, rest.concat(arg));
    };
};
