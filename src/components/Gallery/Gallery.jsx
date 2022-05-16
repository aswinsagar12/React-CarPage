import React from 'react'
import './Gallery.scss'
import { points } from '../../Data'

function Gallery({ src, index, columnOffset }) {
    const values = points[index];
    if (!values) return null;
    const [row, column, spanRow, spanColumn] = values;

    const getScrollindex = () => {
        if (index === 1 || index === 4) return -1
        if (index === 0 || index === 3) return 0
        return 1;
    }

    return (
        <div className="gallery-item"
            data-Scroll
            data-scroll-speed={getScrollindex()}

            style={{
                gridArea: `${row} / ${column + columnOffset}
                /span ${spanRow} / span ${spanColumn}`,
            }}>
            <div className="gallery-item-image">
                <div className="gallery-item-img-inner"
                    style={{ backgroundImage: `url(${src})` }} >
                </div>
            </div>

        </div >
    )
}

export default Gallery