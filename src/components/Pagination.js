import React from "react";

export const Pagination = () => {
  return (
    <div className="pag">
      <div className="contentpag">
        <ul className="pagination pagination-lg">
          <li className="page-item" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item active">
            <span class="page-link">2</span>
          </li>
          <li className="page-item">
            <span class="page-link">3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
