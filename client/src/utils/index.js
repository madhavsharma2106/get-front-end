export function includeVariants(variantObject) {
  let variantArray = [];
  for (const property in variantObject) {
    variantArray.push(variantObject[property]);
  }
  return variantArray;
}
