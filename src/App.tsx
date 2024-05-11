import axios from "axios";
import { useEffect, useState } from "react";

interface AppType {
  id: number;
  name: string;
}

const App = () => {
  const [value, setValue] = useState("");
  const [pro, setPro] = useState<AppType[]>([]);
  const [isLoding, setIsLoding] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api-v2.elchocrud.pro/api/v1/cee29c4ec4d018336d618f99daa969c3/product-1`
      );
      setPro(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoding(false);
    }
  };

  const postData = async () => {
    try {
      const { data } = await axios.post(
        `https://api-v2.elchocrud.pro/api/v1/cee29c4ec4d018336d618f99daa969c3/product-1`,
        { name: value }
      );
      setPro(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoding(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="">
        <button onClick={postData}>add</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {isLoding ? (
        <h1>loding...</h1>
      ) : (
        <div className="">
          {pro.map((el) => (
            <h1>{el.name}</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
