const getData = async (path) => {
  try {
    let response = await fetch(`https://king-climber-api.replitted.repl.co${path}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log('Dang it');
  }
}

export { getData };