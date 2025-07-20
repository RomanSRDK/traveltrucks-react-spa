import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getCamperById } from "../redux/campers/operations";
import { selectСurrentItem } from "../redux/campers/selectors";
import CamperView from "../components/CamperView/CamperView";
import CamperNav from "../components/CamperNav/CamperNav";
import Loader from "../components/Loader/Loader";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectСurrentItem);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      {camper ? (
        <>
          <div
            style={{
              padding: "50px 20px",
            }}
          >
            <CamperView camper={camper} />
            <CamperNav />
            <Outlet />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CamperDetailsPage;
