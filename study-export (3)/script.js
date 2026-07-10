// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "調査にご参加いただきありがとうございます。",
          "content": "これはボランティア活動に関する調査です。\u003Cbr\u003E\n以降の指示をよく読んでください。"
        },
        {
          "required": true,
          "type": "text",
          "content": "ボランティア活動に関する記事や投稿を読んでいただいた後で、質問文および課題を提示します。\u003Cbr\u003E\n質問文については、それぞれの文をよく読んで、それぞれの質問に対して、どの程度そう思うか（あるいはどの程度賛成できるか）を、あなたが思うとおりに、率直にお答えください。\u003Cbr\u003E\n課題については、後ほど提示する説明に従って取り組んでください。",
          "title": "調査の概要"
        },
        {
          "required": true,
          "type": "text",
          "content": "所要時間は\u003Cstrong\u003E10分程度\u003C\u002Fstrong\u003Eです。",
          "title": "所要時間"
        },
        {
          "required": true,
          "type": "text",
          "content": "質問紙の中には、大地震による災害や、被害を受けた地域を想像していただくような内容が含まれています。\u003Cbr\u003E\u003Cbr\u003E\n回答の途中で気分が悪くなった場合や、回答したくない項目が出てきた場合には、回答しなくても結構です。\u003Cbr\u003E\u003Cbr\u003Eそのことによってあなたに何らかの不利益が生じることはありません。",
          "title": "リスク"
        },
        {
          "required": true,
          "type": "text",
          "content": "この研究は無記名で行われ、あなたが誰であるかわからないようになっています。\u003Cbr\u003E\u003Cbr\u003E\nまた、本研究は、回収したデータを統計的に分析し、回答者全体の傾向を明らかにすることを目的としています。\n",
          "title": "データの取り扱い"
        },
        {
          "required": true,
          "type": "text",
          "content": "以上のことを了解し、データを研究者に提供することに同意していただける方は、以下のボックスにチェックを入れ、次のページへお進みください。\u003Cbr\u003E\u003Cbr\u003E\nご協力のほど、どうぞよろしくお願いいたします。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "データ提供に同意しますか？",
          "options": [
            {
              "label": "同意する",
              "coding": "OK"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;

}
      },
      "title": "インストラクション"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "まず以下の記述を読んでください。",
          "content": "以下にボランティアに関する記述があります。\u003Cbr\u003E\nあなたは以下の記述における「あなた」であると、リアルに想像して読んでください。"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "text",
          "content": "あなたは\u003Cstrong\u003E東京に住む大学生\u003C\u002Fstrong\u003Eだ。"
        },
        {
          "required": true,
          "type": "text",
          "content": "先日、日本のある地域で最大震度７にもおよぶ巨大な地震が起こった。\u003Cbr\u003E\u003Cbr\u003Eあなたが住んでいる都心部は、震源から遠かったため、全く被害は無かったものの、震源に近い地域では甚大な被害が発生した。\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "被災地に対しては多くの寄付金が寄せられ、現地では、物資供給や避難所での炊き出しといったボランティア活動が多く行われていた。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "シナリオ1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "（続き）下の記述を読んでください。",
          "content": "ある日、あなたがSNSを見ていると、ある人物（Aさん）の投稿を目にした。"
        },
        {
          "required": true,
          "type": "text",
          "content": "投稿を見てみると、どうやらAさんは、\u003Cstrong\u003Eあなたと同じように東京に住む大学生\u003C\u002Fstrong\u003Eのようだ。"
        },
        {
          "required": true,
          "type": "text",
          "content": "Aさんの投稿には以下のように書かれている。"
        },
        {
          "required": true,
          "type": "text",
          "content": "「生まれて初めて、被災地の災害ボランティアに行ってきました。」\u003Cbr\u003E\n「自分で車を運転して被災地へ物資を運び、現地ではがれき撤去や避難所での炊き出しを行いました。」"
        },
        {
          "required": true,
          "type": "text",
          "content": "「困っている人がいるのに、見て見ぬふりをすることはできません。」\u003Cbr\u003E\n「どんなに離れた場所であっても、困っている人がいたら力になってあげるべきだと思いました。」\u003Cbr\u003E\n「自分にできることを行動に移すことが大切だと思いました。」"
        },
        {
          "required": true,
          "type": "text",
          "content": "一方であなたは、被災地までは東京からは遠いし、自分では特にボランティアや寄付を行ってはいなかった。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "シナリオ2（類似度高条件）",
      "skip": "${this.state.participantID % 2 == 0}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "（続き）下の記述を読んでください。",
          "content": "ある日、あなたがSNSを見ていると、ある人物（Aさん）の投稿を目にした。"
        },
        {
          "required": true,
          "type": "text",
          "content": "投稿を見てみると、どうやらAさんは、\u003Cstrong\u003Eプロのボランティアの老人\u003C\u002Fstrong\u003Eで、災害が起こるたびに各地でボランティア活動を行っているようだ。"
        },
        {
          "required": true,
          "type": "text",
          "content": "Aさんの投稿には以下のように書かれている。"
        },
        {
          "required": true,
          "type": "text",
          "content": "「今回も被災地へ災害ボランティアに行ってきました。」\u003Cbr\u003E\n「自分で車を運転して被災地へ物資を運び、現地ではがれき撤去や避難所での炊き出しを行いました。」"
        },
        {
          "required": true,
          "type": "text",
          "content": "「困っている人がいるのに、見て見ぬふりをすることはできません。」\u003Cbr\u003E\n「どんなに離れた場所であっても、困っている人がいたら力になってあげるべきだと思いました。」\u003Cbr\u003E\n「自分にできることを行動に移すことが大切だと思いました。」"
        },
        {
          "required": true,
          "type": "text",
          "content": "一方であなたは、被災地までは東京からは遠いし、自分では特にボランティアや寄付を行ってはいなかった。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "シナリオ2（類似度低条件）",
      "skip": "${this.state.participantID % 2 == 1}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の質問紙に答えてください。",
          "content": "先ほどの文章の「あなた」の立場にたったとき、投稿にあったボランティアのAさんと自分は、その属性（年齢、出身など）においてどの程度似ていると思いますか？"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "とてもよく似ている",
              "coding": "5"
            },
            {
              "label": "やや似ている",
              "coding": "4"
            },
            {
              "label": "どちらとも言えない",
              "coding": "3"
            },
            {
              "label": "あまり似ていない",
              "coding": "2"
            },
            {
              "label": "全く似ていない",
              "coding": "1"
            }
          ],
          "label": "最もよく当てはまるものを選んでください。",
          "help": "システムの都合上、複数選択できるようになっていますが、一つのみ選択してください。",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "質問紙（操作チェック）"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の質問紙に答えてください。",
          "content": "先ほどの文章の「あなた」の立場にたったとき、あなたは自分のことをどのように思いますか？"
        },
        {
          "required": false,
          "type": "likert",
          "items": [
            {
              "label": "自分を劣った存在に感じた。",
              "coding": "Q1"
            },
            {
              "label": "無力だと感じた。",
              "coding": "Q2"
            },
            {
              "label": "自分も誇らしくなった。",
              "coding": "Q3"
            },
            {
              "label": "自分にも自信が持てた。",
              "coding": "Q4"
            },
            {
              "label": "自分の価値が低いように感じた。",
              "coding": "Q5"
            },
            {
              "label": "投稿を見る前よりも落ち込んだ。",
              "coding": "Q6"
            },
            {
              "label": "自分も何か良いことをした気分になった。",
              "coding": "Q7"
            },
            {
              "label": "自分に対する自己評価は変わらなかった。",
              "coding": "Q8"
            }
          ],
          "width": "5",
          "anchors": [
            "あてはまらない",
            "あまりあてはまらない",
            "どちらとも言えない",
            "ややあてはまる",
            "あてはまる"
          ],
          "label": "１（あてはまらない）～５（あてはまる）の中で、あなたの考えに最も合うものを選んでください。",
          "shuffle": true,
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "質問紙（比較による自尊心低下）"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の質問紙に答えてください。",
          "content": "先ほどの文章の「あなた」の立場にたったとき、あなたは投稿にあったボランティアのAさんやその活動をどのように思いますか？"
        },
        {
          "required": false,
          "type": "likert",
          "items": [
            {
              "label": "不快に感じた。",
              "coding": "Q9"
            },
            {
              "label": "賞賛に値する人物・行為だと感じた。",
              "coding": "Q10"
            },
            {
              "label": "好ましく感じた。",
              "coding": "Q11"
            },
            {
              "label": "気に食わないと感じた。",
              "coding": "Q12"
            },
            {
              "label": "否定的な印象を持った。",
              "coding": "Q13"
            },
            {
              "label": "思いやりのある人物だと感じた。",
              "coding": "Q14"
            },
            {
              "label": "世間に向けてかっこつけようとしているように感じた。",
              "coding": "Q15"
            },
            {
              "label": "なかなかできないことだと感じた。",
              "coding": "Q16"
            },
            {
              "label": "こういう人が増えてほしいと感じた。",
              "coding": "Q17"
            },
            {
              "label": "目立ちたがり屋だと感じた。",
              "coding": "Q18"
            },
            {
              "label": "たいしたことのないことだと感じた。",
              "coding": "Q19"
            },
            {
              "label": "素晴らしい行動だと感じた。",
              "coding": "Q20"
            }
          ],
          "width": "5",
          "anchors": [
            "あてはまらない",
            "あまりあてはまらない",
            "どちらとも言えない",
            "ややあてはまる",
            "あてはまる"
          ],
          "label": "１（あてはまらない）～５（あてはまる）の中で、あなたの考えに最も合うものを選んでください。",
          "shuffle": true,
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "以上で質問紙への回答は終わりです。",
          "content": "「次へ」を押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "質問紙（援助者・行動への評価）"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "次に簡単な課題を行います。",
          "content": "これから、いくつかの単語が提示されます。\u003Cbr\u003E\u003Cbr\u003E\nその単語が「良い」「ポジティブ」な意味であれば\u003Cstrong\u003EFキー\u003C\u002Fstrong\u003Eを、\u003Cbr\u003E\nその単語が「悪い」「ネガティブ」な意味であれば\u003Cstrong\u003EJキー\u003C\u002Fstrong\u003Eを押してください。\u003Cbr\u003E\u003Cbr\u003E\nそれぞれの単語は\u003Cstrong\u003E3秒\u003C\u002Fstrong\u003Eしか提示されません。\u003Cbr\u003E\n\u003Cstrong\u003Eなるべく早く回答するようにしてください。\u003C\u002Fstrong\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "プライミング課題インストラクション"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "response": "negative",
          "word": "偽善"
        },
        {
          "response": "negative",
          "word": "自己満足"
        },
        {
          "response": "negative",
          "word": "押し付けがましい"
        },
        {
          "response": "negative",
          "word": "上から目線"
        },
        {
          "response": "negative",
          "word": "わざとらしい"
        },
        {
          "response": "negative",
          "word": "目立ちたがり"
        },
        {
          "response": "negative",
          "word": "独善的だ"
        },
        {
          "response": "negative",
          "word": "うさんくさい"
        },
        {
          "response": "negative",
          "word": "気取っている"
        },
        {
          "response": "negative",
          "word": "アピール好き"
        },
        {
          "response": "positive",
          "word": "親切"
        },
        {
          "response": "positive",
          "word": "誠実"
        },
        {
          "response": "positive",
          "word": "思いやりがある"
        },
        {
          "response": "positive",
          "word": "優しい"
        },
        {
          "response": "positive",
          "word": "立派だ"
        },
        {
          "response": "positive",
          "word": "信頼できる"
        },
        {
          "response": "positive",
          "word": "尊敬できる"
        },
        {
          "response": "positive",
          "word": "責任感がある"
        },
        {
          "response": "positive",
          "word": "献身的だ"
        },
        {
          "response": "positive",
          "word": "良心的だ"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "プライミング課題",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 32,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "＋",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 100,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "注視",
            "timeout": "1000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": -100,
                "angle": 0,
                "width": 895.64,
                "height": 90.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "80",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 125,
                "angle": 0,
                "width": 250,
                "height": 187.58,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "ポジティブ\n良い\nFキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "40",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 125,
                "angle": 0,
                "width": 250,
                "height": 187.58,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "ネガティブ\n悪い\nJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "40",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "positive",
              "keypress(j)": "negative"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "単語提示",
            "timeout": "3000"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 350,
          "height": 56.5,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "以上で終了です",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "50",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "終了指示",
      "timeout": "2000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以上で調査は終了です。",
          "content": "ご協力いただきましてありがとうございました。\u003Cbr\u003E\n以下に本研究の目的と概要を記しますので、ご覧になってください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "援助行動における第三者による援助者批判",
          "content": "近年、ボランティアや寄付を行う援助者に対して、SNSを中心に、援助行動には全く関係のない第三者から、「偽善者」「むしろ迷惑だ」といった批判が起こる様子が見受けられるようになっています。\u003Cbr\u003E\u003Cbr\u003E\n\nこの実験の目的は、災害ボランティアに関するSNS投稿を見た後に、人がボランティアをどのように認知・評価するのかを検討することでした。\u003Cbr\u003E\u003Cbr\u003E\n\n回答者のみなさまには、まず架空のボランティアに関する記述を読んでいただいた後で、自尊心の変化に関する質問項目、およびボランティアへの評価を測定する質問項目に回答していただきました。\u003Cbr\u003E\u003Cbr\u003E\n\nしかし、こうした質問紙調査では、望ましさの影響が生じ、回答者の本当の態度を測定できない可能性があるため、簡易的な潜在連合テストを行いました。\u003Cbr\u003E\n潜在連合テストとは、人が意識的には表出しにくい態度やイメージを、反応時間を用いて測定する心理学実験の手法です。\u003Cbr\u003E\n画面に表示される単語や画像を素早く分類してもらい、特定の対象と肯定的・否定的な概念との結び付きの強さを、分類速度の違いから推定します。\u003Cbr\u003E\u003Cbr\u003E\n\n実験中には、参加者の先入観をできるだけ避けるため、目的の一部を事前には詳しくお伝えしていませんでした。\u003Cbr\u003E\nお詫び申し上げます。\u003Cbr\u003E\u003Cbr\u003E\n\n実験中に「自分と比較してしまった」「少し気まずい気持ちになった」「妬ましく思った」と感じた方がいたとしても、それは研究で検討したい心理的反応の一つであり、そのような反応が生じること自体に良し悪しはありません。\u003Cbr\u003E\u003Cbr\u003E\n\n実験で得られたデータは統計的に処理され、個人が特定されることはありません。\u003Cbr\u003E\nまた、研究目的以外で利用されることもありません。\u003Cbr\u003E\u003Cbr\u003E\n\n改めまして、ご協力いただき誠にありがとうございました。"
        },
        {
          "required": true,
          "type": "text",
          "content": "以上のことを理解した上で、改めてデータを提供することに同意いただける方は、以下のボックスにチェックを入れて、次のページへ進んでください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "データ提供に同意しますか。",
          "options": [
            {
              "label": "同意する",
              "coding": "OK"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "デブリーフィング"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以上で調査は終了です。",
          "content": "ご協力いただきましてありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "OQcYpNqjjLYq",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "最後のページ",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()