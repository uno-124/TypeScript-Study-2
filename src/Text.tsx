import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FCを使用するとここで関数の引数の型や戻り値の型を定義できる。(こちらが正しい？)
// FCを使用するとchildrenを暗黙的に受け取ることができる。(タグの間に入る値を受け取るパラメータ)
// ただし今後のreactのバージョンで暗黙的に受け取ることが削除される予定(18以降?)
// 現状ではVFCを変わりに使用できる(FCが対応するまでの暫定的な利用)
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
