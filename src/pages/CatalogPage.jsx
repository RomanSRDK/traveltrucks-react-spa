import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../redux/campers/selectors";
import { getAllCampers } from "../redux/campers/operations";

import Location from "../components/Location/Location";
import Filters from "../components/Filters/Filters";
import SearchButton from "../components/SearchButton/SearchButton";
import CampersList from "../components/CampersList/CampersList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectItems);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      {!campers.length ? (
        "Loading...."
      ) : (
        <>
          <Location />
          <Filters />
          <SearchButton />
          <CampersList campers={campers} />
          <LoadMoreBtn />
        </>
      )}
    </>
  );
}

export default CatalogPage;
