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

const postData = async (path, comp) => {
  try {
    const response = await fetch(`https://king-climber-api.replitted.repl.co${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comp)
    });

    if (!response.ok) {
      throw new Error();
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

export { getData, postData };