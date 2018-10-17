main = () => {
    setStatusColors();
    setAssigneeColors();
}

setAssigneeColors = () => {
    var elems = document.getElementsByClassName("user");
    for (var i = 0; i < elems.length; i++) {
        let elem = elems[i];
        if(elem.innerHTML.includes('Josefsson'))
            elem.style.color = "rgba(16,90,150,1)";
        else
            elem.style.color = "rgba(16,90,150,.5)";
    }
}

setStatusColors = () => {
    var elems = document.getElementsByClassName("status");
    for (var i = 0; i < elems.length; i++) {
        let elem = elems[i];
        if(elem.innerHTML === 'Failed')
            elem.style.color = "rgb(255, 50, 50)"
        if(elem.innerHTML === 'Passed' || elem.innerHTML === 'Resolved')
            elem.style.color = "rgb(50, 200, 50)"
        if(elem.innerHTML === 'Assigned')
            elem.style.color = "rgb(200, 50, 200)"
    }
}

main();