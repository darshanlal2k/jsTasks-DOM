function funone() {
    let bike = document.getElementById("textboxx").value;
    let father = bike.match(/dad/gi);
    let dadlen = father.length;
    let r = father.pop();
    document.getElementById("dad-count").innerHTML = r + " - " + dadlen;

    let mother = bike.match(/mom/gi);
    let momlen = mother.length;
    let y = mother.pop();
    document.getElementById("mom-count").innerHTML = y + " - " + momlen;

    let dar = bike.match(/lal/gi);
    let darlen = dar.length;
    let z = dar.pop();
    document.getElementById("darshan-count").innerHTML = z + " - " + darlen;
}

