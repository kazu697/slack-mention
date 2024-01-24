# Slack-Mention

Slack のメンションがどのようになるか確認するためのリポジトリ

## 作業手順

- Slack に Github アプリを追加する
- Slack アプリのチャンネル上で下記のコマンドを追加

`/github subscribe kazu697/slack-mention`

- commits が自動で通知されるようになるのでこれを解除する

`/github unsubscribe kazu697/slack-mention commits:*`

- PR を作成した際に通知をするようにする

- コメントの通知はデフォルトで通知してくれないのでコメントされたら通知されるように設定する

`/github subscribe kazu697/slack-mention comments`
