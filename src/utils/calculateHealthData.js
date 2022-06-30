export const calculateFatRate = (gender, waist, neck, height, hip) => {
  let fatrate = 0;
  let fatRound = -1;
  if (gender === 0) {
    fatrate =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
    fatRound = Math.round(fatrate * 100) / 100;
  } else if (gender === 1) {
    fatrate =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  } else {
    null;
  }
  fatRound = Math.round(fatrate * 100) / 100;
  return fatRound;
};

export const dailyCalories = (gender, routine, weight, height, age) => {
  let metabolicrate = 0;
  let calories = 0;
  if (gender === 0) {
    metabolicrate = 66.5 + 13.75 * weight + 5 * height - 6.75 * age;
  } else if (gender === 1) {
    metabolicrate = 655.1 + 9.56 * weight + 1.85 * height - 4.68 * age;
  } else {
    null;
  }
  calories = Math.round(100 * metabolicrate * routine) / 100;
  //kcal
  return calories;
};
export const dailyFat = (calories, age) => {
  if (4 < age && age < 18) {
    return (calories * 30) / 100;
  } else {
    return (calories * 25) / 100;
  }
};

export default {calculateFatRate, dailyCalories, dailyFat};

/*axios.get(’https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
 headers: {
   ‘x-app-id’: ‘your id’,
   ‘x-app-key’: ‘your key’,
 },
 ...
}) 
https://trackapi.nutritionix.com/v2/search/instant
 const fetch = async () => {
    try {
      await axios.get(`${Config.API_URL}?query=${search}&common=true&detailed=true`, {
        headers: {
          'x-app-id': "b5846f08",
          'x-app-key': "3ee19ab341a7fae7b2af8c23554673eb",
          'x-remote-user-id': "0"
        }
      }).then((response) => {
        console.log(response.data)
        setData(response.data)
        setLoading(false)
        return response.data;
      })
    } catch (error) {
      if (error.response) {

        console.log(error.response)

      } else if (error.request) {

        console.log(error.request)

      } else if (error.message) {

        console.log(error.message)
      }
    }
  }

  async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
*/
