
//switch
const switchInput = document.getElementById('switch-label');
const styles = document.documentElement.style;

const lightTheme = {
    '--bg-color':'#eee',
    '--text-color':'#333',
    '--button-bg':'#555',
    '--button-color':'#ccc'
};

const darkTheme ={
    '--bg-color':'#333',
    '--text-color':'#eee',
    '--button-bg':'#ddd',
    '--button-color':'#555'
}

const changeTheme = theme =>{
    const customStyle = Object.keys(theme)

    for(const style of customStyle){
        styles.setProperty(style, theme[style])
    }
}