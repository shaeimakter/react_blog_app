import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        // src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <a>
              Music
            </a>
          </span>
          <span className="postCat">
            <a>
              Life
            </a>
          </span>
        </div>
        <span className="postTitle">
          <a>
            Lorem ipsum dolor sit amet
          </a>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
