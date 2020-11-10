const handler  = (req, res) => {
  
  const { query : {slug}} = req;
  return res.end(`Post: ${slug}`);
  
}

export default handler;