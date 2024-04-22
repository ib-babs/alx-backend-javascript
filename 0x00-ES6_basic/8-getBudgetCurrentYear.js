function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const [incomeKey, gdpKey, capitaKey] = [
    `income-${getCurrentYear()}`,
    `gdp-${getCurrentYear()}`,
    `capita-${getCurrentYear()}`,
  ];

  budget[incomeKey] = income;
  budget[gdpKey] = gdp;
  budget[capitaKey] = capita;

  return budget;
}
