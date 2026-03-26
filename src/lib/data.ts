import type { Category, Thread, Reply } from "./types";

export const categories: Category[] = [
  {
    id: "beginners",
    name: "はじめてのAI",
    description: "AI初心者の質問・相談はここ。どんな質問でもOK",
    icon: "Lightbulb",
    color: "bg-amber-100 text-amber-700",
    threadCount: 24,
    latestActivity: "2026-03-26T10:30:00Z",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "ChatGPTの使い方、プロンプト、活用テクニック",
    icon: "MessageSquare",
    color: "bg-green-100 text-green-700",
    threadCount: 42,
    latestActivity: "2026-03-26T09:15:00Z",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Claudeの活用法、長文処理、コーディング相談",
    icon: "Sparkles",
    color: "bg-orange-100 text-orange-700",
    threadCount: 31,
    latestActivity: "2026-03-26T11:00:00Z",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Geminiの使い方、Google連携、マルチモーダル",
    icon: "Gem",
    color: "bg-blue-100 text-blue-700",
    threadCount: 18,
    latestActivity: "2026-03-25T22:00:00Z",
  },
  {
    id: "image-gen",
    name: "画像生成AI",
    description: "Midjourney、DALL-E、Stable Diffusionなどの画像生成",
    icon: "Image",
    color: "bg-purple-100 text-purple-700",
    threadCount: 36,
    latestActivity: "2026-03-26T08:45:00Z",
  },
  {
    id: "side-job",
    name: "AI副業・収益化",
    description: "AIを使った副業の始め方、収益報告、案件相談",
    icon: "TrendingUp",
    color: "bg-emerald-100 text-emerald-700",
    threadCount: 53,
    latestActivity: "2026-03-26T11:30:00Z",
  },
  {
    id: "prompts",
    name: "プロンプト共有",
    description: "使えるプロンプトの共有・添削・改善",
    icon: "FileText",
    color: "bg-cyan-100 text-cyan-700",
    threadCount: 67,
    latestActivity: "2026-03-26T10:00:00Z",
  },
  {
    id: "automation",
    name: "AI自動化",
    description: "AIエージェント、API連携、ワークフロー自動化",
    icon: "Zap",
    color: "bg-rose-100 text-rose-700",
    threadCount: 22,
    latestActivity: "2026-03-25T20:30:00Z",
  },
  {
    id: "free-talk",
    name: "雑談・フリートーク",
    description: "AI関連の雑談、ニュース感想、自己紹介",
    icon: "Coffee",
    color: "bg-neutral-100 text-neutral-600",
    threadCount: 89,
    latestActivity: "2026-03-26T11:45:00Z",
  },
];

export const threads: Thread[] = [
  // -- beginners --
  {
    id: "t-001",
    categoryId: "beginners",
    title: "ChatGPTとClaudeどっちから始めるべき？",
    author: "AI初心者マン",
    content: "プログラミング未経験の会社員です。副業でAIを使いたいんですが、ChatGPTとClaude、どっちから始めるのがおすすめですか？予算は月3,000円くらいです。",
    createdAt: "2026-03-25T14:00:00Z",
    replyCount: 12,
    viewCount: 234,
    likes: 18,
    isSolved: true,
    tags: ["初心者", "ChatGPT", "Claude", "比較"],
  },
  {
    id: "t-002",
    categoryId: "beginners",
    title: "プロンプトって何ですか？基本を教えてください",
    author: "まったくの初心者",
    content: "最近AIが話題なので始めてみたいんですが、「プロンプト」という言葉の意味すらわかりません。基本の基本から教えていただけると助かります。",
    createdAt: "2026-03-24T09:30:00Z",
    replyCount: 8,
    viewCount: 456,
    likes: 32,
    isSolved: true,
    tags: ["初心者", "プロンプト", "基本"],
  },
  // -- chatgpt --
  {
    id: "t-003",
    categoryId: "chatgpt",
    title: "GPTsで自分専用のアシスタントを作る方法",
    author: "GPT職人",
    content: "GPTsを使って業務特化のアシスタントを作ってます。作り方のコツと、実際に使って便利だったものを共有します。\n\n## 作り方の基本\n1. 目的を明確にする\n2. Instructions に具体的なルールを書く\n3. Knowledge にドメイン知識のファイルを追加\n4. テストして改善\n\n皆さんも作ってるGPTsあったら教えてください！",
    createdAt: "2026-03-26T09:00:00Z",
    replyCount: 15,
    viewCount: 312,
    likes: 45,
    isPinned: true,
    tags: ["GPTs", "カスタマイズ", "業務効率化"],
  },
  {
    id: "t-004",
    categoryId: "chatgpt",
    title: "ChatGPTで長文を書くとき途中で切れる問題の対処法",
    author: "ライターK",
    content: "ブログ記事をChatGPTで書いてるんですが、3,000文字くらいで出力が途切れます。「続けて」と言っても文脈がズレることが多いです。何かいい方法ありますか？",
    createdAt: "2026-03-25T16:00:00Z",
    replyCount: 9,
    viewCount: 178,
    likes: 14,
    isSolved: true,
    tags: ["長文", "ライティング", "トラブル"],
  },
  // -- claude --
  {
    id: "t-005",
    categoryId: "claude",
    title: "Claude Code使ってる人、どんな感じ？",
    author: "エンジニアT",
    content: "Claude Codeが気になってます。月200ドルのMaxプラン使ってる方、実際の開発でどれくらい使えてますか？特にリファクタリングやテスト生成での使用感を聞きたいです。",
    createdAt: "2026-03-26T11:00:00Z",
    replyCount: 23,
    viewCount: 567,
    likes: 78,
    isPinned: true,
    isSolved: true,
    tags: ["Claude Code", "開発", "レビュー"],
  },
  {
    id: "t-006",
    categoryId: "claude",
    title: "Claudeの200Kコンテキスト、実際どこまで使える？",
    author: "リサーチャーM",
    content: "論文を5本まとめて投げて比較分析させたいんですが、200Kトークンの実際の限界ってどのくらいですか？途中で精度が落ちるとかありますか？",
    createdAt: "2026-03-25T20:00:00Z",
    replyCount: 7,
    viewCount: 234,
    likes: 19,
    tags: ["長文処理", "コンテキスト", "研究"],
  },
  // -- image-gen --
  {
    id: "t-007",
    categoryId: "image-gen",
    title: "Midjourney v7のプロンプト、何が変わった？",
    author: "イラストレーターS",
    content: "v7にアップデートされてからプロンプトの書き方が変わった気がします。v6まで使えてたパラメータが効かなくなったものとか、新しく追加されたものをまとめませんか？",
    createdAt: "2026-03-26T08:30:00Z",
    replyCount: 11,
    viewCount: 289,
    likes: 34,
    tags: ["Midjourney", "v7", "プロンプト"],
  },
  // -- side-job --
  {
    id: "t-008",
    categoryId: "side-job",
    title: "【収益報告】AI×ブログで月8万円達成した話",
    author: "副業ブロガーY",
    content: "AI副業を始めて6ヶ月。ついに月8万円を超えました。\n\nやったこと：\n- ChatGPTでSEO記事を週5本作成\n- Claudeで記事の品質チェック\n- Canva AIでアイキャッチ作成\n\n最初の3ヶ月はほぼ収益0でしたが、4ヶ月目から急に伸び始めました。詳細な内訳を共有します。",
    createdAt: "2026-03-26T11:30:00Z",
    replyCount: 34,
    viewCount: 892,
    likes: 156,
    isPinned: true,
    tags: ["収益報告", "ブログ", "SEO", "成功事例"],
  },
  {
    id: "t-009",
    categoryId: "side-job",
    title: "Kindle出版3ヶ月目の現実的な数字を公開",
    author: "Kindle作家N",
    content: "AIでKindle本を3ヶ月で10冊出版しました。現実的な数字を公開します。\n\n- 累計売上：約35,000円\n- 月の印税：約12,000円（安定してきた）\n- KU読み放題の方が売上より多い\n\n正直、楽して大金は無理ですが、積み上げれば確実に伸びます。",
    createdAt: "2026-03-25T18:00:00Z",
    replyCount: 19,
    viewCount: 445,
    likes: 67,
    tags: ["Kindle", "収益報告", "電子書籍"],
  },
  // -- prompts --
  {
    id: "t-010",
    categoryId: "prompts",
    title: "【共有】SEO記事を一発で書くプロンプト（改良版）",
    author: "プロンプト職人A",
    content: "何度も改良したSEO記事生成プロンプトを共有します。キーワードを入れるだけで、H2/H3構成、メタディスクリプション、内部リンク提案まで一気に出力します。\n\nフィードバックもらえると嬉しいです。改善点あればどんどん言ってください。",
    createdAt: "2026-03-26T10:00:00Z",
    replyCount: 28,
    viewCount: 678,
    likes: 89,
    isPinned: true,
    tags: ["SEO", "ブログ", "テンプレート", "共有"],
  },
  // -- automation --
  {
    id: "t-011",
    categoryId: "automation",
    title: "Claude Code + cron で完全自動ブログ更新を実現した",
    author: "自動化エンジニアR",
    content: "Claude Codeを使ってブログ記事の自動生成→投稿を完全自動化しました。仕組みはシンプルで：\n\n1. cronで毎朝6時にスクリプト実行\n2. トレンドKWを自動取得\n3. Claude Codeで記事生成\n4. WordPress REST APIで自動投稿\n\n月100記事ペースで回してます。質問あればどうぞ。",
    createdAt: "2026-03-25T20:00:00Z",
    replyCount: 41,
    viewCount: 1023,
    likes: 134,
    tags: ["自動化", "Claude Code", "WordPress", "cron"],
  },
  // -- free-talk --
  {
    id: "t-012",
    categoryId: "free-talk",
    title: "AIのせいで逆に仕事増えた人いる？笑",
    author: "社畜プログラマー",
    content: "AI導入したら効率上がったんですが、「じゃあもっとやれるよね」って仕事が増えました。同じ状況の人いますか？笑\n\nAIで楽になるはずが、期待値が上がって逆に忙しくなるパラドックス。",
    createdAt: "2026-03-26T11:45:00Z",
    replyCount: 56,
    viewCount: 1456,
    likes: 234,
    tags: ["雑談", "あるある", "働き方"],
  },
  // -- gemini (t-013, t-014, t-015) --
  {
    id: "t-013",
    categoryId: "gemini",
    title: "GeminiのGoogle Workspace連携が便利すぎる件",
    author: "Workspace民",
    content: "GeminiをGoogle Workspaceで使い始めたんですが、想像以上に便利でした。\n\n特にGmailでの返信文生成とスプレッドシートの関数提案が秀逸です。ただ、ドキュメントの長文生成はまだChatGPTに軍配が上がる感じ。\n\nWorkspace連携を使いこなしてる方、おすすめの活用法ありますか？",
    createdAt: "2026-03-25T21:00:00Z",
    replyCount: 6,
    viewCount: 189,
    likes: 22,
    isSolved: true,
    tags: ["Gemini", "Google Workspace", "Gmail", "活用法"],
  },
  {
    id: "t-014",
    categoryId: "gemini",
    title: "Gemini Advancedのマルチモーダル機能、どこまで使える？",
    author: "マルチモーダル検証中",
    content: "Gemini Advancedに課金して画像認識を試してるんですが、手書きのメモを読み取らせたら結構な精度で文字起こししてくれました。\n\nただ、グラフの読み取りは微妙で数値がズレることが多いです。皆さんの使用感はどうですか？特に仕事で使えてる人がいたら教えてほしいです。",
    createdAt: "2026-03-26T07:30:00Z",
    replyCount: 5,
    viewCount: 145,
    likes: 16,
    isSolved: true,
    tags: ["Gemini Advanced", "マルチモーダル", "画像認識"],
  },
  {
    id: "t-015",
    categoryId: "gemini",
    title: "GeminiとChatGPTのコード生成を比較してみた",
    author: "フルスタックdev",
    content: "同じプロンプトでReactコンポーネントを生成させて比較しました。\n\n結果として：\n- **TypeScript対応**：Geminiの方が型定義が丁寧\n- **スタイリング**：ChatGPTはTailwindを好んで使う傾向\n- **エラーハンドリング**：どちらも甘い。手動修正が必要\n\n全体的にはほぼ互角ですが、Google系のAPIを使うときはGeminiの方がサンプルコードの精度が高い印象です。",
    createdAt: "2026-03-26T10:15:00Z",
    replyCount: 8,
    viewCount: 213,
    likes: 31,
    isSolved: true,
    tags: ["Gemini", "ChatGPT", "コード生成", "比較"],
  },
  // -- image-gen (t-016, t-017) --
  {
    id: "t-016",
    categoryId: "image-gen",
    title: "Stable Diffusion XLのローカル環境構築でつまずいてます",
    author: "GPU初心者",
    content: "RTX 4060 Ti（16GB）でStable Diffusion XLをローカルで動かそうとしてるんですが、ComfyUIのインストールで何度もエラーが出ます。\n\nPythonは3.10.6、CUDAは12.1をインストール済みです。「torch not compiled with CUDA enabled」というエラーが出続けてます。同じ環境の方いたら助けてください。",
    createdAt: "2026-03-24T15:00:00Z",
    replyCount: 7,
    viewCount: 198,
    likes: 11,
    isSolved: true,
    tags: ["Stable Diffusion", "ComfyUI", "環境構築", "トラブル"],
  },
  {
    id: "t-017",
    categoryId: "image-gen",
    title: "DALL-E 3で商用利用可能なアイキャッチを量産する方法",
    author: "デザイナー見習い",
    content: "ブログのアイキャッチ画像をDALL-E 3で作ってます。商用利用OKなのが嬉しいんですが、どうしても「AIっぽさ」が抜けなくて困ってます。\n\n特にテキストを含む画像は文字が崩れることが多いです。Canvaとの合わせ技で対処してる方いますか？プロンプトのコツも聞きたいです。",
    createdAt: "2026-03-25T11:00:00Z",
    replyCount: 5,
    viewCount: 167,
    likes: 19,
    isSolved: true,
    tags: ["DALL-E", "商用利用", "アイキャッチ", "ブログ"],
  },
  // -- automation (t-018, t-019) --
  {
    id: "t-018",
    categoryId: "automation",
    title: "Make（旧Integromat）× OpenAI APIで問い合わせ自動返信を作った",
    author: "ノーコード自動化",
    content: "小規模ECサイトの問い合わせ対応をMake + OpenAI APIで自動化しました。\n\n仕組みは：\n1. 問い合わせメールをMakeで検知\n2. OpenAI APIで返信文を生成\n3. 管理者に確認通知を送信\n4. 承認後に自動返信\n\n完全自動ではなく承認ステップを入れてるのがポイントです。月のAPI費用は約2,000円。導入したい方いたら手順を詳しく書きます。",
    createdAt: "2026-03-25T13:00:00Z",
    replyCount: 9,
    viewCount: 312,
    likes: 47,
    isSolved: true,
    tags: ["Make", "OpenAI API", "自動化", "EC"],
  },
  {
    id: "t-019",
    categoryId: "automation",
    title: "Zapier vs Make vs n8n、AI自動化にはどれがいい？",
    author: "ツール選定中",
    content: "AIを使ったワークフロー自動化を始めたいんですが、ツール選びで迷ってます。\n\n要件は：\n- OpenAI APIとの連携\n- Googleスプレッドシートへのデータ書き込み\n- Slack通知\n- 月100回くらいの実行頻度\n\nコスト面も含めておすすめを教えてほしいです。プログラミングは多少できます。",
    createdAt: "2026-03-26T06:00:00Z",
    replyCount: 6,
    viewCount: 223,
    likes: 28,
    isSolved: true,
    tags: ["Zapier", "Make", "n8n", "ツール比較"],
  },
  // -- beginners (t-020, t-021) --
  {
    id: "t-020",
    categoryId: "beginners",
    title: "AIに仕事を奪われるのが怖い。実際のところどうなの？",
    author: "不安な事務職",
    content: "経理の仕事をしてますが、AIで事務職がなくなるというニュースを見て不安です。\n\n実際にAIを使ってる方、自分の仕事にどんな影響がありましたか？事務職の人でAIを活用してる例があれば知りたいです。漠然とした質問ですみません。",
    createdAt: "2026-03-24T19:00:00Z",
    replyCount: 11,
    viewCount: 534,
    likes: 42,
    isSolved: true,
    tags: ["初心者", "キャリア", "事務職", "将来"],
  },
  {
    id: "t-021",
    categoryId: "beginners",
    title: "無料で使えるAIツールだけで副業できる？",
    author: "節約家のサラリーマン",
    content: "課金せずに無料のAIツールだけで副業を始めることは可能でしょうか？\n\n今使ってるのは：\n- ChatGPT無料版\n- Bing Image Creator\n- Google Gemini（無料版）\n\nこれだけでも何かできることはありますか？月1万円でも稼げたら嬉しいです。",
    createdAt: "2026-03-25T08:00:00Z",
    replyCount: 7,
    viewCount: 378,
    likes: 35,
    isSolved: true,
    tags: ["初心者", "無料", "副業", "ツール"],
  },
  // -- chatgpt (t-022, t-023) --
  {
    id: "t-022",
    categoryId: "chatgpt",
    title: "ChatGPTのメモリ機能が暴走して困ってる",
    author: "メモリ被害者",
    content: "ChatGPTのメモリ機能が勝手に間違った情報を記憶して、毎回おかしな前提で回答してきます。\n\n例えば一度冗談で「猫が好き」と言ったら、以降のすべての回答に猫の話を絡めてくるようになりました。メモリを個別に削除してもまた似たようなことが起きます。\n\n同じ症状の人いますか？完全にリセットする方法はありますか？",
    createdAt: "2026-03-26T08:00:00Z",
    replyCount: 8,
    viewCount: 256,
    likes: 37,
    isSolved: true,
    tags: ["ChatGPT", "メモリ", "トラブル", "設定"],
  },
  {
    id: "t-023",
    categoryId: "chatgpt",
    title: "GPT-4oとGPT-4o miniの使い分け、どうしてる？",
    author: "コスパ重視マン",
    content: "API経由でGPT-4oとGPT-4o miniを使ってるんですが、どのタスクにどちらを使うべきか迷います。\n\nminiでも十分な場面が多い気がするんですが、品質の差が出やすいタスクってありますか？特にコスト最適化を意識してる方の知見を聞きたいです。",
    createdAt: "2026-03-25T22:00:00Z",
    replyCount: 6,
    viewCount: 198,
    likes: 21,
    isSolved: true,
    tags: ["GPT-4o", "API", "コスト", "使い分け"],
  },
  // -- prompts (t-024, t-025) --
  {
    id: "t-024",
    categoryId: "prompts",
    title: "議事録を自動で要約するプロンプト、添削お願いします",
    author: "総務部のAI担当",
    content: "会議の文字起こしを要約するプロンプトを作ったんですが、どうも冗長な出力になります。\n\n現在のプロンプト：\n「以下の会議の文字起こしを要約してください。決定事項、TODO、次回までの宿題を分けて書いてください。」\n\nもっと簡潔に、かつ漏れなく出力させるにはどう改善すべきでしょうか？実際に使ってるプロンプトがあれば共有してもらえると助かります。",
    createdAt: "2026-03-25T14:30:00Z",
    replyCount: 6,
    viewCount: 234,
    likes: 26,
    isSolved: true,
    tags: ["プロンプト", "議事録", "要約", "添削"],
  },
  {
    id: "t-025",
    categoryId: "prompts",
    title: "【共有】カスタマーサポート用のトーン調整プロンプト",
    author: "CS改善チーム",
    content: "カスタマーサポートの返信文をAIで生成するときに、トーンを細かく調整できるプロンプトを作りました。\n\n特徴：\n- 丁寧度を5段階で指定可能\n- クレーム対応/通常対応/お礼の切り替え\n- 会社のNGワードリストを反映\n\n社内で3ヶ月使って対応時間が40%短縮されたので共有します。フィードバック歓迎です。",
    createdAt: "2026-03-26T09:30:00Z",
    replyCount: 10,
    viewCount: 345,
    likes: 52,
    isSolved: true,
    tags: ["プロンプト", "カスタマーサポート", "共有", "業務効率化"],
  },
  // -- side-job (t-026) --
  {
    id: "t-026",
    categoryId: "side-job",
    title: "AI×ココナラで月5万円。出品のコツを語る",
    author: "ココナラ職人",
    content: "ココナラでAIを活用したサービスを出品して、安定して月5万円ほど稼いでます。\n\n出品してるサービス：\n- AIを使った文章リライト（1件2,000円）\n- プレゼン資料の構成提案（1件3,000円）\n- SEO記事の作成代行（1件5,000円）\n\n単価は安いですが回転率を意識して数をこなしてます。価格設定と出品タイトルのコツを聞きたい方がいればお答えします。",
    createdAt: "2026-03-26T05:00:00Z",
    replyCount: 12,
    viewCount: 421,
    likes: 58,
    isSolved: true,
    tags: ["ココナラ", "副業", "収益報告", "サービス出品"],
  },
  // -- free-talk (t-027) --
  {
    id: "t-027",
    categoryId: "free-talk",
    title: "AIに頼りすぎて自分で考えなくなってる気がする",
    author: "元自力派エンジニア",
    content: "最近、何か問題に直面するとまずAIに聞く癖がついてしまって、自分で考える力が落ちてる気がします。\n\n以前は「まず自分で調べて試す」だったのが、今は「とりあえずClaudeに投げる」になってしまった。便利なんだけど、これでいいのかなと思うことがあります。\n\n同じような危機感を持ってる人いますか？どうバランスを取ってますか？",
    createdAt: "2026-03-26T04:00:00Z",
    replyCount: 18,
    viewCount: 567,
    likes: 89,
    isSolved: true,
    tags: ["雑談", "AI依存", "スキル", "考え方"],
  },
];

export const replies: Reply[] = [
  // Replies for t-001
  {
    id: "r-001",
    threadId: "t-001",
    author: "AIメンターさん",
    content: "結論から言うと、**ChatGPTから始めるのがおすすめ**です。\n\n理由：\n- 日本語の情報が圧倒的に多い\n- 無料版でも十分使える\n- GPTsやプラグインで拡張しやすい\n\nClaudeは長文処理やコーディングで強いので、ChatGPTに慣れてから試すのがいい流れだと思います。",
    createdAt: "2026-03-25T14:30:00Z",
    likes: 24,
    isBestAnswer: true,
  },
  {
    id: "r-002",
    threadId: "t-001",
    author: "両刀使いのフリーランス",
    content: "自分は両方課金してますが、用途で使い分けてます。\n\n- **短い質問・アイデア出し** → ChatGPT\n- **長文ライティング・コードレビュー** → Claude\n\n月3,000円なら片方に絞った方がいいので、まずはChatGPT Plusがコスパいいと思います。",
    createdAt: "2026-03-25T15:00:00Z",
    likes: 15,
  },
  {
    id: "r-003",
    threadId: "t-001",
    author: "Gemini推しの人",
    content: "あえてGeminiという選択肢も。Google Workspaceと連携できるので、普段Gmail使ってるなら便利ですよ。月2,900円で他より安いし。",
    createdAt: "2026-03-25T16:00:00Z",
    likes: 8,
  },
  // Replies for t-005
  {
    id: "r-004",
    threadId: "t-005",
    author: "Maxプラン勢",
    content: "Maxプラン使って2ヶ月目です。正直、**開発効率は2〜3倍**になりました。\n\n特にいいところ：\n- リファクタリングが本当に賢い。ファイル横断で整合性を保ってくれる\n- テスト生成は8割くらいそのまま使える\n- ターミナルで完結するのでエディタを切り替えなくていい\n\n月200ドルは高く感じるけど、時給換算したら余裕でペイしてます。",
    createdAt: "2026-03-26T11:15:00Z",
    likes: 45,
    isBestAnswer: true,
  },
  {
    id: "r-005",
    threadId: "t-005",
    author: "20ドルプランの人",
    content: "Proプラン（月20ドル）でも十分使えてますよ。Maxとの違いは使用量の上限くらいで、品質は同じです。まずはProで試してみるのがおすすめ。",
    createdAt: "2026-03-26T11:30:00Z",
    likes: 23,
  },
  // Replies for t-008
  {
    id: "r-006",
    threadId: "t-008",
    author: "これから始める人",
    content: "すごい！参考になります。記事のジャンルは何ですか？あとChatGPTは無料版ですか、Plusですか？",
    createdAt: "2026-03-26T11:45:00Z",
    likes: 5,
  },
  {
    id: "r-007",
    threadId: "t-008",
    author: "副業ブロガーY",
    content: "ジャンルはガジェットレビューです。ChatGPT Plusを使ってます。\n\n無料版だと品質がブレるので、月3,000円の投資は必須だと思います。6ヶ月で回収できたので結果的にはプラスです。",
    createdAt: "2026-03-26T12:00:00Z",
    likes: 12,
  },
  // Replies for t-013 (Gemini Workspace)
  {
    id: "r-008",
    threadId: "t-013",
    author: "法人プラン利用者",
    content: "Workspace連携で一番便利なのは**Googleスプレッドシートでの数式生成**です。\n\n「売上データからカテゴリ別の月次推移表を作って」と自然言語で頼むだけでVLOOKUPやSUMIFSの組み合わせを提案してくれます。\n\nあとは**Gmailの要約機能**も地味に時短になります。長いスレッドを一発で把握できるので、朝のメールチェックが半分の時間で終わるようになりました。",
    createdAt: "2026-03-25T22:00:00Z",
    likes: 18,
    isBestAnswer: true,
  },
  {
    id: "r-009",
    threadId: "t-013",
    author: "Gemini半年目",
    content: "Google Meetの議事録自動生成がかなり使えます。会議中にリアルタイムで要約してくれるので、後から見返すのが楽になりました。英語の会議でも精度が高いです。",
    createdAt: "2026-03-26T01:00:00Z",
    likes: 9,
  },
  // Replies for t-014 (Gemini マルチモーダル)
  {
    id: "r-010",
    threadId: "t-014",
    author: "データ分析屋",
    content: "仕事でグラフの読み取りに使ってますが、コツがあります。\n\n- **棒グラフ・円グラフ**：比較的正確。割合の読み取りは得意\n- **折れ線グラフ**：トレンドは掴むが、正確な数値は苦手\n- **散布図**：ほぼ使えない\n\nグラフを投げるときは「概要を説明して」ではなく「各項目の値を表形式で書き出して」と指示すると精度が上がります。",
    createdAt: "2026-03-26T08:00:00Z",
    likes: 22,
    isBestAnswer: true,
  },
  {
    id: "r-011",
    threadId: "t-014",
    author: "OCR比較マニア",
    content: "手書き認識ならGeminiはかなり優秀ですね。個人的にはClaude 3.5 Sonnetの方が複雑なレイアウトの読み取りは上だと感じますが、Geminiは処理速度が速いのがメリットです。",
    createdAt: "2026-03-26T09:00:00Z",
    likes: 11,
  },
  {
    id: "r-012",
    threadId: "t-014",
    author: "マルチモーダル検証中",
    content: "お二方ありがとうございます。グラフは表形式で出力させるのがコツなんですね。早速試してみます。用途に応じてClaudeと使い分けるのも良さそうです。",
    createdAt: "2026-03-26T10:00:00Z",
    likes: 4,
  },
  // Replies for t-015 (Gemini vs ChatGPT コード)
  {
    id: "r-013",
    threadId: "t-015",
    author: "バックエンドエンジニア",
    content: "面白い比較ですね。自分の体感だと**Python系はChatGPTが強く、Go/Rustの新しめの言語はGeminiの方が良いコード**を出す印象です。\n\nあと、Firebase関連のコードはGeminiが圧倒的に正確です。さすがGoogle製という感じ。",
    createdAt: "2026-03-26T10:45:00Z",
    likes: 19,
    isBestAnswer: true,
  },
  {
    id: "r-014",
    threadId: "t-015",
    author: "テスト書きたくない人",
    content: "テストコードの生成も比較してほしいです。自分の経験だとChatGPTの方がJestのテストケースは網羅性が高い気がしてます。Geminiはテストよりも実装の方が得意な印象。",
    createdAt: "2026-03-26T11:30:00Z",
    likes: 8,
  },
  // Replies for t-016 (Stable Diffusion 環境構築)
  {
    id: "r-015",
    threadId: "t-016",
    author: "SDXL環境構築済み",
    content: "そのエラーは**PyTorchのCUDAバージョンが合ってない**のが原因です。\n\n手順：\n1. 既存のtorchをアンインストール: `pip uninstall torch torchvision torchaudio`\n2. CUDA 12.1対応版を入れ直す: `pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121`\n3. ComfyUIを再起動\n\npipでインストールしたtorchがCPU版になってることが多いです。公式サイトのインストールコマンドを使うのが確実です。",
    createdAt: "2026-03-24T16:00:00Z",
    likes: 28,
    isBestAnswer: true,
  },
  {
    id: "r-016",
    threadId: "t-016",
    author: "GPU初心者",
    content: "解決しました。まさにCPU版のtorchが入ってました。教えてもらった手順で入れ直したら正常に動きました。ありがとうございます。",
    createdAt: "2026-03-24T18:00:00Z",
    likes: 5,
  },
  // Replies for t-017 (DALL-E アイキャッチ)
  {
    id: "r-017",
    threadId: "t-017",
    author: "ブログ月10万PV",
    content: "DALL-E 3でアイキャッチを作るときのコツ：\n\n- **テキストは入れない**。画像だけ生成してCanvaで文字を載せる\n- プロンプトに「flat design」「minimal illustration」を入れるとAIっぽさが減る\n- 背景を単色にするとブログに馴染みやすい\n- 「photorealistic」は避ける。イラスト調の方がアイキャッチ向き\n\nこの方法で月50枚くらい量産してます。",
    createdAt: "2026-03-25T12:00:00Z",
    likes: 31,
    isBestAnswer: true,
  },
  {
    id: "r-018",
    threadId: "t-017",
    author: "Canva愛用者",
    content: "同じくDALL-E + Canva派です。Canvaの背景除去機能と組み合わせると、生成した素材を自由にレイアウトできて便利ですよ。無料プランでも十分使えます。",
    createdAt: "2026-03-25T14:00:00Z",
    likes: 13,
  },
  // Replies for t-018 (Make × OpenAI 自動返信)
  {
    id: "r-019",
    threadId: "t-018",
    author: "EC運営3年目",
    content: "すごく参考になります。うちも同じようなことをやりたくて検討中でした。\n\n質問なんですが：\n- 承認ステップはSlack通知ですか？\n- 返信までのタイムラグはどれくらいですか？\n- 誤った回答が生成された場合のフィードバックの仕組みはありますか？",
    createdAt: "2026-03-25T14:00:00Z",
    likes: 8,
  },
  {
    id: "r-020",
    threadId: "t-018",
    author: "ノーコード自動化",
    content: "お答えします。\n\n- **承認はSlack通知**です。ボタン1つで承認/修正/却下を選べるようにしてます\n- タイムラグは承認込みで**平均15分**くらい。以前の手動対応（平均2時間）から大幅短縮\n- フィードバックは却下時にコメントを残せるようにして、月次でプロンプトを改善してます\n\n構築にはMakeのPro版（月1,500円くらい）が必要です。",
    createdAt: "2026-03-25T15:00:00Z",
    likes: 21,
    isBestAnswer: true,
  },
  {
    id: "r-021",
    threadId: "t-018",
    author: "カスタマーサポート長",
    content: "承認ステップを入れてるのが素晴らしいですね。完全自動にすると事故のリスクが高いので、この設計は参考になります。うちでも導入を検討します。",
    createdAt: "2026-03-25T17:00:00Z",
    likes: 12,
  },
  // Replies for t-019 (Zapier vs Make vs n8n)
  {
    id: "r-022",
    threadId: "t-019",
    author: "3ツール使い分けマン",
    content: "全部使った上での結論です。\n\n- **Zapier**：一番簡単だが高い。月100タスクだと無料枠で収まらず月$20〜\n- **Make**：コスパ最強。月10,000オペレーションで約$9。OpenAI連携も充実\n- **n8n**：セルフホスト可能で無料。ただし設定がやや複雑\n\nプログラミングが多少できるなら**n8n**、手軽に始めたいなら**Make**がおすすめです。",
    createdAt: "2026-03-26T07:00:00Z",
    likes: 34,
    isBestAnswer: true,
  },
  {
    id: "r-023",
    threadId: "t-019",
    author: "n8n布教担当",
    content: "n8n推しです。Docker Composeで立てれば30分で環境構築できます。OpenAIノードが公式で用意されてるので連携も簡単。ランニングコストがVPS代（月500円くらい）だけなのが最大のメリットです。",
    createdAt: "2026-03-26T08:30:00Z",
    likes: 17,
  },
  // Replies for t-020 (AI不安)
  {
    id: "r-024",
    threadId: "t-020",
    author: "経理10年選手",
    content: "同じく経理です。**結論から言うと、AIを使う側になれば仕事はなくなりません。**\n\n自分がやったこと：\n- 仕訳入力の自動化をChatGPTで提案 → 上司に評価された\n- 月次レポートの雛形をAIで生成 → 作成時間が半分に\n- 経費精算のチェックにAIを活用 → ミスが激減\n\n「AIに仕事を奪われる人」ではなく「AIを使って成果を出す人」になれば、むしろ評価は上がりますよ。",
    createdAt: "2026-03-24T20:00:00Z",
    likes: 56,
    isBestAnswer: true,
  },
  {
    id: "r-025",
    threadId: "t-020",
    author: "転職エージェントP",
    content: "人材業界にいますが、AIスキルのある事務職の求人はむしろ増えています。「AI活用ができる経理」は今すごく需要があるので、不安に思うよりまず触ってみることをおすすめします。",
    createdAt: "2026-03-24T21:30:00Z",
    likes: 29,
  },
  {
    id: "r-026",
    threadId: "t-020",
    author: "不安な事務職",
    content: "皆さんありがとうございます。怖がってるだけじゃダメですね。まずはChatGPTで日々の業務を効率化するところから始めてみます。",
    createdAt: "2026-03-25T07:00:00Z",
    likes: 18,
  },
  // Replies for t-021 (無料ツールで副業)
  {
    id: "r-027",
    threadId: "t-021",
    author: "無料ツール副業家",
    content: "**無料ツールだけでも月1万円は十分可能**です。自分がやってること：\n\n- ChatGPT無料版でブログ記事の構成作成 → 自分でリライト\n- Bing Image Creatorでアイキャッチ生成\n- Canva無料版でSNS投稿画像を作成\n- noteで記事を有料販売\n\n月1〜2万円くらい安定してます。無料版の制限は「回数」なので、計画的に使えば十分です。",
    createdAt: "2026-03-25T09:00:00Z",
    likes: 42,
    isBestAnswer: true,
  },
  {
    id: "r-028",
    threadId: "t-021",
    author: "コスパ最強勢",
    content: "Google Geminiの無料版は結構使えるので活用した方がいいですよ。特に長文生成はChatGPT無料版よりGeminiの方が制限が緩いです。あとPerplexityの無料版もリサーチに便利です。",
    createdAt: "2026-03-25T10:30:00Z",
    likes: 19,
  },
  // Replies for t-022 (ChatGPTメモリ)
  {
    id: "r-029",
    threadId: "t-022",
    author: "ChatGPT設定マスター",
    content: "メモリの完全リセット方法：\n\n1. **Settings** → **Personalization** → **Memory** を開く\n2. **Clear ChatGPT's memory** をクリック\n3. 一旦メモリ機能を**OFF**にして数時間使う\n4. 再度ONにする\n\nこれで完全にリセットされます。あと、メモリに記憶されたくないことは会話の最初に「この会話の内容はメモリに保存しないでください」と書くと防げます。",
    createdAt: "2026-03-26T08:30:00Z",
    likes: 41,
    isBestAnswer: true,
  },
  {
    id: "r-030",
    threadId: "t-022",
    author: "同じく被害者",
    content: "わかります。自分は一度「関西弁で返して」と頼んだら、以降ずっと関西弁で返してくるようになりました。メモリの個別削除画面で確認すると意外なことまで記憶されてて驚きますよ。",
    createdAt: "2026-03-26T09:00:00Z",
    likes: 16,
  },
  {
    id: "r-031",
    threadId: "t-022",
    author: "メモリ被害者",
    content: "ありがとうございます。Clear ChatGPT's memory で完全リセットしたら直りました。メモリに保存しないでほしい会話は事前に伝えるのが大事なんですね。",
    createdAt: "2026-03-26T10:00:00Z",
    likes: 7,
  },
  // Replies for t-023 (GPT-4o 使い分け)
  {
    id: "r-032",
    threadId: "t-023",
    author: "API課金月5万円マン",
    content: "自分の使い分け基準を共有します。\n\n**GPT-4oを使う場面：**\n- 複雑な推論が必要なタスク\n- 長文の構造化・要約\n- コードレビューや設計相談\n\n**GPT-4o miniで十分な場面：**\n- 単純な分類・ラベリング\n- テンプレートベースの文章生成\n- JSON形式への変換\n- 短い翻訳\n\nコストは約10倍違うので、miniで済むものはminiに回すだけで月の請求が半分以下になりました。",
    createdAt: "2026-03-26T00:00:00Z",
    likes: 27,
    isBestAnswer: true,
  },
  {
    id: "r-033",
    threadId: "t-023",
    author: "スタートアップCTO",
    content: "うちではまずminiに投げて、出力の品質スコアが一定以下なら4oにフォールバックする仕組みを作ってます。これで品質を落とさずにコストを60%削減できました。",
    createdAt: "2026-03-26T02:00:00Z",
    likes: 33,
  },
  // Replies for t-024 (議事録プロンプト)
  {
    id: "r-034",
    threadId: "t-024",
    author: "プロンプトエンジニア",
    content: "プロンプトを改善するポイントは**出力フォーマットを厳密に指定する**ことです。\n\n改善案：\n「以下の会議の文字起こしを、下記のフォーマットで要約してください。各項目は箇条書きで、1項目30文字以内にしてください。\n\n## 決定事項\n- （確定した内容のみ）\n\n## TODO\n- 担当者名 / タスク内容 / 期限\n\n## 次回までの宿題\n- 担当者名 / 内容」\n\n文字数制限と担当者名の明記を入れるだけでかなり実用的になります。",
    createdAt: "2026-03-25T15:30:00Z",
    likes: 35,
    isBestAnswer: true,
  },
  {
    id: "r-035",
    threadId: "t-024",
    author: "議事録自動化済み",
    content: "追加のコツとして、要約の前に「参加者リスト」を出力させると、担当者の割り振り精度が上がります。あと「議論中だが未決定の事項」というセクションも入れると、次回会議の議題設定に使えて便利ですよ。",
    createdAt: "2026-03-25T17:00:00Z",
    likes: 14,
  },
  // Replies for t-025 (CS用プロンプト)
  {
    id: "r-036",
    threadId: "t-025",
    author: "CS歴8年",
    content: "対応時間40%短縮はすごいですね。うちでも導入したいです。\n\n質問なんですが、NGワードリストはプロンプトに直接書いてますか？それともsystem messageに入れてますか？リストが多いとトークン消費が気になるので、工夫があれば教えてほしいです。",
    createdAt: "2026-03-26T10:00:00Z",
    likes: 11,
  },
  {
    id: "r-037",
    threadId: "t-025",
    author: "CS改善チーム",
    content: "NGワードリストは**system messageに入れてます**。リストが長い場合はカテゴリ分けして、問い合わせの種類に応じて必要なカテゴリだけ読み込む仕組みにしてます。\n\nこれでトークン消費を抑えつつ、漏れなくNGワードをチェックできてます。GPTsを使う場合はKnowledgeにファイルとして入れるのも手です。",
    createdAt: "2026-03-26T10:30:00Z",
    likes: 18,
    isBestAnswer: true,
  },
  {
    id: "r-038",
    threadId: "t-025",
    author: "SaaS企業のCS",
    content: "丁寧度の5段階指定、いいアイデアですね。うちは3段階（カジュアル/標準/フォーマル）でやってますが、5段階の方が細かく調整できそう。具体的な指定方法を教えてもらえると嬉しいです。",
    createdAt: "2026-03-26T11:00:00Z",
    likes: 9,
  },
  // Replies for t-026 (ココナラ)
  {
    id: "r-039",
    threadId: "t-026",
    author: "ココナラ初出品",
    content: "月5万円はすごいですね。出品タイトルのコツを教えてください。自分も出品してるんですが、閲覧数がほとんどなくて困ってます。",
    createdAt: "2026-03-26T06:00:00Z",
    likes: 7,
  },
  {
    id: "r-040",
    threadId: "t-026",
    author: "ココナラ職人",
    content: "タイトルのコツは：\n\n- **具体的な数字を入れる**（例：「3000文字のSEO記事を24時間以内に納品」）\n- **悩みに刺さるワードを入れる**（例：「ブログ更新が続かない方へ」）\n- 「AI」というワードは入れない方がいい。抵抗感がある人もいるので\n\nあと、最初の10件は赤字覚悟で安く出して評価を集めるのが鉄則です。評価が5件超えると一気に問い合わせが増えます。",
    createdAt: "2026-03-26T07:00:00Z",
    likes: 38,
    isBestAnswer: true,
  },
  {
    id: "r-041",
    threadId: "t-026",
    author: "副業月収30万",
    content: "ココナラに加えてランサーズやクラウドワークスにも出品すると、チャネルが増えて安定しますよ。同じサービスでもプラットフォームによって客層が違うので、価格設定を変えるのもアリです。",
    createdAt: "2026-03-26T09:00:00Z",
    likes: 15,
  },
  // Replies for t-027 (AI依存)
  {
    id: "r-042",
    threadId: "t-027",
    author: "シニアエンジニア",
    content: "わかります。自分も同じ危機感を持ってたので、ルールを決めました。\n\n- **新しい技術の学習時**は最初の1時間はAIを使わない\n- **設計フェーズ**ではまず自分でホワイトボードに書く\n- **デバッグ**は最初に仮説を立ててからAIに検証させる\n\nAIは「答えを教えてもらう道具」ではなく「自分の考えを検証する道具」として使うのがバランスいいと思います。",
    createdAt: "2026-03-26T05:00:00Z",
    likes: 67,
    isBestAnswer: true,
  },
  {
    id: "r-043",
    threadId: "t-027",
    author: "AI研究者",
    content: "興味深い話題ですね。認知科学の観点から言うと、道具への依存は電卓やカーナビでも起きてきたことで、AI特有の問題ではありません。\n\n大事なのは「何をAIに任せて、何を自分でやるか」の線引きを意識することだと思います。特に**判断を伴う部分**は自分の頭で考える習慣を維持した方がいいですね。",
    createdAt: "2026-03-26T06:30:00Z",
    likes: 43,
  },
  {
    id: "r-044",
    threadId: "t-027",
    author: "元自力派エンジニア",
    content: "なるほど、「検証する道具」として使うという考え方はしっくりきます。まず自分で考えて、その上でAIに壁打ちしてもらう流れを意識してみます。皆さんの意見が聞けてよかったです。",
    createdAt: "2026-03-26T08:00:00Z",
    likes: 21,
  },
];

// Helper functions
export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getThreadsByCategory(categoryId: string): Thread[] {
  return threads
    .filter((t) => t.categoryId === categoryId)
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

export function getThreadById(id: string): Thread | undefined {
  return threads.find((t) => t.id === id);
}

export function getRepliesByThread(threadId: string): Reply[] {
  return replies
    .filter((r) => r.threadId === threadId)
    .sort((a, b) => {
      if (a.isBestAnswer && !b.isBestAnswer) return -1;
      if (!a.isBestAnswer && b.isBestAnswer) return 1;
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
}

export function getLatestThreads(limit: number = 5): Thread[] {
  return [...threads]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

export function getPopularThreads(limit: number = 5): Thread[] {
  return [...threads]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
}

export function formatRelativeTime(dateStr: string): string {
  const now = new Date("2026-03-26T12:00:00Z");
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffMin < 1) return "たった今";
  if (diffMin < 60) return `${diffMin}分前`;
  if (diffHour < 24) return `${diffHour}時間前`;
  if (diffDay < 7) return `${diffDay}日前`;
  return date.toLocaleDateString("ja-JP", {
    month: "short",
    day: "numeric",
  });
}
