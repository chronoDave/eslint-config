export default key =>
  rules =>
    Object.fromEntries(Object.entries(rules).map(([k, v]) => [`${key}/${k}`, v]));
