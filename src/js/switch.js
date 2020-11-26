
//switch
const switchInput = document.getElementById('switch-input')
const styles = document.documentElement.style;


const lightTheme = {
    '--bg-color':'hsl(0, 0%, 100%)',
    '--bg-color-head':'hsl(225, 100%, 98%)',
    '--card-bg':'hsl(227, 47%, 96%)',
    '--soft-blue':'hsl(228, 12%, 44%)',
    '--soft-text':'hsl(230, 17%, 14%)',
    '--toogle-bg':'hsl(230, 22%,74%)',
    '--white':'#fff',
    '--bg--card':'hsl(227, 47%, 96%)',
    '--text-soft-switch':'hsl(228, 12%, 44%)',
    '--toggle-bg-hover':'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)',
    '--card-bg-hover': '#e1e3f0',
};

const darkTheme ={
    '--bg-color':'hsl(230,17%,14%)',
    '--bg-color-head':'hsl(232, 19%, 15%)',
    '--card-bg':'hsl(228,28%,20%)',
    '--soft-blue':'hsl(228, 34%, 66%)',
    '--soft-text':'hsl(0, 0%, 100%)',
    '--white':'#fff',
    '--bg--card':'hsl(228, 28%, 20%)',
    '--text-soft-switch':'hsl(225, 100%, 98%)',
    '--toogle-bg':'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)',
    '--toggle-bg-dark':'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)',
    '--card-bg-hover': '#333a56',
}

const changeTheme = theme =>{
    const customStyle = Object.keys(theme)
    for(const style of customStyle){
        styles.setProperty(style, theme[style])
    }
}

switchInput.addEventListener('click', e=>{
    console.log(e.target.checked)
    e.target.checked? changeTheme(darkTheme) : changeTheme(lightTheme) 
})

