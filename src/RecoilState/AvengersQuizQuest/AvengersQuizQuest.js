import {atom} from 'recoil'

export const AvengersQuestion = atom({
  key : "Avengers",
  default : [
    {
      id : 1 ,
      Qusetion :" What system replaced J.A.R.V.I.S.?",
      Option : [
        { Option : "F.R.I.D.A.Y." , isCorrect : true},
        { Option : " Karen" , isCorrect : false},
        { Option : "E.D.I.T.H." , isCorrect : false},
        { Option : "Vision" , isCorrect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :" What type of doctor is Stephen Strange?",
      Option : [
        { Option : "Cardiologists" , isCorrect : false},
        { Option : "Colon and Rectal Surgeon" , isCorrect : false},
        { Option : "Neurosurgeon", isCorrect : true},
        { Option : "Dermatologists", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :" Who is the First Avenger?",
      Option : [
        { Option : "IronMan" , isCorrect : false},
        { Option : "Captain America" , isCorrect : true},
        { Option : "Thor", isCorrect : false},
        { Option : "Hulk", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"How many Infinity Stones are there?",
      Option : [
        { Option : "Four" , isCorrect : false},
        { Option : "Eight" , isCorrect : false},
        { Option : "Six", isCorrect : true},
        { Option : "Five", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Besides Thor, which Avengers can lift Thor's hammer?",
      Option : [
        { Option : " Vision" , isCorrect : true},
        { Option : "IronMan" , isCorrect : false},
        { Option : "Hulk", isCorrect : false},
        { Option : "BlackWidow", isCorrect : false}
      ]
    }
  ]

})