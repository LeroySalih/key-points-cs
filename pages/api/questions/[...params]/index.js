export default function handler(req, res) {
  const {
    query: { params },
  } = req

  const [userId, questionId] = params
  console.log(userId, questionId)
  res.end(userId, questionId)
}