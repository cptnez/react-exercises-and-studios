export default function HobbyLinks () {
let hobbyLinks = ['https://www.nintendolife.com/', 'https://www.runnersworld.com/'];
let pageTitle = 'Hobbies';
    
       return <div>
      <h3>{pageTitle}</h3>
          <p>
          <a href = {hobbyLinks[0]}>Nintendo Games</a><br></br>
          <a href = {hobbyLinks[1]}>Running</a>
          </p>
       </div>
       ;
    }
