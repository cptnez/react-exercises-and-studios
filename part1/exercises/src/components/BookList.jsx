export default function BookList() {
   let pageTitle = "Look at these!";
   let book1 = "https://th.bing.com/th/id/OIP.2S0iSoSg0OPiwsbCng5KtwHaLM?w=203&h=307&c=7&r=0&o=5&pid=1.7";
   let book2 = "https://th.bing.com/th/id/OIP.OQdxTUPnxbr1HbLDCkoJQAHaMO?w=194&h=321&c=7&r=0&o=5&pid=1.7";
   let book3 = "https://th.bing.com/th/id/OIP.Jy1eq_Qb8ClGOCurWhMxzwHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Lion, The Witch, And the Wardrobe by C.S Lewis" />
         <img src={book2} alt="The Hobbit by J.R.R Tolkien" />
         <img src={book3} alt="The Eye of the World by Robert Jordan" />
      </div>      
   );
}