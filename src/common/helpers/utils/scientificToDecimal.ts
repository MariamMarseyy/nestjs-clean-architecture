export function scientificToDecimal(scientificNotation: string): string {
  if (scientificNotation.includes('e')) {
    const [coefficient, exponent] = scientificNotation.split('e');
    const decimalCoefficient = parseFloat(coefficient).toString();
    const parsedExponent = parseInt(exponent, 10);

    if (parsedExponent >= 0) {
      return (
        decimalCoefficient +
        '0'.repeat(
          parsedExponent -
            (decimalCoefficient.includes('.')
              ? decimalCoefficient.length - decimalCoefficient.indexOf('.') - 1
              : 0),
        )
      );
    } else {
      const zeros = '0'.repeat(Math.abs(parsedExponent) - 1);
      return `0.${zeros}${decimalCoefficient.replace('.', '')}`;
    }
  }
  return scientificNotation;
}
