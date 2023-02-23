import React, { useContext } from 'react'
import style from './index.module.css'
import { Context } from '../../context';

export default function AddPostForm() {

        const { add_post } = useContext(Context);
  
    const submit = event => {
        event.preventDefault();
        const { title, text } = event.target;
        add_post(title.value, text.value);
        title.value = '';
        text.value = '';
    }



  return (
    <form className={style.add_post_form} onSubmit={submit}>
        <input type="text" name='title' placeholder='Your title' />
        <input type="text" name='text' placeholder='Your text' />
        <button>Add post</button>
    </form>
  )
}
