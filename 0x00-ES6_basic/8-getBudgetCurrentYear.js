function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const bdget = {};

  bdget[`income-${getCurrentYear()}`] = income;
  bdget[`gdp-${getCurrentYear()}`] = gdp;
  bdget[`capita-${getCurrentYear()}`] = capita;

  return bdget;
}
