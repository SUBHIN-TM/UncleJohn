document.querySelector('.toggle').addEventListener
('click', () => {
    document.querySelector('.nav-button-container')
        .classList.toggle('show')
    if (document.getElementById("extra").style.display == 'block')
     {
        document.getElementById("imageMargin").style.marginTop =  "50px"
        return document.getElementById("extra").style.display = 'none'

    }
    document.getElementById("imageMargin").style.marginTop =  "0px"
    return document.getElementById("extra").style.display = 'block'
}
);