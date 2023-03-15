import React from 'react'
import './SinglePost.css'

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://media.cntraveler.com/photos/5cb63a0bc131b962ade953ad/master/w_4000,h_2670,c_limit/Banff-Canada_GettyImages-680900749.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Zeel</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fuga repellendus harum sunt quo adipisci, nisi deleniti dignissimos quod explicabo, quam unde! Voluptates mollitia aperiam sed ipsam fugiat quibusdam consectetur quod laborum? Architecto totam natus molestias. Ad esse recusandae aspernatur aperiam illum? Aliquid, deserunt ipsum! Esse doloribus quo dicta omnis culpa nostrum corrupti quia, suscipit voluptatum iste quam iusto perspiciatis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolore sequi natus, placeat mollitia consectetur, ullam et quod deleniti aperiam iste quo voluptate fugiat nostrum accusantium? Itaque sint laboriosam delectus.</p>
        </div>
    </div>
  )
}

export default SinglePost