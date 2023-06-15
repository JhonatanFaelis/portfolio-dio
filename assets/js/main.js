
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

function updateSkills(profileData){
    const softskills = document.getElementById('profile_skills')
    softskills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateTec(profileData){
    const hardSkills = document.getElementById('tec')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(hard => `<li><img src="${hard.logo}" alt="${hard.name}"></li>`).join('')
}

function updateLanguage(profileData){
    const language = document.getElementById('profile_languages')
    language.innerHTML = profileData.languages.map(langg => `<li>${langg}</li>`).join('')
}

function updateExp(profileData){
    const exp = document.getElementById('exp')
    exp.innerHTML = profileData.professionalExperience.map(exp => `<li><p>${exp.name}</p><p>${exp.period}</p><p>${exp.description}</p></li>                        `)
}

function updatePort(profileData){
    const port = document.getElementById('port')
    port.innerHTML = profileData.portfolio.map(port => `<li><p>${port.name}</p><a href='${port.url} target='_blank''>${port.url}</a></li>`).join('')
}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfile(profileData)
    updateSkills(profileData)
    updateLanguage(profileData)
    updateTec(profileData)
    updatePort(profileData)

})()