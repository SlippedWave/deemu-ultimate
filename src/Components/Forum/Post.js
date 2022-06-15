import styled from "styled-components";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { db } from "../../Firebase/settings.js";
import { connect } from "react-redux";
import { getDateObject, getDateTime } from "../utilities/utilities.js";
import PostModal from "./PostModal";
import { getPostAPI, togglePostModal } from "../../store/actions";

const Post = (props) => {
  const { id, name, profile, caption, Img, timestamp, isCurrentUserPost } =
    props;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, `Posts/${id}/comments`), (snapshot) => {
      setAllComments(snapshot.docs.map((doc) => doc.data()));
    });
  });

  const postComment = async (commentToPost) => {
    const docRef = await addDoc(collection(db, `Posts/${id}/comments`), {
      profile:
        "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
      name: props.user.userFirstName,
      comment: commentToPost,
    });
  };

  const handleEdit = () => {};
  const handleClick = () => {
    postComment(comment);
    setComment("");
  };

  return (
    <>
      <Container>
        <ActorInfo>
          <div>
            <img src={profile} alt="" />
            <span>{name}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </ActorInfo>
        <span style={{ textAlight: "center", color: "#1976D2" }}>
          Creado en: {getDateTime(getDateObject(timestamp))}
        </span>
        <p>{caption}</p>
        <img src={Img} alt="" />
        <SocialActions>
          <button>
            {isCurrentUserPost ? (
              <>
                <i className="fa-solid fa-thumbs-up"></i>
                <span onClick={props.toggleModal}></span>
              </>
            ) : (
              ""
            )}
          </button>
          <button>
            <i className="fa-solid fa-comment"></i>
            <span></span>
          </button>
          <button>
            <i className="fa-solid fa-share"></i>
            <span></span>
          </button>
        </SocialActions>
        <PostComment>
          {props.user ? (
            <img
              src={
                "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"
              }
              alt=""
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt=""
            />
          )}
          <CommentInput
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escrribe un comentario público..."
            />
            <i className="fa-solid fa-face-smile"></i>
            <i className="fa-solid fa-camera"></i>

            <i className="fa-solid fa-note-sticky"></i>
          </CommentInput>
        </PostComment>
        <small>Presiona Enter para publicar</small>
        {allComments.length !== 0 &&
          allComments.map((comment, index) => (
            <Comment key={index}>
              <img src={comment.profile} alt="" />
              <div>
                <span>{comment.name}</span>
                <p>{comment.comment}</p>
              </div>
            </Comment>
          ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.2s ease;
  p {
    text-align: start;
    margin: 10px;
  }
  img {
    width: 100%;
  }
  small {
    text-align: start;
    padding: 8px 20px;
  }
`;
const ActorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }
  span {
    font-weight: bold;
  }
  svg {
    width: 28px;
    height: 28px;
  }
`;
const SocialActions = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px 0px;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  button {
    background-color: white;
    border: none;
    padding: 10px 35px;
    width: 32%;
    font-size: 15px;
    i {
      margin: 0 10px;
    }
    &:hover {
      background-color: #f0f2f5;
    }
  }
`;
const PostComment = styled.div`
  display: flex;
  gap: 10px;
  padding: 0px 10px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
  }
`;
const CommentInput = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  background-color: #f0f2f5;
  padding: 5px;
  border-radius: 50px;
  flex: 1;
  i {
    color: gray;
  }
  input {
    background-color: #f0f2f5;
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
  }
`;

const Comment = styled(PostComment)`
  margin: 10px 0;

  div {
    width: 100%;
    text-align: start;
    font-size: 14px;
    border-radius: 20px;
    padding: 8px 20px;
    background-color: #f0f2f5;
    span {
      font-weight: bold;
    }
    p {
      margin: 0;
    }
  }
`;

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(togglePostModal("flex")),
  setPost: () => dispatch(getPostAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
