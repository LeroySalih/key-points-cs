var graph = require('@microsoft/microsoft-graph-client');

const getAuthenticatedClient = (accessToken) => {
  const client = graph.Client.init({
    authProvider: (done) => {
      done(null, accessToken.accessToken)
    }
  });
  return client;
}

// Call the Graph to retrieve the User Details
const getUserDetails = async (accessToken) => {
  const client = getAuthenticatedClient(accessToken);
  const user = await client.api('/me')
                           .get()
                           .catch((err) => {
                                console.log("Error!::", err.message);
                            })
  // console.log("User::", user)
  return user;
}


module.exports = {getUserDetails}