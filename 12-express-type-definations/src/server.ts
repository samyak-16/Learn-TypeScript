import express from 'express';
import type { Request } from 'express';
import type { Response } from 'express';
import type { RequestHandler } from 'express';

const app = express();

// Request<Params, ResBody, ReqBody, Query>
// RequestHandler<Params, ResBody, ReqBody, Query>

interface ReqBody {
  name: string;
  email: string;
  password: string;
}
interface ResBody {
  data: {
    name: string;
    email: string;
  };
  success: boolean;
}

//How RequestHandler looks internally :
// type RequestHandler<P, ResBody, ReqBody, ReqQuery> =
//   (
//     req: Request<P, ResBody, ReqBody, ReqQuery>,
//     res: Response<ResBody>,
//     next: NextFunction
//   ) => unknown;

const controller: RequestHandler<{}, ResBody, ReqBody> = async (
  req: Request,
  res: Response
) => {
  console.log('Do something');
};
