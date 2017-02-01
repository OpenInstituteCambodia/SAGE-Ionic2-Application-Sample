export class ivrQuestion {
  // Set Static Question in an Array
  questions: any = [
    {
      q_id: 1,
      q_type: "single",
      q_title: "1+1 = ?",
      q_choices_type: "single flat",
      q_choices: [
        1,
        2,
        3,
        4
      ],
      q_answer: 2,
      q_audio: "question_1_.mp3",
      q_audio_correct: "question_1_correct.mp3",
      q_audio_wrong: "question_1_wrong.mp3",
    },
    {
      q_id: 2,
      q_type: "img",
      q_title: "assets/img/parrot.jpg",
      q_choices_type: "single",
      q_choices: [
        "មាន់",
        "សេក",
        "ទា",
        "ចាប"
      ],
      q_answer: 2,
      q_audio: "question_2_.mp3",
      q_audio_correct: "question_2_correct.mp3",
      q_audio_wrong: "question_2_wrong.mp3",
    },
    {
      q_id: 3,
      q_type: "",
      q_title: "សេះ",
      q_choices_type: "img",
      q_choices: [
        "assets/img/cow.png",
        "assets/img/donkey.png",
        "assets/img/horse.png",
        "assets/img/buffalo.png"
      ],
      q_answer: 2,
      q_audio: "question_3_.mp3",
      q_audio_correct: "question_3_correct.mp3",
      q_audio_wrong: "question_3_wrong.mp3",
    },
    {
      q_id: 4,
      q_type: "paragh",
      q_title: "Sally and Jane were best fri _ _ _s.",
      q_choices_type: "img",
      q_choices: [
        "and",
        "ind",
        "day",
        "end"
      ],
      q_answer: 2,
      q_audio: "question_4_.mp3",
      q_audio_correct: "question_4_correct.mp3",
      q_audio_wrong: "question_4_wrong.mp3",
    },
  ];

  _numberOfQuestion: number = Object.keys(this.questions).length;

  constructor(){

  }

  // TODO
  get getQuestions() {
    return this.questions;
  }
}
