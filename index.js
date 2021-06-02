//selector at here

const profileForm = document.querySelector('.profileForm');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const professionInput = document.querySelector('#profession')
const profile = document.querySelector('.profile')

//Add Even listening 

profileForm.addEventListener('submit', function(e){

    e.preventDefault();
    const profileData = {

        name :  nameInput.value,
        age: ageInput.value,
        profession : professionInput.value
    }
    const formattedText = formatText(profileData)
  
   profile.innerHTML += formattedText;

   nameInput.value = '';
   ageInput.value = '';
   professionInput.value = '';
})

function formatText({name, age, profession}){

    return ` <div class="profile__section">
    <h3> Name : ${name} </h3>
    <p>Age : ${age}</p>
    <p>Profession : ${profession}</p>
    </div>
 
    `
}