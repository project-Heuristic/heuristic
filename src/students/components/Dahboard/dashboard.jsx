import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Session } from "../../../assets/sessions.svg";
import { TeacherContext } from '../../../context/teacherContext';
import { useUserAuth } from '../../../context/userAuthContext';
import Cards from "../Cards/Cards";
import "./dashboard.scss"

export default function Dashboard() {
  const teacher =useContext(TeacherContext);
  const {user}=useUserAuth();
  console.log(teacher)
 const navigate=useNavigate();
 const [students,setNewStudets]=useState(true);
 const [showResults, setShowResults] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [score, setScore] = useState(0);

 const questions = [
   {
     text: "What is the capital of America?",
     options: [
       { id: 0, text: " To help co-workers and to be in a peaceful environment. ", isCorrect: false },
       { id: 1, text: "Boston", isCorrect: false },
       { id: 2, text: "Santa Fe", isCorrect: false },
       { id: 3, text: "Washington DC", isCorrect: true },
     ],
   },
   {
     text: "What year was the Constitution of America written?",
     options: [
       { id: 0, text: "1787", isCorrect: true },
       { id: 1, text: "1776", isCorrect: false },
       { id: 2, text: "1774", isCorrect: false },
       { id: 3, text: "1826", isCorrect: false },
     ],
   },
   {
     text: "Who was the second president of the US?",
     options: [
       { id: 0, text: "John Adams", isCorrect: true },
       { id: 1, text: "Paul Revere", isCorrect: false },
       { id: 2, text: "Thomas Jefferson", isCorrect: false },
       { id: 3, text: "Benjamin Franklin", isCorrect: false },
     ],
   },
   {
     text: "What is the largest state in the US?",
     options: [
       { id: 0, text: "California", isCorrect: false },
       { id: 1, text: "Alaska", isCorrect: true },
       { id: 2, text: "Texas", isCorrect: false },
       { id: 3, text: "Montana", isCorrect: false },
     ],
   },
   {
     text: "Which of the following countries DO NOT border the US?",
     options: [
       { id: 0, text: "Canada", isCorrect: false },
       { id: 1, text: "Russia", isCorrect: true },
       { id: 2, text: "Cuba", isCorrect: true },
       { id: 3, text: "Mexico", isCorrect: false },
     ],
   },
 ];

 // Helper Functions

 /* A possible answer was clicked */
 const optionClicked = (isCorrect) => {
   // Increment the score
   if (isCorrect) {
     setScore(score + 1);
   }

   if (currentQuestion + 1 < questions.length) {
     setCurrentQuestion(currentQuestion + 1);
   } else {
     setShowResults(true);
   }
 };

 /* Resets the game back to default */
 const submitAssessment = () => {
   setScore(0);
setNewStudets(false);
 };
  return (
    
   <>
 {
    students?
    <div className="assessment">


      {/* 1. Header  */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Based On Your Response we Create Some suggestion For You </h1>
        
          <button onClick={() => submitAssessment()}>Explore</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          <h1 className='head'>Take Small Assessment To continue</h1>
    
          {/* 2. Current Score  */}
          <h2 className='qoq'>Question: {currentQuestion} Out of{questions.length}</h2>
          {/* Current Question  */}
   
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    
  );

    </div>
    : <div className="MainDash">
 
    <div className="main">
      <b>Students Panel</b>

      <p>Welcome  {teacher.Name}</p>

      <div className="profile" style={{cursor:'pointer'}} onClick={()=>navigate('/students/profile')}>
        <i class="ri-notification-2-fill"></i>
        <p>{teacher.Name}</p>
        <img src={teacher.profileImg.selectFile} alt="" />
      </div>
     <Cards></Cards>
     <h4>Video Recommendation </h4>
     <div className='videos'>
      <div className='video'>

     <iframe width="560" height="315" src="https://www.youtube.com/embed/NY1u3p0Hw7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='video'>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NY1u3p0Hw7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>

 <div className='video'>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NY1u3p0Hw7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
     </div>
      <h4>Recommended Books</h4>
      <div className='Books'>
<div className='book'>
<img src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg' alt='bookName'></img>
<strong>Atomic Habits</strong>
<p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
<a href='https://article.com' target='_blank'>Book Link</a>
</div>
<div className='book'>
<img src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg' alt='bookName'></img>
<strong>Atomic Habits</strong>
<p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
<a href='https://article.com' target='_blank'>Book Link</a>
</div>
<div className='book'>
<img src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg' alt='bookName'></img>
<strong>Atomic Habits</strong>
<p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
<a href='https://article.com' target='_blank'>Book Link</a>
</div>
<div className='book'>
<img src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg' alt='bookName'></img>
<strong>Atomic Habits</strong>
<p>Lorem ipsum, dolor sit Earum, obcaecati?</p>
<a href='https://article.com' target='_blank'>Book Link</a>
</div>
      </div>
      <h4>Others </h4>
      <p>Some extra Activities</p>
      <div className='club'>
        <div className='club-img'>
          <img src='https://media.istockphoto.com/vectors/icon-of-paper-plane-white-plane-on-a-blue-background-vector-id524018928?k=20&m=524018928&s=612x612&w=0&h=473R1ru_6BHA8mW_dlhaAN0_NJhkFV6r6iHUZ1B50jA=' alt='club'></img>
        </div>
     <h5>

      Speaking Club
     </h5>
     <p>Lorem ipsum dolor sit amet lobhhj</p>
<a href='https://i.pravatar.cc'>Join Now</a>
      </div>
    </div>
  </div>
 }
   
  </>
  )
}
