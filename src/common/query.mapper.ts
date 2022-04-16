function setBuildSpec(querySpec: string, entity: any) {
  const values: string[] = [];
  const valuesReplace: string[] = [];

  for (const key in entity) {
    values.push(key);
  }

  for (const i in values) {
    valuesReplace.push(`$${parseInt(i) + 1}`);
  }

  const queryString = querySpec
    .replace('<<items>>', values.join(', '))
    .replace('<<values>>', valuesReplace.join(', '));

  return {
    queryString,
    values: Object.values(entity),
  };
}

export { setBuildSpec };
