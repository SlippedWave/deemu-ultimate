import styled from "styled-components";
import Post from "./Post";
import PostModal from "./PostModal";
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../Firebase/settings.js";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { getPostAPI, togglePostModal } from "../../store/actions";

const MainSection = (props) => {
  const [post, setPost] = useState([]);
  const user = useSelector(state => state.userState.user)

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  useEffect(() => {
    props.setPost();
    onSnapshot(collection(db, "Posts"), (snapshot) => {
      setPost(
        snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort(dynamicSort("key"))
      );
    });
  }, []);
  return (
    <>
      <Container>
        <CreateAPost>
          <UpperSection>
            <div>
              {props.user ? (
                <img src={'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'} alt="" />
              ) : (
                <img
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  alt=""
                />
              )}
            </div>
            <button onClick={props.toggleModal}>
              {props.user
                ? `¿Qué estás pensando, ${
                    props.user.userFirstName
                    // .split(" ")[0]
                  }?`
                : `¿Qué estás pensando, Usuario?`}
            </button>
          </UpperSection>
          <LowerSection>
           
            <button>
              <i className="fa-solid fa-camera"></i>
              Foto/vídeo
            </button>
            
          </LowerSection>
        </CreateAPost>
        {props.Loading && (
          <Spinner>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </Spinner>
        )}
        {post.length !== 0 ? (
          post.map((post, index) => {
            return (
              <Post
                key={index}
                name={post.user.name}
                profile={post.user.profile}
                caption={post.caption}
                Img={post.img}
                id={post.id}
                timestamp={post.timestamp}
                isCurrentUserPost={post.createdBy===user?.userEmail}

              />
            );
          })
        ) : (
          <Spinner>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </Spinner>
        )}

        <PostModal />
      </Container>
    </>
  );
};

const CreateAPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Container = styled.div`
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
const UpperSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
    margin-right: 8px;
  }
  button {
    background-color: #f0f2f5;
    height: 40px;
    border: 1px solid white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 16px;
    color: gray;
    flex: 1;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
  }
`;
const LowerSection = styled.div`
  display: flex;
  border-top: 1px solid gray;
  margin: 0px 30px;
  padding: 5px 0px;
  justify-content: space-between;
  @media (max-width: 560px) {
    margin: 8px;
    padding: 8px;
  }

  button {
    padding: 15px 10px;
    border-radius: 10px;
    background-color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #f0f2f5;
    }
    i {
      padding: 5px;
    }
    @media (max-width: 560px) {
      font-size: 12px;
    }
    @media (max-width: 460px) {
      font-size: 10px;
    }
  }
`;

const mapStateToProps = (state) => ({
  user: state.userState.user,
  posts: state.postState,
  Loading: state.loadingState,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(togglePostModal("flex")),
  setPost: () => dispatch(getPostAPI()),
});
const Spinner = styled.div`
  padding-bottom: 20px;
`;
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
