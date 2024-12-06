import "../styles/modal.scss";
import closeIcon from "../assets/x-close.svg";
import addIcon from "../assets/add.svg";

const Modal = () => {
  return (
    <div className="pre-processing-abstraction-modal-container">
      <div className="pre-processing-abstraction-modal-header-container">
        <div className="pre-processing-abstraction-modal-header-container-left">
          <div className="pre-processing-abstraction-modal-header">
            Point Load Material
          </div>
          <div className="pre-processing-abstraction-modal-header-supporting-text">
            Update your entity
          </div>
        </div>
        <div className="pre-processing-abstraction-modal-header-container-close-icon">
          <img src={closeIcon} alt="close-icon" />
        </div>
      </div>
      <div className="pre-processing-abstarction-modal-main-container">
        <div className="pre-processing-abstraction-modal-entity-name">
          Pink Matte Material
        </div>
        <div className="pre-processing-abstraction-modal-entity-img">
          {/* image link */}
        </div>
      </div>
      <div className="pre-processing-abstraction-modal-entity-change-container">
        <div className="pre-processing-abstraction-modal-entity-change-item">
          <div className="pre-processing-abstraction-modal-entity-type">
            Line weight
          </div>
          <div className="pre-processing-abstraction-modal-entity-change">
            <div className="pre-processing-abstraction-modal-entity-change-perc">
              100%
            </div>
            <div className="pre-processing-abstraction-modal-entity-change-icon">
              <img src={addIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="pre-processing-abstraction-modal-entity-change-item">
          <div className="pre-processing-abstraction-modal-entity-type">
            Point size
          </div>
          <div className="pre-processing-abstraction-modal-entity-change">
            <div className="pre-processing-abstraction-modal-entity-change-perc">
              50%
            </div>
            <div className="pre-processing-abstraction-modal-entity-change-icon">
              <img src={addIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="pre-processing-abstraction-modal-entity-change-item">
          <div className="pre-processing-abstraction-modal-entity-type">
            Color
          </div>
          <div className="pre-processing-abstraction-modal-entity-change">
            <div className="pre-processing-abstraction-modal-entity-change-color"></div>
            <div className="pre-processing-abstraction-modal-entity-change-perc">
              100%
            </div>
            <div className="pre-processing-abstraction-modal-entity-change-icon">
              <img src={addIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
