var puppy = {
    name: "밤이",
    type: "말티푸",
    bday: "220322",
    id: "0915",
    fid: function(){
        return this.bday + this.id;
    }
};

console.log(puppy.name) // 밤이
console.log(puppy["type"]) // 말티푸
console.log(puppy.fid()) // 2203220915
console.log(puppy.fid) // [function: fid]