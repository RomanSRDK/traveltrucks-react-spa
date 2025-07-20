import sprite from "../../assets/sprite.svg";
import css from "./Filters.module.css";

function Filters() {
  return (
    <div className={css.container}>
      {/* Location  */}
      <div className={css.locationSection}>
        <h3 className={css.sectionTitle}>Location</h3>
        <div className={css.locationInputWrapper}>
          <svg className={css.locationIcon}>
            <use href={`${sprite}#location-icon`}></use>
          </svg>
          <input type="text" className={css.locationInput} placeholder="City" />
        </div>
      </div>

      {/* Filters */}
      <div className={css.section}>
        <p className={css.filtersLabel}>Filters</p>
        {/* Vehicle equipment */}
        <div className={css.equipmentSection}>
          <h3 className={css.sectionTitle}>Vehicle equipment</h3>
          <div className={css.optionsGrid}>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#AC-icon`}></use>
              </svg>
              <span>AC</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#bathroom-icon`}></use>
              </svg>
              <span>Bathroom</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#kitchen-icon`}></use>
              </svg>
              <span>Kitchen</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#TV-icon`}></use>
              </svg>
              <span>TV</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#radio-icon`}></use>
              </svg>
              <span>Radio</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#refrigerator-icon`}></use>
              </svg>
              <span>Refrigerator</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#microwave-icon`}></use>
              </svg>
              <span>Microwave</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#gas-icon`}></use>
              </svg>
              <span>Gas</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#water-icon`}></use>
              </svg>
              <span>Water</span>
            </button>
          </div>
        </div>

        {/* Vehicle type */}
        <div className={css.vehicleTypeSection}>
          <h3 className={css.sectionTitle}>Vehicle type</h3>
          <div className={css.optionsGrid}>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#icon-bi_grid-1x2`}></use>
              </svg>
              <span>Panel Truck</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#icon-bi_grid`}></use>
              </svg>
              <span>Fully Integrated</span>
            </button>
            <button className={css.optionButton}>
              <svg className={css.optionIcon}>
                <use href={`${sprite}#icon-bi_grid-3x3-gap`}></use>
              </svg>
              <span>Alcove</span>
            </button>
          </div>
        </div>
      </div>
      <button className={css.searchButton}>Search</button>
    </div>
  );
}

export default Filters;
