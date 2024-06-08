import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";
import searchContext from "../../modules/context/searchContext";

const SearchHint = () => {
  const { searchText } = useContext(searchContext);
  const { searchHintGoods } = GetGoods();

  useEffect(() => {}, [searchText]);

  return (
    <>
      {searchHintGoods &&
        searchHintGoods.map((item, i) => (
          <Link to={`/product?id=${item.id}`}>
            <div key={i} className="flex hover:bg-[#edeff2] py-1 cursor-pointer">
              <img src={item.media[0]} className="w-14 h-14 rounded-md" alt="" />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
    </>
  );
};
export default SearchHint;
