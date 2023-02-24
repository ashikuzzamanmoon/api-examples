const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user =>{
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name  = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    // console.log(user.results[0].name);
    console.log(user);

    const location = user.results[0].location.city;
    // console.log(location);
    document.getElementById('location').innerHTML = location;

    const image = user.results[0].picture.large;
    document.getElementById('image').innerHTML = image;
}

loadUser();
