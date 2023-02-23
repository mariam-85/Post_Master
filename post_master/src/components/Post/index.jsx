import React, { useContext} from 'react'
import style from './index.module.css'
import { Context } from '../../context';
import CommentsContainer from '../CommentsContainer';
import { CloseOutlined } from '@ant-design/icons'



export default function Post({ id, title, text, like, comments }) {
  
  const { change_like, delete_post } = useContext(Context);


  const like_or_not = like ? 'Liked' : 'Like?';

  const like_style = [style.like_btn, like ? style.like_btn_active : ''].join(' ')



  return (

    <div className={style.post_item} >

<CloseOutlined className={style.cross_icon} onClick={() => delete_post(id)}/>

      <p>{ title }</p>
      <p>{ text }</p>
      <p 
      className={like_style} 
      onClick={() => change_like(id)}
      >
        { like_or_not }
        </p>
        <CommentsContainer comments={comments} post_id={id}/>
        

    </div>
  )
}