function On()
{
        let image = document.getElementsByClassName('imgs_my');

        for (let i = 0; i <= image.length; i++)
        {
                image[i].style.width = '50%';
                image[i].style.height = '300px';
        }


}

function Out()
{
        let image = document.getElementsByClassName('imgs_my');

        for (let i = 0; i <= image.length; i++)
        {
                image[i].style.width = '300px';
                image[i].style.height = '300px';
        }


}
