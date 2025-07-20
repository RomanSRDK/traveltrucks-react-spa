import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
    >
      <button onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
