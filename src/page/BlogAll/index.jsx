import React from 'react';

import './index.scss';
import HeadingBlock from '../../components/HeadingBlock';
import {blogAllList} from './list';
import {Link} from "react-router-dom";
import {useCustomStore} from "../../context/useStore";
import {ACTIONS} from "../../context/providerContext";

const BlogAll = ({blogs = blogAllList}) => {
    const{dispatch} = useCustomStore();
    return(
        <div
            itemProp={'blogAll'}
            itemScope
            className={'blog-all'}
        >
            <HeadingBlock
                title={'Блог'}
                svg={true}
            />
            <div
                itemProp={'blogAllContent'}
                itemScope
                className="blog-all_content"
            >
                {
                    blogs.map(blog =>
                        <Link
                            to={`blog/${blog.id}`}
                            itemProp={'list'}
                            className={'list'}
                            key={blog.id}
                            onClick={() => dispatch({type: ACTIONS.ADD_TO_BLOG, payload: blog})}
                        >
                            <div
                                itemProp={'list_context'}
                                className={'list_context'}
                            >
                                <amp-img
                                    itemType={'url'}
                                    itemProp={'image'}
                                    src={blog.image}
                                    alt={blog.title}
                                    width={'200'}
                                    height={'259'}
                                >
                                </amp-img>
                                <div
                                    itemProp={'footer'}
                                    className={'footer'}
                                >
                                    <h1
                                        itemProp={'name'}
                                    >
                                        {blog.title}
                                    </h1>
                                    <p
                                        itemProp={'date'}
                                    >
                                        {blog.date}
                                    </p>
                                    {
                                        blog.description && (
                                            blog.description.map(el =>
                                                <li
                                                    itemProp={'description'}
                                                    itemScope
                                                    key={el.id}
                                                >
                                                        <span
                                                            itemProp={'text'}
                                                        >
                                                            {el.text}
                                                        </span>
                                                </li>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default BlogAll;