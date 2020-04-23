const greeting = () => {
    let now = new Date().getUTCHours();

    if (now > 17)
        return 'https://media.giphy.com/media/mnqerRRvbjakl3NnQA/giphy.gif';

    if (now > 11)
        return 'im shitting fuck off';
    
    return 'https://media.giphy.com/media/mnqerRRvbjakl3NnQA/giphy.gif'
}


// 'https://media.giphy.com/media/mnqerRRvbjakl3NnQA/giphy.gif'
module.exports = greeting;