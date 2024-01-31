import React from 'react'

const Demo = (props) => {

    const { children, title } = props;

    return (
        <div>
            {title}

            <div>
                {children}
            </div>
        </div>
    )
}

export default Demo


