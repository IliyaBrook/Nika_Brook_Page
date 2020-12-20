import React, {Fragment} from 'react'
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import './Media.css'

export default function Media() {
    const images = [
        {
            original: './image/medium/1.jpg',
            thumbnail: './image/small/1.jpg',
        },
        {
            original: './image/medium/2.jpg',
            thumbnail: './image/small/2.jpg',
        },
        {
            original: './image/medium/3.jpg',
            thumbnail: './image/small/3.jpg',
        },
        {
            original: './image/medium/4.jpg',
            thumbnail: './image/small/4.jpg',
        },
        {
            original: './image/medium/5.jpg',
            thumbnail: './image/small/5.jpg',
        },
        {
            original: './image/medium/6.jpg',
            thumbnail: './image/small/6.jpg',
        },{
            original: './image/medium/7.jpg',
            thumbnail: './image/small/7.jpg',
        },{
            original: './image/medium/8.jpg',
            thumbnail: './image/small/8.jpg',
        },
        {
            original: './image/medium/9.jpg',
            thumbnail: './image/small/9.jpg',
        },
        {
            original: './image/medium/10.jpg',
            thumbnail: './image/small/10.jpg',
        },
        {
            original: './image/medium/11.jpg',
            thumbnail: './image/small/11.jpg',
        },
        {
            original: './image/medium/12.jpg',
            thumbnail: './image/small/12.jpg',
        },
        {
            original: './image/medium/13.jpg',
            thumbnail: './image/small/13.jpg',
        },
    ];
    return (
        <Fragment>
            <div className="gallery-wrapper">
                <ImageGallery
                items={images} />;
            </div>
            <div className="background-color"/>
        </Fragment>
    )
}

