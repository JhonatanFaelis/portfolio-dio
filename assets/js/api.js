async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/JhonatanFaelis/portfolio-dio/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}