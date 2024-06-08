import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";
import SearchHint from "./searchHint";
import searchContext from "../../modules/context/searchContext";

const SearchComponent = () => {
  const { changeSearchText } = useContext(searchContext);
  const navigate = useNavigate();
  const { searchHintGoods } = GetGoods();

  const handleKeyUp = (e) => {
    changeSearchText(e.target.value);
    if (e.key === "Enter") {
      navigate("/searcher", { state: { arr: searchHintGoods } });
    }
  };
  return (
    <div className="searcher_div lg:bg-white relative flex lg:justify-between bg-[#edeff2] pl-1 items-center rounded-lg lg:border w-full lg:rounded-md">
      <input
        type="text"
        className="searcher_inp outline-none w-full lg:bg-white lg:w-96 rounded-lg lg:rounded-none bg-[#edeff2] text-sm lg:text-base border-none lg:h-8 text-gray-500"
        placeholder="Искать товары и категории"
        onKeyUp={handleKeyUp}
      />
      {searchHintGoods.length !== 0 ? (
        <div className="searcher_modal">
          <SearchHint />
        </div>
      ) : null}
    </div>
  );
};
export default SearchComponent;
