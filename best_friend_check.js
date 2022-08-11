function isBestFriend(first_object, second_object) {
    if (first_object.name === second_object.friend) {
        if (first_object.friend === second_object.name) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const first_object = {
    name: "Abu Hanif",
    friend: "Romzan"
}

const second_object = {
    name: "Romzan",
    friend: "Abu Hanif"
}

console.log(isBestFriend(first_object, second_object));