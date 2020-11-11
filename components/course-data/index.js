export default {
  'number-systems' : {
    tags : ["GCSE", "iGCSE"], 
    title : "4 Number Systems",
    filePath : "4-number-systems",
    author : 'Leroy Salih',
    date : '2020-11-09',
    description : "Understand how we can use binary, denary and hexadecimal numbers in computing.",

    lessons: 
      {
        "1-introduction" : {
          title: "1. Introduction",
          order: 0,
          filePath: "1-introduction",
          desc: "An overview of the key concepts used in the module.", 
          spec: "<div><h1>Spec Goes Here</h1></div>"
        },

        "2-denary-to-binary" : {
          
          title: "2 Denary to Binary",
          order: 0,
          filePath: "2-denary-to-binary"
        }
      }
  },

  'networks' : {
    tags : ["GCSE", "iGCSE"], 
    title : "Computer Networks",
    metaDescription : "Revise the iGCSE Networks module for Oxford AQA using these key points.",
    id : "networks",
    author : 'Leroy Salih',
    date : '2020-11-09',
    description : "The modern world is built on connections of electronic devices.  Networks touch every aspect of our lives; our homes, our schools our vehicles are all becoming connected to various networks.  This module will help you revise the details of what is involved to allow these devices to communicate.",
    keywords: {
      Device : "A piece of electronic equaipment.",
      "Stand alone": "A device that is not connected to the network",
      Link : "The connection between two devices",
      Switch : "The device that is used to form a LAN",
      Router : "The device that connects LANS to WANS",

    },
    lessons: 
      {
        
        "introduction" : {
          title: "1. Introduction",
          order: 0,
          filePath: "1-introduction",
          desc: "An overview of the key concepts.",
          specDesc: `<ul>
          <li>Define what a computer network is.</li>
          <li>Discuss the benefits and risks of computer networks.</li>
          </ul>`,
          tasks: {
            task1: {
              id: 0,
              order: 0,
              title: "Watch this video",
              desc: "Watch this video that provides an overview of Networks before answering the questions below.",
              type: "video",
              videoKey : "3BL3YtaP78M"
            },

            task2: {
              id: 0,
              order: 0,
              title: "Answer these questions",
              type: "quiz",
              videoUrl : ""
            },

          }

        },

        "transmission-media" : {
          title: "2. Transmission Media",
          order: 0,
          filePath: "2. Transmission Media",
          desc: "An overview of the key concepts.",
          specDesc: "<div>This is the <b>Spec Desc</b>.</div>",
          tasks: {
            task1: {
              id: 0,
              order: 0,
              title: "Watch this video",
              desc: "Watch this video that provides an overview of Networks before answering the questions below.",
              type: "video",
              videoKey : "SoJIrPjLdJY"
            },

            task2: {
              id: 0,
              order: 0,
              title: "Answer these questions",
              type: "quiz",
              videoUrl : ""
            },

          }

        },

        "topologies" : {
          title: "3. Topologies",
          order: 0,
          filePath: "3-topologies",
          desc: "An overview of the key concepts.",
          specDesc: `
          Explain the following physical network topologies:
          <ul>
          <li>star</li>
          <li>bus.</li>
          </ul>
          `,
          tasks: {
            task1: {
              id: 0,
              order: 0,
              title: "Watch this video",
              desc: "Watch this video that provides an overview of Networks before answering the questions below.",
              type: "video",
              videoKey : "lX1zzyatX7c"
            },

            task2: {
              id: 0,
              order: 0,
              title: "Answer these questions",
              type: "quiz",
              videoUrl : ""
            },

          }

        },

        "protocols" : {
          title: "4. Protocols and Four Layer Model",
          order: 0,
          filePath: "3-topologies",
          desc: "An overview of the key concepts.",
          specDesc: `
          Explain the following physical network topologies:
          <ul>
          <li>star</li>
          <li>bus.</li>
          </ul>
          `,
          tasks: {
            task1: {
              id: 0,
              order: 0,
              title: "Watch this video",
              desc: "Watch this video that provides an overview of Networks before answering the questions below.",
              type: "video",
              videoKey : "lX1zzyatX7c"
            },

            task2: {
              id: 0,
              order: 0,
              title: "Answer these questions",
              type: "quiz",
              videoUrl : ""
            },

          }

        },

        "common-protocols" : {
          title: "5. Common Protocols",
          order: 0,
          filePath: "3-topologies",
          desc: "An overview of the key concepts.",
          specDesc: `
          Explain the following physical network topologies:
          <ul>
          <li>star</li>
          <li>bus.</li>
          </ul>
          `,
          tasks: {
            task1: {
              id: 0,
              order: 0,
              title: "Watch this video",
              desc: "Watch this video that provides an overview of Networks before answering the questions below.",
              type: "video",
              videoKey : "lX1zzyatX7c"
            },

            task2: {
              id: 0,
              order: 0,
              title: "Answer these questions",
              type: "quiz",
              videoUrl : ""
            },

          }

        },
      }
  }

}