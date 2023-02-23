import React, { useContext } from 'react'
import style from './index.module.css'
import { Context } from '../../context';


export default function AddCommentForm({ post_id }) {

    const { add_comment } = useContext(Context);
  
    const submit = event => {
        event.preventDefault();
        const { comment } = event.target;
        add_comment(post_id, comment.value);
        comment.value = '';
    }



  return (
    <form className={style.add_comment_form} onSubmit={submit}>
        <input type="text" name='comment' placeholder='Your comment' />
        <button>Add comment</button>
    </form>
  )
}