
function updateProfile(profileData){
   const nome = document.getElementById('profile_name')
   nome.innerText = profileData.name

   const job = document.getElementById('profile_job')
   job.innerText = profileData.job
   
   const city = document.getElementById('profile_city')
   city.innerText = profileData.location

   const number = document.getElementById('profile_number')
   number.innerText = profileData.phone

   const email = document.getElementById('profile_email')
   email.innerText = profileData.email
}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfile(profileData)



})()