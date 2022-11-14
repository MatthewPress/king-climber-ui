const getData = async (path) => {
  try {
    const response = await fetch(`https://king-climber-api.replitted.repl.co/${path}`);
    
    if(!response.ok) {
      throw new Error();
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

const postData = (path, comp) => {
  return fetch(`https://king-climber-api.replitted.repl.co/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comp)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      } else {
        const data = response.json();
        return data;
      }
    })
};

export { getData, postData };