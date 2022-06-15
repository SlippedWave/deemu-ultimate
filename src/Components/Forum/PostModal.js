import styled from "styled-components";
import { connect, useSelector } from "react-redux";

import { useState } from "react";

import { db } from "../../Firebase/settings.js";
import { collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { togglePostModal, UploadPost } from "../../store/actions";
import { toastInfo } from "../../Helpers/alerts.js";

const PostModal = (props) => {
  const user = useSelector((state) => state.userState.user);
  // alert(user?.userFirstName)

  const [posts, setPosts] = useState([]);
  const countPost = () => {
    onSnapshot(collection(db, "Posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return posts.length;
  };
  const [img, setImg] = useState(null);
  const [caption, setCaption] = useState("");
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      toastInfo(`Esto no es una imagen, el archivo es ${typeof image}`);
      return;
    }

    setImg(image);
  };
  const handlePostClick = (e) => {
    e.preventDefault();

    props.uploadPost({
      user: {
        name: user?.userFirstName,
        profile:
          "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png",
        // props.user.photoURL,
      },
      postImg: img,
      postCaption: caption,
      key: countPost() === 0 ? 1 : countPost() + 1,
      timestamp: serverTimestamp(),
      createdBy: user?.userEmail,
    });
    reset();
  };
  const reset = () => {
    setImg("");
    setCaption("");
    props.toggleModal();
  };
  const handleClose = (e) => {
    e.preventDefault();
    props.toggleModal();
  };
  return (
    <>
      <Container style={props.display}>
        <Modal>
          <ModalHeader>
            <h1>Crear post</h1>
            <button onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </ModalHeader>
          <CreatePost>
            <ActorInfo>
              {user ? (
                <>
                  <img
                    src={
                      "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"
                      // props.user.photoURL
                    }
                    alt=""
                  />
                  <div>
                    <span>{user?.userFirstName}</span>

                    <button>
                      <i className="fa-solid fa-user-group"></i>
                      Público
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt=""
                  />
                  <div>
                    <span>Name</span>

                    <button>
                      <i className="fa-solid fa-user-group"></i>
                      Friends
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </>
              )}
            </ActorInfo>

            {user ? (
              <textarea
                placeholder={`¿Qué estás pensando, ${user?.userFirstName
                  // .split(" ")[0]
                  }?`}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                cols="30"
                rows="5"
              ></textarea>
            ) : (
              <textarea
                placeholder="What's on your mind? Name"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                cols="30"
                rows="5"
              ></textarea>
            )}
            <ImgPost>
              <small>Inserta en tu post</small>
              <label htmlFor="upload__img">
                <i className="fa-solid fa-image"></i>
                Sube una imagen
              </label>
            </ImgPost>
            <input
              type="file"
              name="upload__img"
              accept="image/png, image/gif, image/jpeg"
              id="upload__img"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <PostImg>
              {img && (
                <div>
                  <img src={URL.createObjectURL(img)} alt="" />
                  <button onClick={() => setImg("")}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              )}
            </PostImg>
            <input
              type="submit"
              value="Post"
              onClick={handlePostClick}
              disabled={caption.length === 0 || img === ""}
              style={{
                backgroundColor:
                  caption.length === 0 || img === "" ? "lightblue" : "#1b74e4",
              }}
            />
          </CreatePost>
        </Modal>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.form`
  border-radius: 12px;
  background-color: white;
  position: relative;
  max-width: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const ModalHeader = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  h1 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0px;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 6px 10px;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
    i {
      font-size: 18px;
      color: gray;
    }
  }
`;
const ActorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 14px;
      font-weight: bold;
    }
    button {
      display: flex;
      gap: 5px;
      padding: 5px;
      font-size: 12px;
      border: none;
      border-radius: 8px;
      &:hover {
        background-color: gray;
        cursor: pointer;
      }
    }
  }
`;
const CreatePost = styled.div`
  input {
    margin: 10px 0;
    padding: 12px 0;
    border: none;
    border-radius: 10px;

    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: white;
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }
  textarea {
    width: 100%;
    resize: none;
    height: 100%;
    border: none;
    font-size: 24px;
    outline: none;
    margin: 10px 0;
  }
`;
const ImgPost = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 15px 10px;
  border-radius: 12px;
  justify-content: space-between;
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: gray;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: lightgray;
    }
  }
`;

const PostImg = styled.div`
  position: relative;
  div {
    display: flex;
    justify-content: flex-start;
    img {
      padding: 10px;
      height: 150px;
      max-width: 500px;
      object-fit: contain;
    }
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 6px 10px;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
    i {
      font-size: 18px;
      color: gray;
    }
  }
`;

const mapStateToProps = (state) => ({
  display: state.togglePostModalState,
  user: state.userState.user,
  imgURL: state.ImgState.imgURL,
  Loading: state.loadingState,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(togglePostModal("none")),
  uploadPost: (payload) => dispatch(UploadPost(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
