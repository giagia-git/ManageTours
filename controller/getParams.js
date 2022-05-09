function getParams() {
    let str = window.location.href;
    let idxstartString = str.indexOf("=");
    if(idxstartString > -1) {
        let username = str.slice(idxstartString+1,str.length);
        if(username.indexOf('#') > parseInt(-1)) {
            username = username.slice(0,username.length-1);
        }
        account.innerHTML = username;
        localStorage.setItem("username",username);
        return username; 
    }
    return 0; 
}