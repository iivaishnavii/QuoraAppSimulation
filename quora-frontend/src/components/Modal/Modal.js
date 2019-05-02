import React from "react";


const modal = ({ handleClose, show, children }) => {
 // const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div >
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default modal;

