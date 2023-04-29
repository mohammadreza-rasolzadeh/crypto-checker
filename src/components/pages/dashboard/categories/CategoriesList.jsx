import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { fetchCategoriesList } from "../../../../reducers/coinSlice";
import { CategoryItem, CategoriesListHeader, CategoriesListTitle } from "./";

const CategoriesList = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.cryptoCurrency.categories);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <CategoriesListTitle />
      <Box sx={{ pt: 2 }}>
        <CategoriesListHeader />
        <Box sx={{ marginTop: "10px" }}>
          {categories?.slice(0, 5).map((category, index) => (
            <CategoryItem key={index} index={index} category={category} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoriesList;
