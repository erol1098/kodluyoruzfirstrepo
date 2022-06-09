import axios from "axios";

const getData = (number) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data: user } = await axios(
        `https://jsonplaceholder.typicode.com/users/${number}`
      );

      const { data: post } = await axios(
        `https://jsonplaceholder.typicode.com/posts/${number}`
      );

      resolve([{ User: user }, { Post: post }]);
    } catch (error) {
      reject("User or Post not found");
    }
  });

getData(9)
  .then((res) => res.forEach((item) => console.log(item)))
  .catch((err) => console.log(err));

export default getData;
