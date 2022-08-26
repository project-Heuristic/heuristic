import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Session } from "../../../assets/sessions.svg";
import { TeacherContext } from "../../../context/teacherContext";
import { useUserAuth } from "../../../context/userAuthContext";
import Cards from "../Cards/Cards";
import { Multiselect } from "multiselect-react-dropdown";
import "./dashboard.scss";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createUserExam } from "../../../sevices/service.js";
import userDataService from "../../../sevices/service.js";
import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "85%",
  bgcolor: "background.paper",
  border: "2px solid transparent",
  boxShadow: 24,
  p: 0,
};
const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid transparent",
  boxShadow: 24,
  width: "30%",
  borderRadius: "1rem",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  height: "50%",
  p: 0,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "50%",
  bgcolor: "none",
  borderRadius: "50px !important",
  border: "2px solid transparent",

  boxShadow: 24,
  p: 0,
};

export default function Dashboard() {
  const student = useContext(TeacherContext);
  // userDataService

  console.log("////////");
  console.log(student);
  const sendData = async (array, skills) => {
    console.log("getting data");
    console.log(array, skills);
    const examData = { array, skills, studentId: student.Id };
    try {
      console.log("Exam🙏 data");
      student.examData = examData;
      console.log(student);
      const data = await userDataService.updateUser(student.Id.student);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(student);
  console.log("⚡⚡⚡⚡⚡");
  const { user } = useUserAuth();
  console.log("👍👍👍👻👻👻" + student.group);
  // console.log(student);

  const navigate = useNavigate();
  const [students, setNewStudets] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(true);
  const [assessmentTaken, setAssessmentTaken] = useState(false);
  const [problemsChoosen, setProblemsChoosen] = useState(false);

  const [exam, setExam] = useState(false);

  const questions = [
    {
      text: " In my study environment, it is most important to me..",
      options: [
        {
          id: 0,
          text: " To help friends and to be in a peaceful environment.  . ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "To feel that my friends admire me and to be free from rigid rules",
          isCorrect: false,
        },
        {
          id: 2,
          text: "To know exactly what is expected of me and to finish one task before moving to another",
          isCorrect: false,
        },
        {
          id: 3,
          text: "To get things done and to see results. ",
          isCorrect: true,
        },
      ],
    },
    {
      text: "In my study environment, it is least important to me... ",
      options: [
        {
          id: 0,
          text: "To help friends and to be in a peaceful environment",
          isCorrect: true,
        },
        {
          id: 1,
          text: "To feel that my friends admire me and to be free from rigid rules",
          isCorrect: false,
        },
        {
          id: 2,
          text: "To know exactly what is expected of me and to finish one task before moving to another. ",
          isCorrect: false,
        },
        {
          id: 3,
          text: " To get things done and to see results. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: "When someone offers an opinion or conclusion and I disagree, I am most likely to...",
      options: [
        { id: 0, text: "Tell them that I disagree", isCorrect: true },
        { id: 1, text: "Say something humorous.", isCorrect: false },
        { id: 2, text: "Ask for more informationn", isCorrect: false },
        { id: 3, text: "Nod and say nothing.", isCorrect: false },
      ],
    },
    {
      text: " When someone offers an opinion or conclusion and I disagree, I am least likely to... ",
      options: [
        { id: 0, text: "Tell them that I disagree. ", isCorrect: false },
        { id: 1, text: "Say something humorous", isCorrect: true },
        { id: 2, text: "Ask for more information. ", isCorrect: false },
        { id: 3, text: "Nod and say nothing. ", isCorrect: false },
      ],
    },
    {
      text: "When I am working on a team and we encounter a difficulty of some kind, I am most likely to say...",
      options: [
        {
          id: 0,
          text: "Lighten up! Just go with the flow! ",
          isCorrect: false,
        },
        { id: 1, text: "Let's make a decision! ", isCorrect: true },
        {
          id: 2,
          text: "How do you feel? I'd like to make sure that everyone is comfortable. ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Let's consider this more carefully? Do we have all of the data we need? ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " When I am working on a team and we encounter a difficulty of some kind, I am least likely to say...",
      options: [
        {
          id: 0,
          text: "Lighten up! Just go with the flow! ",
          isCorrect: false,
        },
        { id: 1, text: "Let's make a decision! ", isCorrect: true },
        {
          id: 2,
          text: "How do you feel? I'd like to make sure that everyone is comfortable. ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Let's consider this more carefully? Do we have all of the data we need? ",
          isCorrect: false,
        },
      ],
    },
    {
      text: "My attitude towards detail work — like research and data analysis — is most often... ",
      options: [
        {
          id: 0,
          text: "Great. I enjoy research and analysis. ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "If it will get better and faster results, I'll do it.  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "If it will make others think more highly of me, I'll do it. . ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "If it will help other people or make things easier, I'll do it. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " My attitude towards detail work — like research and data analysis — is least often...  ",
      options: [
        {
          id: 0,
          text: "Great. I enjoy research and analysis. ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "If it will get better and faster results, I'll do it.  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "If it will make others think more highly of me, I'll do it. . ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "If it will help other people or make things easier, I'll do it. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " When I am at an event with many people I have not yet met present, I am most likely to...   ",
      options: [
        {
          id: 0,
          text: "Find a small group of people with whom I am already comfortable and speak with them in quiet conversation.  ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Seek a good vantage point to observe the event and sit quietly unless someone speaks to me. .  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Meet and talk with as many people as possible before the event is over.  ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Go to the people I need to speak with to fulfill my purpose for attending. . ",
          isCorrect: false,
        },
      ],
    },

    {
      text: " When I am at an event with many people I have not yet met present, I am least likely to...   ",
      options: [
        {
          id: 0,
          text: "Find a small group of people with whom I am already comfortable and speak with them in quiet conversation.  ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Seek a good vantage point to observe the event and sit quietly unless someone speaks to me. .  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Meet and talk with as many people as possible before the event is over.  ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Go to the people I need to speak with to fulfill my purpose for attending. . ",
          isCorrect: false,
        },
      ],
    },
  ];
  const questions2 = [
    {
      text: "Do you hesitate to communicate with strangers",
      id: 1
    },
  
    {
      text: "Are u comfortable  to communicate with new/old friends ",
  
      id: 2
    },
    {
      text: "Do you give your opinion on a topic in group",
  
      id: 3
  
    },
    {
      text: " Do you take friends opinion in decision making ",
      id: 4
    },
    {
      text: "Do you  communicate effortlessly on a new topic?",
      id: 5
    },
    {
      text: "Are you good in sales /marketing? ",
      id: 6
    },
    {
      text: "Do you take initiative in problem solving by communication",
      id: 7
    },
    {
      text: "Do you appreciate when others communicate?",
      id: 8
    },
  ]
  const skills = [
    {
      skill: "Avoiding Aggressiveness",
      id: 1,
    },
    {
      skill: "Deterioting Subnissiveness",
      id: 2,
    },
    {
      skill: "Self Reflection",
      id: 3,
    },
    {
      skill: "Effective Communication",
      id: 4,
    },
    {
      skill: "Assertive Communication",
      id: 5,
    },
    {
      skill: "Verbal Communication",
      id: 6,
    },
  ];
  const group3 = [
    {
      videos: [
        {
          id: 1,
          link: "https://www.youtube.com/embed/NY1u3p0Hw7A",
        },
        {
          id: 2,
          link: "https://www.youtube.com/embed/vlwmfiCb-vc",
        },
        {
          id: 3,
          link: "https://www.youtube.com/embed/TQ33fPD7ntA",
        },
        {
          id: 4,
          link: "https://www.youtube.com/embed/6s3E9xp_qdE",
        },
        {
          id: 5,
          link: "https://www.youtube.com/embed/c37dudFXmzA",
        },
        {
          id: 6,
          link: "https://www.youtube.com/embed/-AtnrOYflhc",
        },
      ],
    },
  ];

  const Contents =[
    {
        type:"kids",
        videos:[
            {
                id: 1,
                link: "https://www.youtube.com/embed/TIAyxvL54F0",
              },
              {
                id: 2,
                link: "https://www.youtube.com/embed/DR-cfDsHCGA",
              },
              {
                id: 3,
                link: "https://www.youtube.com/embed/vlwmfiCb-vc",
              },
              {
                id: 4,
                link: "https://www.youtube.com/embed/F-A0QwNjZxo",
              },
              {
                id: 5,
                link: "https://www.youtube.com/embed/oUNZhBwJkKU",
              },
              {
                id: 6,
                link: "https://www.youtube.com/embed/F-A0QwNjZxo",
              },
        ],
        

    },
    {
        type:"teenagers",
        videos:[
            {
                id: 1,
                link: "https://www.youtube.com/embed/Bk7MWcPjdUM",
              },
              {
                id: 2,
                link: "https://www.youtube.com/embed/6s3E9xp_qdE",
              },
              {
                id: 3,
                link: "https://www.youtube.com/embed/8hYTPl7MkiA",
              },
              {
                id: 4,
                link: "https://www.youtube.com/embed/6s3E9xp_qdE",
              },
              {
                id: 5,
                link: "https://www.youtube.com/embed/c37dudFXmzA",
              },
              {
                id: 6,
                link: "https://www.youtube.com/embed/-AtnrOYflhc",
              },
        ],
        books:[
            {
                id:1,
                bookName:'Name',
                image:'htttps://i.pravata.cc'
            },
            {
                id:1,
                bookName:'Name',
                image:'htttps://i.pravata.cc'
            }
            ,
            {
                id:1,
                bookName:'Name',
                image:'htttps://i.pravata.cc'
            }
        ]

    },
]

  const [options] = useState(skills);

  // Helper Functions
  const checkStudent = () => {
    console.log(+student.group);
    let age = +student.group;
    console.log("age🙏🙏🙏" + age);
    if (age < 3) {
      // setExam(false)
      console.log("age less than 3");
      return age;
    }
  };
  checkStudent();
  /* A possible answer was clicked */

  //array wanna fetch the questions to the database
  const [array, setArray] = useState([]);
  const [skillsImprove, setSkillImprove] = useState([]);
  console.log(array);
  // console.log(array);
  const optionClicked = (isCorrect, value) => {
    console.log(value);
    setArray([value, ...array]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open2);
  };
  /* Resets the game back to default */
  const submitAssessment = () => {
    setScore(0);
    setNewStudets(false);
  };

  console.log(skillsImprove);
  ///assesment

  const [value, setValue] = React.useState(2);
  console.log(value);

  return (
    <>
      {end ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <>
                {!assessmentTaken && student.group >= 3 ? (
                  <div className="assessment">
                    {showResults ? (
                      /* 4. Final Results */
                      <div className="final-results">
                        <b>
                          Step 1 <br />
                          complete
                        </b>
                        <iframe src="https://embed.lottiefiles.com/animation/50465"></iframe>
                        <h4>Choose Skills You want to improve </h4>
                        <button
                          onClick={() => {
                            setAssessmentTaken(true);
                            // setData(...data,array);
                          }}
                        >
                          Step 2 <i class="ri-arrow-right-line"></i>
                        </button>
                      </div>
                    ) : (
                      /* 5. Question Card  */
                      <div className="question-card">
                        <h1 className="head">
                          Take Small Assessment To continue
                        </h1>

                        {/* 2. Current Score  */}
                        <h2 className="qoq">
                          Question: {currentQuestion} Out of{questions.length}
                        </h2>

                        {student.group == 4 ? (
                          <>
                            <h3 className="question-text">
                              {questions[currentQuestion].text}
                            </h3>

                            <Rating
                              name="simple-controlled"
                              value={value}
                              className="rating"
                              onChange={(event, newValue) => {
                                setValue(newValue);
                                optionClicked(true, newValue);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <h3 className="question-text">
                              {questions[currentQuestion].text}
                            </h3>

                            <ul>
                              {questions[currentQuestion].options.map(
                                (option) => {
                                  return (
                                    <li
                                      key={option.id}
                                      value={option.id}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        optionClicked(option.isCorrect, option);
                                      }}
                                    >
                                      {option.text}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="choose_statement">
                    <h1>Choose Skills You want to improve </h1>
                    {/* <small>choose your options from input box </small> */}
                    <Multiselect
                      className="selector"
                      options={options}
                      displayValue="skill"
                      onSelect={(e) => {
                        setSkillImprove(e);
                      }}
                    ></Multiselect>
                    <b className="ottt">Anything More You want to share</b>
                    <textarea></textarea>
                    <button
                      onClick={() => {
                        setEnd(false);
                        // setAssessmentTaken(true);
                        setOpen2(true);
                        sendData(array, skillsImprove);
                      }}
                    >
                      Finish
                    </button>
                  </div>
                )}
              </>
              )
            </Box>
          </Modal>
        </Backdrop>
      ) : (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Box sx={style3} className="done_loti">
              <iframe src="https://embed.lottiefiles.com/animation/80036"></iframe>
              <button>Explore Your Content</button>
            </Box>
          </Backdrop>
          <div className="MainDash">
            <div className="main">
              <b>Students Panel</b>

              <p>Welcome {student.Name}</p>

              <div
                className="profile"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/students/profile")}
              >
                <i class="ri-notification-2-fill"></i>
                <p>{student.Name}</p>
                <img src={student.profileImg.selectFile} alt="" />
              </div>
              <Cards></Cards>
              <h4>Video Recommendation </h4>
              <div className="videos">
              {
                student.group < 3 ?   <>
                {Contents[0].videos.map((video) => {
                  return (
                    <div className="video">
                      <iframe
                        width="560"
                        height="315"
                        src={video.link}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  );
                })}
            
            </>:
              <>
              {Contents[1].videos.map((video) => {
                return (
                  <div className="video">
                    <iframe
                      width="560"
                      height="315"
                      src={video.link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                );
              })}
          
          </>
              }
              
             
              </div>

              {student.group >= 3 ? (
                <>
                  <h4>Recommended Books</h4>
                  <div className="Books">
                    {Contents[1].books.map((book) => {
                      console.log(book.bookName);
                      return (
                        <div className="book">
                          <img src={book.image} alt={book.bookName}></img>
                          <strong>{book.bookName}</strong>
                          <p>{book.about}</p>
                          <a href="https://article.com" target="_blank">
                            Book Link
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                ""
              )}

              <h4>Others </h4>
              <p>Some extra Activities</p>
              <div className="club">
                <div className="club-img">
                  <img
                    src="https://media.istockphoto.com/vectors/icon-of-paper-plane-white-plane-on-a-blue-background-vector-id524018928?k=20&m=524018928&s=612x612&w=0&h=473R1ru_6BHA8mW_dlhaAN0_NJhkFV6r6iHUZ1B50jA="
                    alt="club"
                  ></img>
                </div>
                <h5>Speaking Club</h5>
                <p>Lorem ipsum dolor sit amet lobhhj</p>
                <a href="https://t.me/+IPbHdfOVvAU2MjFl" target={"_blank"}>
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>

    //     <>
    //       {students && !assessmentTaken && +student.group >= 3 ? (
    //         <>
    //           {end &&!assessmentTaken ? (
    //             <div className="assessment">
    //               {/* 1. Header  */}
    //               {/* 3. Show results or show the question game  */}
    //               {showResults ? (
    //                 /* 4. Final Results */
    //                 <div className="final-results">
    //                   <b>you score</b>
    //                   <p>{score}</p>
    //                   <h1>Choose Skills You want to improve </h1>
    //                   <button
    //                     onClick={() => {
    //                       setEnd(false);
    //                     }}
    //                   >
    //                     Next
    //                   </button>
    //                 </div>
    //               ) : (
    //                 /* 5. Question Card  */
    //                 <div className="question-card">
    //                   <h1 className="head">Take Small Assessment To continue</h1>

    //                   {/* 2. Current Score  */}
    //                   <h2 className="qoq">
    //                     Question: {currentQuestion} Out of{questions.length}
    //                   </h2>
    //                   {/* Current Question  */}

    //                   <h3 className="question-text">
    //                     {questions[currentQuestion].text}
    //                   </h3>

    //                   {/* List of possible answers  */}
    //                   <ul>
    //                     {questions[currentQuestion].options.map((option) => {
    //                       return (
    //                         <li
    //                           key={option.id}
    //                           onClick={() => optionClicked(option.isCorrect)}
    //                         >
    //                           {option.text}
    //                         </li>
    //                       );
    //                     })}
    //                   </ul>
    //                 </div>
    //               )}
    //               );
    //             </div>
    //           ) : (
    //             <div className="choose_statement">
    //               <h1>Choose Skills You want to improve </h1>
    // {/* <small>choose your options from input box </small> */}
    //               <Multiselect  className="selector" options={options}  displayValue="skill"></Multiselect>
    //               <b className="ottt">Anything More You want to share</b>
    //               <textarea></textarea>
    //               <button
    //                 onClick={() => {
    //                   // setEnd(false);
    //                   setAssessmentTaken(true);
    //                   console.log('hii')
    //                 }}
    //               >
    //                 Next
    //               </button>
    //             </div>
    //           )}
    //         </>
    //       ) : (
    //         <div className="MainDash">
    //           <div className="main">
    //             <b>Students Panel</b>

    //             <p>Welcome {student.Name}</p>

    //             <div
    //               className="profile"
    //               style={{ cursor: "pointer" }}
    //               onClick={() => navigate("/students/profile")}
    //             >
    //               <i class="ri-notification-2-fill"></i>
    //               <p>{student.Name}</p>
    //               <img src={student.profileImg.selectFile} alt="" />
    //             </div>
    //             <Cards></Cards>
    //             <h4>Video Recommendation </h4>
    //             <div className="videos">
    //               <div className="video">
    //                 <iframe
    //                   width="560"
    //                   height="315"
    //                   src="https://www.youtube.com/embed/NY1u3p0Hw7A"
    //                   title="YouTube video player"
    //                   frameborder="0"
    //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                   allowfullscreen
    //                 ></iframe>
    //               </div>
    //               <div className="video">
    //                 <iframe
    //                   width="560"
    //                   height="315"
    //                   src="https://www.youtube.com/embed/NY1u3p0Hw7A"
    //                   title="YouTube video player"
    //                   frameborder="0"
    //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                   allowfullscreen
    //                 ></iframe>
    //               </div>

    //               <div className="video">
    //                 <iframe
    //                   width="560"
    //                   height="315"
    //                   src="https://www.youtube.com/embed/NY1u3p0Hw7A"
    //                   title="YouTube video player"
    //                   frameborder="0"
    //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                   allowfullscreen
    //                 ></iframe>
    //               </div>
    //             </div>
    //             <h4>Recommended Books</h4>
    //             <div className="Books">
    //               <div className="book">
    //                 <img
    //                   src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
    //                   alt="bookName"
    //                 ></img>
    //                 <strong>Atomic Habits</strong>
    //                 <p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
    //                 <a href="https://article.com" target="_blank">
    //                   Book Link
    //                 </a>
    //               </div>
    //               <div className="book">
    //                 <img
    //                   src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
    //                   alt="bookName"
    //                 ></img>
    //                 <strong>Atomic Habits</strong>
    //                 <p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
    //                 <a href="https://article.com" target="_blank">
    //                   Book Link
    //                 </a>
    //               </div>
    //               <div className="book">
    //                 <img
    //                   src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
    //                   alt="bookName"
    //                 ></img>
    //                 <strong>Atomic Habits</strong>
    //                 <p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
    //                 <a href="https://article.com" target="_blank">
    //                   Book Link
    //                 </a>
    //               </div>
    //               <div className="book">
    //                 <img
    //                   src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
    //                   alt="bookName"
    //                 ></img>
    //                 <strong>Atomic Habits</strong>
    //                 <p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
    //                 <a href="https://article.com" target="_blank">
    //                   Book Link
    //                 </a>
    //               </div>
    //             </div>
    //             <h4>Others </h4>
    //             <p>Some extra Activities</p>
    //             <div className="club">
    //               <div className="club-img">
    //                 <img
    //                   src="https://media.istockphoto.com/vectors/icon-of-paper-plane-white-plane-on-a-blue-background-vector-id524018928?k=20&m=524018928&s=612x612&w=0&h=473R1ru_6BHA8mW_dlhaAN0_NJhkFV6r6iHUZ1B50jA="
    //                   alt="club"
    //                 ></img>
    //               </div>
    //               <h5>Speaking Club</h5>
    //               <p>Lorem ipsum dolor sit amet lobhhj</p>
    //               <a href="https://i.pravatar.cc">Join Now</a>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </>
  );
}
