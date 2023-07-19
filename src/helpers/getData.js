import MOCK_DATA from "../data/MOCK_DATA.json"

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA)
    }, 500);
  });
}