import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // 這裡可以進行表單資料驗證或其他處理
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // 回傳成功訊息
    res.status(200).json({ message: `Form submitted successfully, ${name}!` });
  } else {
    // 如果不是 POST 請求，回傳 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
