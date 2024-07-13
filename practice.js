const avatarColor = (firstName) => {
    switch (firstName[0]) {
        case 'A':
        case 'G':
        case 'M':
        case 'S':
        case 'Y':
            console.log("#687399");
            break;
        case 'B':
        case 'H':
        case 'N':
        case 'T':
        case 'Z':
            console.log("#6DAEB0");
            break;
        case 'C':
        case 'I':
        case 'O':
        case 'U':
            console.log("#FFDCA8");
            break;
        case 'D':
        case 'J':
        case 'P':
        case 'V':
            console.log("#FAA578");
            break;
        case 'E':
        case 'K':
        case 'Q':
        case 'W':
            console.log("#C46693");
            break;
        case 'F':
        case 'L':
        case 'R':
        case 'X':
            console.log("#78518A");
            break;
    }
}

const myName = {
    firstName: "Xavier",
    lastName: "Ahmed",
};

avatarColor(myName.firstName);