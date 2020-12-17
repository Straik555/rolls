import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

import './index.scss';
import {mainBlogList} from '../list';

const MainBlog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={'main-blog'}>
            <Slider {...settings}
                className={'slide-block'}
            >
                {
                    mainBlogList.map(el =>
                        <div
                            key={el.id}
                            className={'list'}
                        >
                            <div className={'list_left'}>
                                <img src={el.image} alt=""/>
                            </div>
                            <div className={'list_right'}>
                                <div className={'top'}>
                                    <h1>Ресторан <span>24Rolls</span> открылся в 2016 году</h1>
                                    <p>{el.description}</p>
                                </div>
                                <Link
                                    className={'bottom'}
                                    to={'/blog'}
                                >
                                    <button>
                                        Блог
                                    </button>
                                </Link>
                            </div>

                        </div>
                    )
                }
            </Slider>
        </div>
    );
}

export default MainBlog;