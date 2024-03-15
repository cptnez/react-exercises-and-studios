export default function ChoresList () {

let pageTitle = 'Chore List';
let chore1 = 'Take out the trash';
let chore2 = 'Do the dishes';
let chore3 = 'Tend to the garden';

   return <div>
  <h3>{pageTitle}</h3>
      <p>
      {chore1}<br></br>
      {chore2}<br></br>
      {chore3}
      </p>
   </div>
   ;
}