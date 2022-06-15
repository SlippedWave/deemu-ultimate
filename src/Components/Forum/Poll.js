import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
  updateDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/settings";
import { useState, useEffect } from "react";
import { toastError, toastInfo, toastSuccess } from "../../Helpers/alerts";
import { Typography } from "@mui/material";




export const Poll = () => {
  const user = auth.currentUser;
  const usersRef = collection(db, "users");
  // Create a query against the collection.
  const q = query(usersRef, where("userEmail", "==", user.email));
  const [hasVoted, setHasVoted] = useState("");
  const [votedItemId, setVotedItem] = useState(null);
  const [currentPoll, setCurrentPoll] = useState("");

  // Persistent data array (typically fetched from the server)
  const [resData, setResData] = useState([
    { id: 0, text: "Opción 1", votes: 0 },
    { id: 1, text: "Opción 2", votes: 0 },
    { id: 2, text: "Opción 3", votes: 0 },
  ]);

  const [totalVotes, setTotalVotes] = useState(0);
  let newArr = resData;

  const calculatedWidth = (votes) => {
    return (totalVotes === 0 ? 0 : (votes / totalVotes) * 100);
  };
  const handleVote = async (item, results) => {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docm) => {
      console.log(docm.id, " => ", docm.data());

      if (item.id == docm.data().voteItemId && docm.data().hasVoted) {
        const docRef = updateDoc(doc(db, "users", docm.id), {
          hasVoted: false,
          voteItemId: null,
        })
          .then((res) => {
            let newArr = resData;
            newArr[item.id].votes = resData[item.id].votes - 1;
            setResData(newArr);
            const docRef = updateDoc(doc(db, "votes", "votesDoc"), {
              votesArr: newArr,
              totalVotes: totalVotes - 1,
            })
              .then((res) => {
                toastInfo('Voto cancelado.')
                setHasVoted(false);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      } else if (!docm.data().hasVoted) {
        const docRef = updateDoc(doc(db, "users", docm.id), {
          hasVoted: true,
          voteItemId: item.id,
        })
          .then((res) => {
            newArr[item.id].votes = resData[item.id].votes + 1;
            setResData(newArr);
            const docRef = updateDoc(doc(db, "votes", "votesDoc"), {
              votesArr: newArr,
              totalVotes: totalVotes + 1,
            })
              .then((res) => {
                toastSuccess("Voto registrado exitosamente..!");
                setHasVoted(false);
                setVotedItem(item.id);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      } else {
        toastError(
          `Ya votaste por la opción ${votedItemId + 1
          } `
        );
      }
    });
  };

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
  const getVotes = async () => {
    const votesRef = doc(db, "votes", "votesDoc");
    const docSnap = await getDoc(votesRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log("votes fetched from db first time on start");
            // setResData(docSnap.data().votesArr)
      onSnapshot(collection(db, `votes`), (snapshot) => {
        snapshot.docs.map((doc) => {
          setCurrentPoll(doc.data())
          setResData(doc.data().votesArr);
          setTotalVotes(doc.data().totalVotes);
          // serverTime= doc.data().timestamp.toDate()
          if(doc.data().timestamp.toDate() >= doc.data().timestamp.toDate().addDays(30)
          ){
            resetCollection(doc.data())
          }
          
        });
        
      });
     
    } else {
      // doc.data() will be undefined in this case
      const votesRef = collection(db, "votes");
      console.log("No such document, added to DB now!");
      setCurrentPoll({
        votesArr: [
          { id: 0, text: "Answer 1", votes: 0 },
          { id: 1, text: "Answer 2", votes: 0 },
          { id: 2, text: "Answer 3", votes: 0 },
        ],
        totalVotes: 0,
        timestamp: serverTimestamp(),
      })
      await setDoc(doc(votesRef, "votesDoc"), {
        votesArr: [
          { id: 0, text: "Answer 1", votes: 0 },
          { id: 1, text: "Answer 2", votes: 0 },
          { id: 2, text: "Answer 3", votes: 0 },
        ],
        totalVotes: 0,
        timestamp: serverTimestamp(),
      });

      console.log("votes pushed first time");
    }
  };

  const hasVotedUser = async () => {

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (docm) => {
      console.log(docm.id, " => ", docm.data());
      setHasVoted(docm.data().hasVoted);
      setVotedItem(docm.data().voteItemId);
      console.log(votedItemId)
    });
  };

  const resetCollection=async(currentPoll)=>{
      console.log('reset')

      const lastvotesRef = collection(db, "votes");
     
      await setDoc(doc(lastvotesRef, "lastVotes"),currentPoll);
      console.log("last poll added to DB now!");

      // del
      await deleteDoc(doc(db, "votes", "votesDoc"));

  }

  useEffect(() => {
    hasVotedUser();
    getVotes();

  }, [hasVoted, votedItemId]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="pollWrapper"
    >
      {resData.length !== 0 &&
        resData.map((singleRes) => {
          return (
            <>
              <div
                onClick={() => handleVote(singleRes, resData)}
                style={{
                  backgroundColor: "#D3D3D3",
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "50px",
                  margin: "10px",
                }}
                className="poll"
              >
                <div
                  style={{
                    backgroundColor: singleRes.id === votedItemId ? "#F85C1C" : "#1976D2",
                    width: `${calculatedWidth(singleRes.votes)}%`,
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <h3 style={{ color: "white" }}>{singleRes.text}</h3>
                </div>
                <h3
                  style={{
                    border: "3px",
                    borderColor: "black",
                    borderRadius: "5px",
                    color: "#1976D2",
                  }}
                >
                  {calculatedWidth(singleRes.votes).toFixed(2)}%
                </h3>
              </div>
            </>
          );
        }
        )
      } 
      {
        hasVoted ?
        <Typography>
          Has votado por la opción {votedItemId + 1}
        </Typography>
        :
        <Typography>
          Haz click en una de las barras para votar.
        </Typography>
      }
    </div>
  );
};
