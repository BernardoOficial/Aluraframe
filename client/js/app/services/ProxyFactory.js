class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get: function (target, prop, receiver) {

                let metodoIncluso = props.includes(prop);
                let typeofFunction = typeof (target[prop]) === typeof (Function);

                if (metodoIncluso && typeofFunction) {

                    return function () {

                        console.log(`Acionado o método ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
            ,
            set: function (target, prop, valor, receiver) {

                if (props.includes(prop))
                    acao(target)
                //target[prop] = valor;

                console.log(prop);

                return Reflect.set(target, prop, valor, receiver);
            }

        });

    }

}