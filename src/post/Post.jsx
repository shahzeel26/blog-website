import React from 'react'
import './Post.css'
function Post() {
  return (
    <div className="post">
        <img src="https://media.cntraveler.com/photos/5cb63a0bc131b962ade953ad/master/w_4000,h_2670,c_limit/Banff-Canada_GettyImages-680900749.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    Music
                </span>
                <span className="postCat">
                    Life
                </span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolorum repellendus!
            </span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus! Eum omnis illo harum officiis maiores optio, velit nemo totam qui ratione minima dignissimos nam iure est ipsam incidunt illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus! Eum omnis illo harum officiis maiores optio, velit nemo totam qui ratione minima dignissimos nam iure est ipsam incidunt illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus! Eum omnis illo harum officiis maiores optio, velit nemo totam qui ratione minima dignissimos nam iure est ipsam incidunt illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus! Eum omnis illo harum officiis maiores optio, velit nemo totam qui ratione minima dignissimos nam iure est ipsam incidunt illum!</p>
    </div>
  )
}

export default Post