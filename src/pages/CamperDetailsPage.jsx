import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCamperById } from "../redux/campers/operations";
import { selectItems } from "../redux/campers/selectors";
import CamperView from "../components/CamperView/CamperView";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dhgjf = useSelector(selectItems);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return <>{dhgjf.length > 0 && <CamperView camper={dhgjf} />}</>;
}

export default CamperDetailsPage;
