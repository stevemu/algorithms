function transformToRes() {
  console.log('f(): evaluated');
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const r = originalMethod.apply(this);
      r.body = JSON.stringify(r.body);
      return r;
    };

    return descriptor;
    // return 'bbb';
  };
}

// function g() {
//   console.log("g(): evaluated");
//   return function (
//     target,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("g(): called");
//   };
// }

// function required(
//   target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number
// ) {
//   return
// }

const testFn = (str, callback) => {
  return function () {
    return {
      predicate: 'aa',
      resolve: () => {
        console.log('i am resolver');
      },
    };
  };
};

class C {
  // @transformToRes()
  // method() {
  //     return {
  //         status: 200,
  //         body: {abc: 'abc'}
  //     }
  // }

  method2() {
    return testFn('aaa', context => {
      return {
        status: 200,
        body: 'b',
      };
    });
  }
}

const c = new C();
console.log(c.method2()());
