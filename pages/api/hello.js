// API ルートを使うことで、Next.js アプリの中に API エンドポイントを作成することができる

export default (req, res) => {
  res.status(200).json({ text: 'Hello　こんにちは!!!!!!' })
}