import React, { useState } from 'react';

const AccordionItem = ({ handleClick, activeAccordionNumber, itemNumber, title, content }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleItemClick = () => {
        handleClick(itemNumber);
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="accrodion-saf-stan">
            <div onClick={handleItemClick} className={`acc-saf-up ${isExpanded ? 'expanded' : ''}`}>
                {title}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto transition-transform shrink-0"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.7108 8.71294C19.3201 8.32241 18.6867 8.32241 18.296 8.71294L12.0038 15.002L5.71161 8.71294C5.32092 8.32241 4.68749 8.32241 4.2968 8.71294C3.90611 9.10346 3.90611 9.73663 4.2968 10.1272L10.589 16.4163C11.3704 17.1973 12.6372 17.1973 13.4186 16.4163L19.7108 10.1272C20.1015 9.73663 20.1015 9.10346 19.7108 8.71294Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            {activeAccordionNumber === itemNumber ? <p>{content}</p> : null}
        </div>
    );  
};

export default AccordionItem;
