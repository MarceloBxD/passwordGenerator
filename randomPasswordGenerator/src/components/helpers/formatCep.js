export const formatCep = (txt) => {
    if (txt.length == 8) {
        return `${txt[0]}${txt[1]}.${txt[2]}${txt[3]}${txt[4]}-${txt[5]}${txt[6]}${txt[7]}`;
    }
    else if(txt.length < 8)
        return txt;
}