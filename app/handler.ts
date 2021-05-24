import { Handler, Context } from 'aws-lambda';
import debug from 'debug';
import { creatImageFromTemplate } from './services/moozCanvas';
import { createCanvas } from "canvas"

// import dotenv from 'dotenv';
// import path from 'path';
// const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
// dotenv.config({
//   path: dotenvPath,
// });

const httpLogger = debug('http');

export const hakuna: Handler = (event: any, context: Context) => {
  httpLogger('beginning request to hello');
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
  const { templateId, edits } = JSON.parse(event.body);
  console.log({ templateId, edits })
  console.log(creatImageFromTemplate)
  // return Promise.resolve({
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Matata from typescript',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // });
  return creatImageFromTemplate(templateId, edits)
    .then((dataurl) => {
      // const base64 = dataurl.split(',')[1];
      // const img = Buffer.from(base64, 'base64');
      // res.status(200).type('image/png').set('Content-Length', `${img.length}`).send(img);
      httpLogger('ending request to hello');

      return {
        statusCode: 200,
        // headers: { 'Content-Type': 'image/png', 'Content-Length': `${img.length}` },
        body: dataurl,
      };
    })
    .catch((error) => {
      console.log('ERRORORORORORORORR');
      console.log(error);
      httpLogger('Error request to hello');

      // res.status(500).send(error);
      return {
        statusCode: 500,
        body: error,
      };
    });
};

export const getTest: Handler = (event: any, context: Context) => {
  console.log(createCanvas)
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Matata from typescript',
        input: event,
      },
      null,
      2
    ),
  });
};

// export const hakuna: Handler = (event: any, context: Context) => {
//   return Promise.resolve({
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Matata from typescript',
//         input: event,
//       },
//       null,
//       2
//     ),
//   });
// };

// export const update: Handler = (event: any) => booksController.update(event);

// export const find: Handler = () => booksController.find();

// export const findOne: Handler = (event: any, context: Context) => {
//   return booksController.findOne(event, context);
// };

// export const deleteOne: Handler = (event: any) => booksController.deleteOne(event);

// 'use strict';

// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
