const foo = async () => {
  console.log("Before await");

  const promiseValue = await new Promise(resolve => {
    setTimeout(() => resolve(5), 2000)
  });

  console.log("After await", promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5
