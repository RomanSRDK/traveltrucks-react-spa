import { useEffect, useState } from "react";
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
  const [campersPerPage, setCampersPerPage] = useState(4);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setCampersPerPage((prev) => prev + 4);
  };

  const visibleCampers = campers.slice(0, campersPerPage);

  return (
    <>
      {campers.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
              paddingBottom: "50px",
              padding: "0 20px 50px 20px",
            }}
          >
            <div>
              <Location />
              <Filters />
              <SearchButton />
            </div>
            <div>
              <CampersList campers={visibleCampers} />
              {campersPerPage < campers.length && (
                <LoadMoreBtn onClick={handleLoadMore} />
              )}
            </div>
          </div>
        </>
      ) : (
        "Loading...."
      )}
    </>
  );
}

export default CatalogPage;
