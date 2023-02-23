import React, { useContext } from 'react'
import style from './index.module.css'
import { Context } from '../../context';

export default function Comment({ post_id, id, comment }) {

    const { delete_comment } = useContext(Context);


  return (
    <div className={style.comment_item} onClick={() => delete_comment(post_id, id)}>


        <p>{ comment }</p>

    </div>
  )
}
