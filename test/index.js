
alert(hi);

function HouseKeeper(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.clean = function(){
        alert("cleaning in progress");
    }
}

