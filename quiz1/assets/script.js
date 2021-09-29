function generate(number) {
    switch (number) {
        case 1:
            window.location.href = "./profile";
            break;
        case 2:
            window.location.href = "./hometown";
            break;
        case 3:
            window.location.href = "./food";
            break;
        case 4:
            window.location.href = "./tourist";
            break;
    
        default:
            break;
    }
}