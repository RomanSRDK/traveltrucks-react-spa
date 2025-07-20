import { ScaleLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderBackdrop}>
      <ScaleLoader
        loading
        size={60}
        speedMultiplier={2}
        color={"var(--color-button)"}
      />
    </div>
  );
};

export default Loader;
