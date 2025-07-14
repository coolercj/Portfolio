document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded!");

   
    const commentForm = document.getElementById('comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            
            console.log(`Name: ${name}, Comment: ${comment}`);

           
            this.reset();
        });
    }
});