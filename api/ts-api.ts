import express from 'express'
import { Request, Response } from 'express-serve-static-core'

let app: express.Express = express()

let port: number = 8000 // or 8e3

interface MyResponse {
  "color": string,
  "license-plate": number,
  "make"?: string 
}

app.get('/', (req: Request, res: Response) => {
  let resp: MyResponse = {"color": "red", "license-plate":92, "make": "bjorng"} 
  res.json(resp)
})

app.listen(port)



