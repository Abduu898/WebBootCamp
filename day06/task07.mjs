export function objectsDeeplyEqual(cmp1, cmp2) {
  if (cmp1 === cmp2) {
    return true;
  }
  if (typeof cmp1 !== "object" || typeof cmp2 !== "object") {
    return false;
  }
  if (cmp1 === null || cmp2 === null) {
    return false;
  }
  const keys1 = Object.keys(cmp1); /* pour parcourir les clés de l'objet cmp1 , cle de l'objet comme "name" ou "age" */
  const keys2 = Object.keys(cmp2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!objectsDeeplyEqual(cmp1[key], cmp2[key])) {
      return false;
    }
  }
  return true;
}
