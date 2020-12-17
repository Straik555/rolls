import React from 'react';

import './index.scss';
import HeadingBlock from '../../components/HeadingBlock';
import {useCustomStore} from "../../context/useStore";

const BlogArticle = () => {
    const {state} = useCustomStore();
    return (
        <div
            itemProp={'blogArticle'}
            itemScope
            className={'blog-article_section'}
        >
            <HeadingBlock title={'Блог'}/>
            <div
                itemProp={'contaiter'}
                itemScope
                className={'blog_container'}
            >
                <div className={'imageTitle'}>
                    <img
                        itemProp={'image'}
                        itemType={'url'}
                        itemScope
                        src={state.blog.yourBlog[0].image}
                        alt={state.blog.yourBlog[0].title}
                    >
                    </img>
                </div>
                <div
                    itemProp={'filling'}
                    itemScope
                    className={'blog_container_filling'}
                >
                    <div
                        itemProp={'filling_header'}
                        className={'blog_container_filling_header'}
                    >
                        <h4 itemProp={'name'}>
                            {state.blog.yourBlog[0].title}
                        </h4>
                        <p itemProp={'date'}>
                            {state.blog.yourBlog[0].date}
                        </p>
                    </div>
                    <div
                        itemProp={'filling_center'}
                        className={'blog_container_filling_center'}
                    >
                        <span itemProp={'text'}>
                            {state.blog.yourBlog[0].text}
                        </span>
                    </div>
                    <div
                        itemProp={'filling_bottom'}
                        className={'blog_container_filling_bottom'}
                    >
                        <amp-img
                            itemProp={'img'}
                            itemType={'url'}
                            src={state.blog.yourBlog[0].appraisal}
                            alt=""
                            width={'155'}
                            height={'21'}
                        >
                        </amp-img>
                        <p itemProp={'text'}>Комментарии</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default BlogArticle;