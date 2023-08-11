import css from "./ImageModal.module.css";
const ImageModalWindow = ({ modal, setModal }) => {
  const { imgSrc, imgName, modalState } = modal;
  return (
    <div
      className={(modalState && css.modal_open) || css.modal_close}
    >
      <span
        className={css.modal_close_button}
        onClick={() => setModal({ ...modal, modalState: false })}
      >
        &times;
      </span>
      <div className={css.modal_dialog}>
        <div className={css.modal_content}>
          <div className={css.header}>
            <h1>{imgName}</h1>
          </div>
          <div className={css.body}>
            <img src={imgSrc} alt={imgName} />
          </div>
          <div className={css.footer}>
            CopyRight &copy; callor@callor.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModalWindow;
