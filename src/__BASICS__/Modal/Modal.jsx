import React from 'react'

const Modal = (props) => {
    const { 
        children, 
        state, 
        chgModalState,
        title,
        img
        /* showTitle */
    } = props
    return (
        <>
            {state &&
                <div className='overlay'>
                    <div className='cont-modal'>

                        {title && //or showTitle
                            <div className='cont-modal_header'>
                                <h2>{title}</h2>
                                <hr/>
                            </div>
                        }

                        {img && 
                            <div className='cont-modal_img'>
                                <img src={img} alt={`img ${title}`}/>
                            </div>}

                        <button
                            className='cont-modal_btn'
                            onClick={()=>chgModalState(false)}
                        >X
                        </button>


                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal