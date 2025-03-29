import React, { useState } from 'react';

const Languages = ({ onClose }: any) => {
  const [contentVisible, setContentVisible] = useState(true);

  const handleClose = () => {
    setContentVisible(false);
    onClose(); // Call the onClose function passed from parent component
  };

  return (
    <>
      {contentVisible && (
        <div className="languages">
          <div className="languages-content">
            {/* Your language selection content */}
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Languages;
