export const mapToAllData = (data) => {
  return data.map((responseItem) => {
    const { index, symbol, name, image } = responseItem;

    return {
      index,
      symbol,
      name,
      image,
    };
  });
};
