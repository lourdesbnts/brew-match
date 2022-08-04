export let getBeerData= () => {
  return fetch("https://api.punkapi.com/v2/beers").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!");
      } else {
        return response.json();
      }
    }
  );
};