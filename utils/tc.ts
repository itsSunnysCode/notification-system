function tc(promise: Promise<any>): Promise<Array<any>> {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      return [err, undefined];
    });
}

export default tc;