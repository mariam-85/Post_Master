import PostsContainer from "../PostsContainer";
import { useEffect, useState } from 'react'
import { posts_data } from '../../data/posts'
import { Context } from '../../context'
import AddPostForm from "../AddPostForm";

export default function App() {

  const [ posts, setPosts ] = useState(posts_data);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('posts'));
    if (res) setPosts(res)
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);


  const change_like = (id) => {
    // Найти карточку по айди - метод find()
    const target_card = posts.find(el => el.id === id);

    // У найденной карточки меняем значение свойства like на противоположное
    target_card.like = !target_card.like;

    // Отследить изменение состояния (setPosts)
    setPosts([...posts]);
  }

    // Из собранных данных формировать новый пост

  const add_post = (title_value, text_value) => {
    setPosts([...posts, {
      id: Date.now(),
      title: title_value,
      text: text_value,
      like: false,
      comments: []
    }])
  }

  const add_comment = (post_id, text) => {
    const comment = {
      id: Date.now(),
      comment: text
    }

    const target_post = posts.find(el => el.id === post_id);
    target_post.comments.push(comment);
    setPosts([...posts]);
  }

  const delete_post = (post_id) => setPosts(posts.filter(el => el.id !== post_id));

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    setPosts([...posts])
  }

  // const delete_comment = (post_id, comment_id) => {
  //   setPosts(prev_state => {
  //     const target_post = prev_state.find(el => el.id === post_id);
  //     target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
  //     return [...prev_state]
  //   })
  // }


  return (
    <div>
      <Context.Provider value={{ posts, change_like, add_post, add_comment, delete_post, delete_comment }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}


