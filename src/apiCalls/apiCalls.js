const getData = async (path) => {
  try {
    let response = await fetch(`https://king-climber-api.replitted.repl.co${path}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log('get error');
  }
};

const postData = async (path, comp) => {
  try {
    let response = await fetch(`https://king-climber-api.replitted.repl.co${path}`, {
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
    console.log('post error');
  }
};

export { getData, postData };