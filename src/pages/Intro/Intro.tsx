import "./index.css";

function Intro() {
  return (
    <>
    <div className="intro-page">
        <div className="bioBody">
            <h2>Sergio Alexander Perez</h2>

            <h4>Bio</h4>
            <p>I was born in El Salvador but grew up in Manassas, Virginia and currently live in Arlington, Virginia. I use to draw a lot growing up and liked creating things. Which is why I like to program and code since it allows me to create things from nothing. I am currently enrolled in Northern Virginia Community College, and I am majoring in Information Technology.</p>
            
            <h4>Interests</h4>
            <ul>
                <li>Playing Video Games</li>
                <li>Playing Table Tennis</li>
                <li>Reading Manga</li>
                <li>Cooking</li>
                <li>Finding New Music</li>
                <li>Annoying My Cat Leo</li>
            </ul>
        </div>
    </div>
    <p className="disclosure">
        Homework Assignment for ITP140 (Make a Website to Introduce Yourself) 
    </p>
    </>
  )
}

export default Intro;