function hex(r,g,b){
    return "#" + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
function rgb(r, g, b){
    return `rgb{${r}, ${b}, ${g}}`;
}
hex(255, 100, 25);
console.log(hex);
