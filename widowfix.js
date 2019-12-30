/**
 * Widow Fix for headlines
 */
const headlines = document.querySelectorAll('.entry-title');

headlines.forEach(headline => {
    let text = '';

    if(headline.lastElementChild == null){
        text = headline.innerHTML.split(' ');
    }else{
        text = headline.lastElementChild.innerHTML.split(' ');
    }

    if(text.length < 4){
        return;
    }
    
    const wife = text.pop();
    const husband = text.pop();
    const couple = husband + '&nbsp;' + wife;
    text.push( couple );
    text = text.join(' ');

    if(headline.lastElementChild == null){
        headline.innerHTML = text;
    }else{
        headline.lastElementChild.innerHTML = text;
    }
        
});
