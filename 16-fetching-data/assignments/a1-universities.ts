import axios from "axios";

interface University {
  web_pages: string[],
  alpha_two_code: string,
  "state-province": string | null,
  domains: string[],
  name: string,
  country: string
}

const url = "http://universities.hipolabs.com/search?country=Finland";

const getUniversities = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
};

( async () => {
  const universities = await getUniversities();
  //console.log(universities);
  const universityNames: University[] = await universities.map((uni: University) => uni.name);
  console.log(universityNames);  
})();