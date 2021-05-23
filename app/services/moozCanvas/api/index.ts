import { DesignData } from '@/types';
// import fetch from 'node-fetch';

const design: DesignData = {
  id: 'WED-6',
  type: 'SNAPCHAT_FILTER',
  category: 'SNAPCHAT-FILTERS',
  subCategory: 'WEDDINGS',
  defaultTemplate: {
    templateUrl: 'https://res.cloudinary.com/cloudinary-cdn/image/upload/v1620755320/moozfilters/cms/greetingcards_2_54dabce4d9.jpg',
    demoUrl: 'https://res.cloudinary.com/cloudinary-cdn/image/upload/v1620755320/moozfilters/cms/greetingcards_2_54dabce4d9.jpg',
    editables: [
      {
        name: 'name',
        displayName: 'الاسم',
        defaultText: 'فواز', //?
        font: {
          type: 'custom',
          family: 'Aref_Lamsa',
          fontFaceUrl: 'https://res.cloudinary.com/cloudinary-cdn/raw/upload/v1620407028/moozfilters/greetingCards/eidFitr/fontsFiles/Aref_Lamsa_Bold.ttf',
        },
        drawingInstructions: {
          driver: 'TEXT_DRIVER',
          driverInstructions: [
            {
              passToNativeCanvas: { textAlign: 'center' },

              // routines: ['TEXT_Fill', 'STROKE_Fill'],
              config: {
                xValuePercentage: 50,
                yValuePercentage: 92,
                verticalAlignment: 'CENTER',
                maxWidthPercentageOfWidth: 40,
                withTextFill: true,
                withStrokeFill: true,
                canvasFontStr: {
                  fontWeight: 'bold',
                  fillStyle: {
                    type: 'color',
                    value: 'red',
                  },
                  fontVariant: 'normal',
                  fontSizePercentageOfHeight: 0.06834686031,
                  fontFamily: 'Aref_Lamsa',
                  fontStyle: 'normal',
                },
              },
            },
          ],
        },
      },
    ],
  },
  // isVariant:false?
  // tags:
};


export function fetchTemplate(templateId: string) {
  return design.defaultTemplate
}


// export function fetchTemplate(templateId: string) {
//   return fetch('http://192.168.0.8:4000/design-template/' + templateId)
//     .then((res) => {
//       console.log('here');
//       console.log(res.ok);
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error('failed to get template');
//     })
//     .then(async (data) => {
//       //   const templateUrl = data.defaultTemplate.templateUrl;
//       //   const loadedEditables = data.defaultTemplate.editables.map((editableObj) => {
//       //     const editableName = editableObj.name;
//       //     const loadedEditable = editables.find(({ name }) => name === editableName);
//       //     editableObj.currentValue = loadedEditable.value;
//       return data.defaultTemplate;
//       //   });
//     });
//   // .catch((error) => {
//   //   console.log('ERRORORORORORORORR');
//   //   console.log(error);
//   //   res.status(500).send(error);
//   // });
// }


