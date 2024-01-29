import React from 'react';
import './offcanvas.scss';

const offcanvas=()=>{

    return (
      <>
        
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className='m-btn'
          >
            Menu
          </button>

          <div
            className="offcanvas offcanvas-end canvas"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"

          >
            <div className="offcanvas-header ">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">Hello</div>
          </div>
       
      </>
    );

}
export default offcanvas;