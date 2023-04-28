
const stringifyCircularJSON = (obj: any) => {
  const seen = new WeakSet();
  return JSON.stringify(obj, (k: any, v: any) => {
    if (v !== null && typeof v === 'object') {
      if (seen.has(v)) return;
      seen.add(v);
    }
    return v;
  });
};

export { stringifyCircularJSON };