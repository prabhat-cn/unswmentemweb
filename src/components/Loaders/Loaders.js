import React from "react";

export const Loaders = () => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border custom_spinner" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <style>{customSpinnerCss}</style>
    </>
  );
};

const customSpinnerCss = `
.custom_spinner {
  border-width: 4px;
  color: #BA61FF;
  width: 1.5rem;
  height: 1.5rem;
}
`;
