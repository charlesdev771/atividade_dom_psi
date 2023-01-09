function change_color_books()

{

    let books = document.getElementsByClassName("books");
    
    green_color = "#0f0";

    for (let i = 0; i <= books.length; i++)
    {
        books[i].style.backgroundColor = green_color;
    }    

}

function change_color_pags()

{

    pags = document.getElementsByClassName("pags");
    
    blue_color = "#00f";

    for (let i = 0; i <= pags.length; i++)
    {
        pags[i].style.backgroundColor = blue_color;
    }    

}